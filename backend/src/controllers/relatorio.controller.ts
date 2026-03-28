import { Request, Response, NextFunction } from 'express';
import { prisma } from '../utils/prisma';

export const getFaturamento = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Basic aggregation: total ENTRADA and SAIDA from all time or grouped by month/day.
    // For simplicity, we just sum them all. More advanced query can take from/to query params.
    const transacoes = await prisma.financeiro.findMany();
    const entradas = transacoes.filter(t => t.tipo === 'ENTRADA').reduce((a, b) => a + b.valor, 0);
    const saidas = transacoes.filter(t => t.tipo === 'SAIDA').reduce((a, b) => a + b.valor, 0);

    res.json({
      entradas,
      saidas,
      lucro: entradas - saidas,
    });
  } catch (error) {
    next(error);
  }
};

export const getServicosMaisVendidos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Grouping Agendamentos by servicoId where status = CONCLUIDO
    const concluidos = await prisma.agendamento.findMany({
      where: { status: 'CONCLUIDO' },
      include: { servico: true },
    });

    const frequency: Record<string, { nome: string, qtd: number, receita: number }> = {};

    concluidos.forEach(ag => {
      const id = ag.servico.id;
      if (!frequency[id]) {
        frequency[id] = { nome: ag.servico.nome, qtd: 0, receita: 0 };
      }
      frequency[id].qtd += 1;
      frequency[id].receita += ag.servico.preco;
    });

    const sorted = Object.values(frequency).sort((a, b) => b.qtd - a.qtd);

    res.json(sorted);
  } catch (error) {
    next(error);
  }
};

export const getClientesFrequentes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const concluidos = await prisma.agendamento.findMany({
      where: { status: 'CONCLUIDO' },
      include: { cliente: true, servico: true },
    });

    const frequency: Record<string, { nome: string, qtd: number, gastoTotal: number }> = {};

    concluidos.forEach(ag => {
        const id = ag.cliente.id;
        if (!frequency[id]) {
            frequency[id] = { nome: ag.cliente.nome, qtd: 0, gastoTotal: 0 };
        }
        frequency[id].qtd += 1;
        frequency[id].gastoTotal += ag.servico.preco;
    });

    const sorted = Object.values(frequency).sort((a, b) => b.qtd - a.qtd);

    res.json(sorted);
  } catch (error) {
    next(error);
  }
};
