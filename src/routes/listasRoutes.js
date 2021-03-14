const { Router } = require('express');
const router = Router();
const listasController = require('../controllers/listasController');

router.post("/", listasController.postAnime);
router.delete("/", listasController.deleteAnime);

module.exports = router;