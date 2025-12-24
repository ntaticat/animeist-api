const listaSchema = require('./schemas/lista.schema');
const usuarioSchema = require('./schemas/usuario.schema');

const listasPaths = require('./paths/listas.paths');
const usuariosPaths = require('./paths/usuarios.paths');

module.exports = {
    openapi: "3.0.0",
    info: {
        title: "Animeist API",
        version: "v1",
        description: "Documentación legacy de Animeist API"
    },
    servers: [
        {
            url: "http://localhost:4000/api/v1"
        }
    ],
    components: {
        schemas: {
            ...listaSchema,
            ...usuarioSchema
        }
    },
    paths: {
        ...listasPaths,
        ...usuariosPaths
    }
};
