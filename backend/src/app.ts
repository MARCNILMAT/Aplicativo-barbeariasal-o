import express from 'express';
import cors from 'cors';
import { prisma } from './utils/prisma';

import authRoutes from './routes/auth.routes';
import clienteRoutes from './routes/cliente.routes';
import profissionalRoutes from './routes/profissional.routes';
import servicoRoutes from './routes/servico.routes';
import agendamentoRoutes from './routes/agendamento.routes';
import financeiroRoutes from './routes/financeiro.routes';
import whatsappRoutes from './routes/whatsapp.routes';
import relatorioRoutes from './routes/relatorio.routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

console.log('[STARTUP] DATABASE_URL check:', process.env.DATABASE_URL ? 'PRESENT' : 'MISSING');
console.log('[STARTUP] JWT_SECRET check:', process.env.JWT_SECRET ? 'PRESENT' : 'MISSING');

app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/clientes', clienteRoutes);
app.use('/profissionais', profissionalRoutes);
app.use('/servicos', servicoRoutes);
app.use('/agendamentos', agendamentoRoutes);
app.use('/financeiro', financeiroRoutes);
app.use('/whatsapp', whatsappRoutes);
app.use('/relatorios', relatorioRoutes);

app.get('/', (req, res) => {
  res.send('Barber Shop & Salon API');
});

app.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', database: 'connected' });
  } catch (error: any) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// Global Error Handler
app.use(errorHandler);

export default app;
