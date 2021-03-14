const { request, response } = require('express');
const listasServices = require('../services/listasServices');

exports.postListaAnime = async (req = request, res = response) => {
    const mensaje = listasServices.obtenerMensaje();
    res.json(mensaje);
};