import { z } from 'zod';

export const createAgendamentoSchema = z.object({
  clienteId: z.string().uuid('ID de cliente inválido'),
  profissionalId: z.string().uuid('ID de profissional inválido'),
  servicoId: z.string().uuid('ID de serviço inválido'),
  data_hora: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Data e hora inválidas',
  }),
});

export const updateAgendamentoSchema = z.object({
  clienteId: z.string().uuid().optional(),
  profissionalId: z.string().uuid().optional(),
  servicoId: z.string().uuid().optional(),
  data_hora: z.string().refine((val) => !isNaN(Date.parse(val))).optional(),
  status: z.enum(['AGENDADO', 'CONCLUIDO', 'CANCELADO']).optional(),
});
