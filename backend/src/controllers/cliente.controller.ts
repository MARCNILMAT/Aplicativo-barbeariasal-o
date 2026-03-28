import { Request, Response, NextFunction } from 'express';
import { prisma } from '../utils/prisma';
import { createClienteSchema, updateClienteSchema } from '../schemas/cliente.schema';

export const getAllClientes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const clientes = await prisma.cliente.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(clientes);
  } catch (error) {
    next(error);
  }
};

export const createCliente = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = createClienteSchema.parse(req.body);
    const cliente = await prisma.cliente.create({ data });
    res.status(201).json(cliente);
  } catch (error) {
    next(error);
  }
};

export const updateCliente = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = updateClienteSchema.parse(req.body);
    
    // Check if exists
    const existing = await prisma.cliente.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: 'Cliente não encontrado' });

    const cliente = await prisma.cliente.update({
      where: { id },
      data,
    });
    res.json(cliente);
  } catch (error) {
    next(error);
  }
};

export const deleteCliente = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    
    const existing = await prisma.cliente.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: 'Cliente não encontrado' });

    await prisma.cliente.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
