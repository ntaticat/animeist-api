const usuariosModel = require("../models/usuariosModel");
const listasServices = require("./listasServices");

exports.createUsuario = async (nombre, usuario) => {
    try {
        const newUsuario = new usuariosModel({
            nombre,
            usuario
        });
        const dbUsuario = await newUsuario.save();
        const dbLista = await listasServices.createLista(dbUsuario._id);
        dbUsuario.lista = dbLista._id;
        return await dbUsuario.save();
    } catch (error) {
        throw error;
    }
};