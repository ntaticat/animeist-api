const { Router } = require('express');
const router = Router();
const usuariosController = require('../controllers/usuariosController');

router.post("/", usuariosController.postUsuario);

module.exports = router;