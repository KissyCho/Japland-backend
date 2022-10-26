import {Router} from 'express';
import {getN5Vocabilary} from './src/controllers/vocabilary.js'

const router = Router();

router.get('/n5Vocab', getN5Vocabilary)

export default router;