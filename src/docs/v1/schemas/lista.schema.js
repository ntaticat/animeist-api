export default {
    Lista: {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                example: '64f1c9b9c2a4f9a1b1234567'
            },
            usuario: {
                type: 'string',
                description: 'ID del usuario dueño de la lista'
            },
            animes: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/Anime'
                }
            }
        }
    },

    Anime: {
        type: 'object',
        properties: {
            nombre: {
                type: 'string',
                example: 'one piece'
            },
            estado: {
                type: 'string',
                enum: ['viendo', 'por ver', 'visto'],
                example: 'viendo'
            }
        }
    }
};