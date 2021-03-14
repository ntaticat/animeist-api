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
        const lista = await listasModel.findById(listaId).exec();
        await lista.animes.push({
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
        const lista = await listasModel.findById(listaId).exec();
        lista.animes.push({
            nombre: anime,
            estado
        });
        const indiceAnime = lista.animes.reduce((anime, index) => {
            if (anime.nombre == nombre) {
                return index;
            }
        });
        lista.animes.splice(indiceAnime, 1);
        return await lista.save();
    } catch (error) {
        throw error;
    }
};