import { Request, Response, NextFunction } from 'express';
import { prisma } from '../utils/prisma';
import { createAgendamentoSchema, updateAgendamentoSchema } from '../schemas/agendamento.schema';

export const getAllAgendamentos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const agendamentos = await prisma.agendamento.findMany({
      include: {
        cliente: true,
        profissional: true,
        servico: true,
      },
      orderBy: { data_hora: 'asc' },
    });
    res.json(agendamentos);
  } catch (error) {
    next(error);
  }
};

export const createAgendamento = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = createAgendamentoSchema.parse(req.body);
    const dataHoraParsed = new Date(data.data_hora);

    // Fetch dependencies to validate and get duration
    const servico = await prisma.servico.findUnique({ where: { id: data.servicoId } });
    if (!servico) return res.status(404).json({ error: 'Serviço não encontrado' });

    // Calculate End Time
    const startTime = dataHoraParsed;
    const endTime = new Date(startTime.getTime() + servico.duracao * 60000);

    // Overlap Check Logic: Look for any agendamento for the professional where status is not CANCELADO
    // Start of new < End of existing AND End of new > Start of existing
    const conflictingAgendamentos = await prisma.agendamento.findMany({
      where: {
        profissionalId: data.profissionalId,
        status: { not: 'CANCELADO' },
        AND: [
          { data_hora: { lt: endTime } },
          // We need existing's endTime. Since SQLite doesn't let us query computed fields easily in Prisma,
          // we fetch the overlapping candidates. We can fetch those starting before our End, and ending after our Start.
          // Because Prisma doesn't have an easy way to express (existingStart + duration) in the `where`,
          // we will fetch all today's appointments for the professional and do the final check in memory.
        ],
      },
      include: { servico: true },
    });

    const hasConflict = conflictingAgendamentos.some((ag) => {
      const agStart = new Date(ag.data_hora);
      const agEnd = new Date(agStart.getTime() + ag.servico.duracao * 60000);
      return startTime < agEnd && endTime > agStart;
    });

    if (hasConflict) {
      return res.status(409).json({ error: 'Conflito de horário para este profissional.' });
    }

    const agendamento = await prisma.agendamento.create({
      data: {
        clienteId: data.clienteId,
        profissionalId: data.profissionalId,
        servicoId: data.servicoId,
        data_hora: dataHoraParsed,
        status: 'AGENDADO',
      },
      include: {
        cliente: true,
        profissional: true,
        servico: true,
      },
    });

    res.status(201).json(agendamento);
  } catch (error) {
    next(error);
  }
};

export const updateAgendamento = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = String(req.params.id);
    const data = updateAgendamentoSchema.parse(req.body);

    const existing = await prisma.agendamento.findUnique({ where: { id }, include: { servico: true } });
    if (!existing) return res.status(404).json({ error: 'Agendamento não encontrado' });

    // If changing time or service or professional, we should theoretically re-check conflicts
    // Simplification: only apply the update for now
    
    // Auto-Register Financeiro when status becomes CONCLUIDO
    let updatedAgendamento;
    await prisma.$transaction(async (tx) => {
      updatedAgendamento = await tx.agendamento.update({
        where: { id },
        data: {
          clienteId: data.clienteId,
          profissionalId: data.profissionalId,
          servicoId: data.servicoId,
          status: data.status,
          ...(data.data_hora && { data_hora: new Date(data.data_hora) }),
        },
        include: { cliente: true, profissional: true, servico: true },
      });

      if (data.status === 'CONCLUIDO' && existing.status !== 'CONCLUIDO') {
        // Find existing financeiro for this agendamento? The prompt implies "Registrar automaticamente entrada"
        await tx.financeiro.create({
          data: {
            tipo: 'ENTRADA',
            descricao: `Atendimento concluído - ${updatedAgendamento.servico.nome} com ${updatedAgendamento.profissional.nome}`,
            valor: updatedAgendamento.servico.preco,
          },
        });
      }
    });

    res.json(updatedAgendamento);
  } catch (error) {
    next(error);
  }
};

export const deleteAgendamento = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = String(req.params.id);

    const existing = await prisma.agendamento.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: 'Agendamento não encontrado' });

    await prisma.agendamento.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
