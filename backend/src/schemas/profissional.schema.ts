import { z } from 'zod';

export const createProfissionalSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
  especialidade: z.string().min(2, 'Especialidade obrigatória'),
  comissao: z.number().min(0).max(100, 'Comissão deve ser de 0 a 100'),
});

export const updateProfissionalSchema = z.object({
  nome: z.string().min(2).optional(),
  especialidade: z.string().min(2).optional(),
  comissao: z.number().min(0).max(100).optional(),
});
