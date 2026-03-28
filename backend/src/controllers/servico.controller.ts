import { Request, Response, NextFunction } from 'express';
import { prisma } from '../utils/prisma';
import { createServicoSchema, updateServicoSchema } from '../schemas/servico.schema';

export const getAllServicos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const servicos = await prisma.servico.findMany({
      orderBy: { nome: 'asc' },
    });
    res.json(servicos);
  } catch (error) {
    next(error);
  }
};

export const createServico = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = createServicoSchema.parse(req.body);
    const servico = await prisma.servico.create({ data });
    res.status(201).json(servico);
  } catch (error) {
    next(error);
  }
};

export const updateServico = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = String(req.params.id);
    const data = updateServicoSchema.parse(req.body);
    
    const existing = await prisma.servico.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: 'Serviço não encontrado' });

    const servico = await prisma.servico.update({
      where: { id },
      data,
    });
    res.json(servico);
  } catch (error) {
    next(error);
  }
};

export const deleteServico = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = String(req.params.id);
    
    const existing = await prisma.servico.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: 'Serviço não encontrado' });

    await prisma.servico.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
