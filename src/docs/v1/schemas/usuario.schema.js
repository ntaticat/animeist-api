module.exports = {
    Usuario: {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                example: '64f1c9b9c2a4f9a1b9876543'
            },
            nombre: {
                type: 'string',
                example: 'Juan Pérez'
            },
            usuario: {
                type: 'string',
                example: 'juanp'
            },
            lista: {
                type: 'string',
                description: 'ID de la lista asociada'
            }
        }
    }
};