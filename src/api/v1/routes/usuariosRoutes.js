import { Router } from 'express';
import { postUsuario } from '../controllers/usuariosController.js';

const router = Router();

router.post("/", postUsuario);

export default router;