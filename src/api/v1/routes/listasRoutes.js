const router = require('express').Router();
const listasController = require('../controllers/listasController');

router.get("/:usuarioId", listasController.getAnimes);
router.post("/", listasController.postAnime);
router.delete("/", listasController.deleteAnime);

module.exports = router;