const { request, response } = require('express');
const listasServices = require('../services/listasServices');

exports.getAnimes = async (req = request, res = response) => {
    try {
        const { usuarioId } = req.params;

        const lista = await listasServices.obtenerListaAnimesPorUsuario(usuarioId);

        if (!lista) {
            return res.status(404).json({
                ok: false,
                message: "No se encontró la lista de animes para este usuario"
            });
        }

        return res.status(200).json({
            animes: lista.animes
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error al obtener la lista de animes",
            error: error.message
        });
    }
};


exports.postAnime = async (req = request, res = response) => {
    try {
        const { listaId, anime, estado } = req.body.datos;
        const dbLista = await listasServices.addAnimeLista(listaId, anime, estado);
        res.status(200).json({
            lista: dbLista
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error al añadir un anime a la lista",
            error: error.message
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
        return res.status(500).json({
            ok: false,
            message: "Error al remover un anime a la lista",
            error: error.message
        });
    }
};