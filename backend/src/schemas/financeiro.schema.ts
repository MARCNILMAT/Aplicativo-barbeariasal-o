import { z } from 'zod';

export const createFinanceiroSchema = z.object({
  tipo: z.enum(['ENTRADA', 'SAIDA']),
  descricao: z.string().min(2, 'Descrição obrigatória'),
  valor: z.number().positive('O valor deve ser positivo'),
  data: z.string().refine((val) => !isNaN(Date.parse(val))).optional(),
});

export const reportFinanceiroSchema = z.object({
  startDate: z.string().refine((val) => !isNaN(Date.parse(val))),
  endDate: z.string().refine((val) => !isNaN(Date.parse(val))),
});
