import Router from 'express';
import usuariosRoutes from './routes/usuariosRoutes.js';
import listasRoutes from './routes/listasRoutes.js';

const router = Router();

router.use("/usuarios", usuariosRoutes);
router.use("/listas", listasRoutes);

export default router;