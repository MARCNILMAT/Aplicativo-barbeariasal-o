import { Router } from 'express';
import { getAllAgendamentos, createAgendamento, updateAgendamento, deleteAgendamento } from '../controllers/agendamento.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// Protect all routes
router.use(authenticate);

router.get('/', getAllAgendamentos);
router.post('/', createAgendamento);
router.put('/:id', updateAgendamento);
router.delete('/:id', deleteAgendamento);

export default router;
