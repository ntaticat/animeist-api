const mongoose = require('mongoose');

const usuariosModel = require("../models/usuariosModel");
const listasServices = require("./listasServices");

exports.createUsuario = async (nombre, usuario) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const [dbUsuario] = await usuariosModel.create([{
            nombre,
            usuario
        }], { session });

        const dbLista = await listasServices.createLista(dbUsuario._id, session);

        dbUsuario.lista = dbLista._id;

        await dbUsuario.save({ session });

        await session.commitTransaction();
        await session.endSession();
        return dbUsuario;
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    }
};