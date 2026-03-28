import { Router } from 'express';
import { getFaturamento, getServicosMaisVendidos, getClientesFrequentes } from '../controllers/relatorio.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// Protect all routes
router.use(authenticate);

router.get('/faturamento', getFaturamento);
router.get('/servicos-mais-vendidos', getServicosMaisVendidos);
router.get('/clientes-frequentes', getClientesFrequentes);

export default router;
