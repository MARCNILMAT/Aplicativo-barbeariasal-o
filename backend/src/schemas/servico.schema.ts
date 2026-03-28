import { z } from 'zod';

export const createServicoSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
  preco: z.number().min(0, 'Preço deve ser positivo'),
  duracao: z.number().min(1, 'Duração mínima é de 1 minuto'),
});

export const updateServicoSchema = z.object({
  nome: z.string().min(2).optional(),
  preco: z.number().min(0).optional(),
  duracao: z.number().min(1).optional(),
});
