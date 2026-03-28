import { Request, Response, NextFunction } from 'express';
import { prisma } from '../utils/prisma';

// Simulates a webhook receiving a message and auto-replying/scheduling
export const webhook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { from, message } = req.body;

    if (!from || !message) {
      return res.status(400).json({ error: 'Payload requires "from" and "message"' });
    }

    const text = message.toLowerCase();

    // Mock logic
    if (text.includes('ola') || text.includes('olá') || text.includes('oi')) {
      return res.json({
        reply: 'Olá! Bem-vindo à nossa barbearia. Digite 1 para agendar um horário ou 2 para ver nossos serviços.',
      });
    }

    if (text === '2') {
      const servicos = await prisma.servico.findMany({ take: 5 });
      const servicosText = servicos.map(s => `${s.nome}: R$ ${s.preco.toFixed(2)}`).join('\n');
      return res.json({
        reply: `Nossos serviços:\n${servicosText}\n\nPara agendar, digite "Agendar [Nome do Serviço]".`,
      });
    }

    if (text.startsWith('agendar')) {
      return res.json({
        reply: 'Você solicitou um agendamento! (Isto é uma simulação). Um de nossos atendentes entrará em contato em breve para confirmar o horário e profissional.',
        action: 'mock_scheduled'
      });
    }

    res.json({
      reply: 'Desculpe, não entendi. Digite "Oi" para começar.',
    });
  } catch (error) {
    next(error);
  }
};
