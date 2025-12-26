import Router from 'express';
import { getAnimes, postAnime, deleteAnime } from '../controllers/listasController.js';

const router = Router();

router.get("/:usuarioId", getAnimes);
router.post("/", postAnime);
router.delete("/", deleteAnime);

export default router;