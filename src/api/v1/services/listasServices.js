const listasModel = require('../models/listasModel');

exports.createLista = async (usuarioId) => {
    try {
        const newLista = new listasModel({
            usuario: usuarioId,
            animes: []
        });
        return await newLista.save();
    } catch (error) {
        throw error;
    }
};

exports.addAnimeLista = async (listaId, anime, estado) => {
    try {
        const lista = await listasModel.findById(listaId);

        if (!lista) {
            throw new Error('Lista no encontrada');
        }

        lista.animes.push({
            nombre: anime,
            estado
        });
        return await lista.save();
    } catch (error) {
        throw error;
    }
};

exports.removeAnimeLista = async (listaId, nombre) => {
    try {
        const lista = await listasModel.findById(listaId);

        if (!lista) {
            throw new Error('Lista no encontrada');
        }

        const indiceAnime = lista.animes.findIndex(anime => anime.nombre === nombre);

        if (indiceAnime === -1) {
            throw new Error('Anime no encontrado');
        }

        lista.animes.splice(indiceAnime, 1);
        return await lista.save();
    } catch (error) {
        throw error;
    }
};

exports.obtenerListaAnimesPorUsuario = async (usuarioId) => {
    const lista = await listasModel.findOne({ usuario: usuarioId }).select("animes").lean();
    return lista;
};