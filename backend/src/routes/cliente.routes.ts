import { Router } from 'express';
import { getAllClientes, createCliente, updateCliente, deleteCliente } from '../controllers/cliente.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// Protect all routes
router.use(authenticate);

router.get('/', getAllClientes);
router.post('/', createCliente);
router.put('/:id', updateCliente);
router.delete('/:id', deleteCliente);

export default router;
