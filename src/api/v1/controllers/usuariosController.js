import { request, response } from 'express';
import { createUsuario } from '../services/usuariosServices.js';

export async function postUsuario(req = request, res = response) {
    try {
        const { nombre, usuario } = req.body;
        const dbUsuario = await createUsuario(nombre, usuario);
        res.status(200).json({
            usuario: dbUsuario
        });
    } catch (error) {
        res.status(400).json({
            error
        });
    }
}