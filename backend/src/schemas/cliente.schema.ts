import { z } from 'zod';

export const createClienteSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
  telefone: z.string().min(8, 'Telefone inválido'),
  observacoes: z.string().optional(),
});

export const updateClienteSchema = z.object({
  nome: z.string().min(2).optional(),
  telefone: z.string().min(8).optional(),
  observacoes: z.string().optional(),
});
