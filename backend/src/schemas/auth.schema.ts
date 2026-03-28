import { z } from 'zod';

export const registerSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  senha: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  tipo: z.enum(['ADMIN', 'FUNCIONARIO']).optional(),
});

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  senha: z.string(),
});
