import { Router } from 'express';
import { getAllServicos, createServico, updateServico, deleteServico } from '../controllers/servico.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// Protect all routes
router.use(authenticate);

router.get('/', getAllServicos);
router.post('/', createServico);
router.put('/:id', updateServico);
router.delete('/:id', deleteServico);

export default router;
