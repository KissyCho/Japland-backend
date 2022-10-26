import { Router } from 'express';
import { getN5Vocabilary } from './controllers/vocabilary.js';

const router = Router();

router.get('/n5Vocab', getN5Vocabilary);

export default router;
