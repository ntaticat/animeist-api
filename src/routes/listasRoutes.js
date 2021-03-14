const { Router } = require('express');
const router = Router();
const listasController = require('../controllers/listasController');

router.post("/", listasController.postListaAnime);

module.exports = router;