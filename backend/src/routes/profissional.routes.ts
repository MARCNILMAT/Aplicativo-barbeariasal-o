import { Router } from 'express';
import { getAllProfissionais, createProfissional, updateProfissional, deleteProfissional } from '../controllers/profissional.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// Protect all routes
router.use(authenticate);

router.get('/', getAllProfissionais);
router.post('/', createProfissional);
router.put('/:id', updateProfissional);
router.delete('/:id', deleteProfissional);

export default router;
