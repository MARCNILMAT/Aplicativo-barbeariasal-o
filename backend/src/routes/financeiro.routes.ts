import { Router } from 'express';
import { getAllFinanceiro, createFinanceiro, getReport } from '../controllers/financeiro.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

// Protect all routes
router.use(authenticate);

// Only ADMIN can see full reports? Let's allow both for now, but usually it's admin.
// Prompt doesn't perfectly specify, let's just authenticate.
router.get('/', getAllFinanceiro);
router.post('/', createFinanceiro);
router.get('/relatorio', getReport);

export default router;
