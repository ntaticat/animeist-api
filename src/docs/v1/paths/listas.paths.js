export default {
    '/listas': {
        post: {
            tags: ['Listas'],
            summary: 'Agregar anime a una lista',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                datos: {
                                    type: 'object',
                                    required: ['listaId', 'anime', 'estado'],
                                    properties: {
                                        listaId: {
                                            type: 'string'
                                        },
                                        anime: {
                                            type: 'string'
                                        },
                                        estado: {
                                            type: 'string',
                                            enum: ['viendo', 'por ver', 'visto']
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: 'Anime agregado correctamente',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    lista: {
                                        $ref: '#/components/schemas/Lista'
                                    }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: 'Error al agregar anime'
                }
            }
        },

        delete: {
            tags: ['Listas'],
            summary: 'Eliminar anime de una lista',
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                datos: {
                                    type: 'object',
                                    required: ['listaId', 'nombre'],
                                    properties: {
                                        listaId: {
                                            type: 'string'
                                        },
                                        nombre: {
                                            type: 'string'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: 'Anime eliminado correctamente',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    lista: {
                                        $ref: '#/components/schemas/Lista'
                                    }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: 'Error al eliminar anime'
                }
            }
        }
    },
    '/listas/{usuarioId}': {
        get: {
            tags: ['Listas'],
            summary: 'Obtener lista de animes de un usuario',
            parameters: [
                {
                    name: 'usuarioId',
                    in: 'path',
                    required: true,
                    description: 'ID del usuario',
                    schema: {
                        type: 'string'
                    }
                }
            ],
            responses: {
                200: {
                    description: 'Lista de animes obtenida correctamente',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    animes: {
                                        type: 'array',
                                        items: {
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
                                    }
                                }
                            }
                        }
                    }
                },
                404: {
                    description: 'No se encontró la lista del usuario',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    ok: {
                                        type: 'boolean',
                                        example: false
                                    },
                                    message: {
                                        type: 'string',
                                        example: 'No se encontró la lista de animes para este usuario'
                                    }
                                }
                            }
                        }
                    }
                },
                500: {
                    description: 'Error interno del servidor'
                }
            }
        },
    }
};