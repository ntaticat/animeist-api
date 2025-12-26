import listaSchema from './schemas/lista.schema.js';
import usuarioSchema from './schemas/usuario.schema.js';

import listasPaths from './paths/listas.paths.js';
import usuariosPaths from './paths/usuarios.paths.js';

export default {
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
