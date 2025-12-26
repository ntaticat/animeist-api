import { startSession } from 'mongoose';

import usuariosModel from "../models/usuariosModel.js";
import { createLista } from "./listasServices.js";

export async function createUsuario(nombre, usuario) {
    const session = await startSession();
    session.startTransaction();

    try {
        const [dbUsuario] = await usuariosModel.create([{
            nombre,
            usuario
        }], { session });

        const dbLista = await createLista(dbUsuario._id, session);

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
}