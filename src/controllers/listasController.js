const { request, response } = require('express');
const listasServices = require('../services/listasServices');

exports.postAnime = async (req = request, res = response) => {
    try {
        const { listaId, anime, estado } = req.body.datos;
        const dbLista = await listasServices.addAnimeLista(listaId, anime, estado);
        res.status(200).json({
            lista: dbLista
        });
    } catch (error) {
        res.status(400).json({
            error
        });
    }
};

exports.deleteAnime = async (req = request, res = response) => {
    try {
        const { listaId, nombre } = req.body.datos;
        const dbLista = await listasServices.removeAnimeLista(listaId, nombre);
        res.status(200).json({
            lista: dbLista
        });
    } catch (error) {
        res.status(400).json({
            error
        });
    }
};