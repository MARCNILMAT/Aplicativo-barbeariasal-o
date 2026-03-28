import { Router } from 'express';
import { webhook } from '../controllers/whatsapp.controller';

const router = Router();

// Public route for webhooks
router.post('/webhook', webhook);

export default router;
