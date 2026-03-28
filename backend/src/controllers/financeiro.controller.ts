import { Request, Response, NextFunction } from 'express';
import { prisma } from '../utils/prisma';
import { createFinanceiroSchema, reportFinanceiroSchema } from '../schemas/financeiro.schema';

export const getAllFinanceiro = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const transactions = await prisma.financeiro.findMany({
      orderBy: { data: 'desc' },
    });
    res.json(transactions);
  } catch (error) {
    next(error);
  }
};

export const createFinanceiro = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = createFinanceiroSchema.parse(req.body);
    const financeiro = await prisma.financeiro.create({
      data: {
        tipo: data.tipo,
        descricao: data.descricao,
        valor: data.valor,
        data: data.data ? new Date(data.data) : undefined,
      },
    });
    res.status(201).json(financeiro);
  } catch (error) {
    next(error);
  }
};

export const getReport = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { startDate, endDate } = reportFinanceiroSchema.parse(req.query);

    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Include the whole end day
    end.setHours(23, 59, 59, 999);

    const transactions = await prisma.financeiro.findMany({
      where: {
        data: {
          gte: start,
          lte: end,
        },
      },
    });

    const entradas = transactions
      .filter((t) => t.tipo === 'ENTRADA')
      .reduce((sum, t) => sum + t.valor, 0);

    const saidas = transactions
      .filter((t) => t.tipo === 'SAIDA')
      .reduce((sum, t) => sum + t.valor, 0);

    const lucro = entradas - saidas;

    res.json({
      entradas,
      saidas,
      lucro,
      periodo: { start, end },
      transactions,
    });
  } catch (error) {
    next(error);
  }
};
