const router = require('express').Router();

router.use("/usuarios", require('./routes/usuariosRoutes'));
router.use("/listas", require('./routes/listasRoutes'));

module.exports = router;