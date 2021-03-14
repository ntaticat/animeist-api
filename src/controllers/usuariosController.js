const { request, response } = require('express');
const usuariosServices = require('../services/usuariosServices');

exports.postUsuario = async (req = request, res = response) => {
    try {
        const { nombre, usuario } = req.body;
        const dbUsuario = await usuariosServices.createUsuario(nombre, usuario);
        res.status(200).json({
            usuario: dbUsuario
        });
    } catch (error) {
        res.status(400).json({
            error
        });
    }
};