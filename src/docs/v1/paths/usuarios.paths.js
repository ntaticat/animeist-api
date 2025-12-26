export default {
    '/usuarios': {
        post: {
            tags: ['Usuarios'],
            summary: 'Crear un usuario',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            required: ['nombre', 'usuario'],
                            properties: {
                                nombre: {
                                    type: 'string'
                                },
                                usuario: {
                                    type: 'string'
                                }
                            }
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: 'Usuario creado correctamente',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    usuario: {
                                        $ref: '#/components/schemas/Usuario'
                                    }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: 'Error al crear usuario'
                }
            }
        }
    }
};