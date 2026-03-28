import { Request, Response, NextFunction } from 'express';
import { prisma } from '../utils/prisma';
import { createProfissionalSchema, updateProfissionalSchema } from '../schemas/profissional.schema';

export const getAllProfissionais = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const profissionais = await prisma.profissional.findMany({
      orderBy: { nome: 'asc' },
    });
    res.json(profissionais);
  } catch (error) {
    next(error);
  }
};

export const createProfissional = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = createProfissionalSchema.parse(req.body);
    const profissional = await prisma.profissional.create({ data });
    res.status(201).json(profissional);
  } catch (error) {
    next(error);
  }
};

export const updateProfissional = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = updateProfissionalSchema.parse(req.body);
    
    // Check if exists
    const existing = await prisma.profissional.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: 'Profissional não encontrado' });

    const profissional = await prisma.profissional.update({
      where: { id },
      data,
    });
    res.json(profissional);
  } catch (error) {
    next(error);
  }
};

export const deleteProfissional = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    
    const existing = await prisma.profissional.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: 'Profissional não encontrado' });

    await prisma.profissional.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
