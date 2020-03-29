import config from 'config';
export const swaggerConfig = {
    swagger: '2.0',
    info: {
        description: 'This is palindrome-api services written in Node.js',
        version: '1.0.0',
        title: 'Swagger palindrome-api services Node.js',
        termsOfService: 'http://swagger.io/terms/',
        contact: {
            email: 'jenny.ough@ibm.com'
        },
        license: {
            name: 'Apache 2.0',
            url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    host: `${config.base_URL}:8080`,
    basePath: '/',
    tags: [
        {
            name: 'Palindrome Game APIs',
            description: 'Implementation for palindrome APIs'
        }
    ],
    schemes: [
        'http'
    ],
    paths: {
        '/api/getScores': {
            get: {
                tags: [
                    'Palindrome Game APIs'
                ],
                summary: 'Returns the top 5 scores',
                description: 'Returns the top 5 scores, each consisting of {name, message}',
                operationId: 'gettop5scores',
                produces: [
                    'application/json'
                ],
                parameters: [
                    {
                        name: 'name',
                        in: 'query',
                        description: 'player name to be queried',
                        required: false,
                        type: 'string'
                    }
                ],
                responses: {
                    404: {
                        description: 'players not found'
                    },
                    500: {
                        description: 'Server error'
                    },
                    200: {
                        description: 'OK'
                    }
                }
            }
        },
        '/api/submitEntry': {
            post: {
                tags: ['Palindrome Game APIs'],
                summary: 'Player Score request',
                description: 'Submit player name and message, returns the points scored for the entry',
                operationId: 'requestScore',
                consumes: ['application/json'],
                parameters: [{
                    name: 'request',
                    in: 'body',
                    description: 'the request to submit',
                    schema: {
                        $ref: '#/definitions/ScoreRequest'
                    }
                }],
                produces: [
                    'application/json'
                ],
                responses: {
                    500: {
                        description: 'Server error'
                    },
                    200: {
                        description: 'OK',
                        schema: {
                            $ref: '#/definitions/ScoreResponse'
                        }
                    }
                }
            }
        }
    },
    definitions: {
        ScoreRequest: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    example: 'Jenny Ough'
                },
                message: {
                    type: 'string',
                    example: 'abba'
                },
            }
        },
        ScoreResponse: {
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                },
							  score: {
								    type: 'integer'
							}
            }
        },
        HealthCheck: {
            type: 'object',
            properties: {
                statusCode: {
                    type: 'integer',
                    example: 200
                },
                data: {
                    type: 'string',
                    example: 'This is Palindrome APIs'
                }
            }
        }
    },
    externalDocs: {
        description: 'Find out more about Swagger',
        url: 'http://swagger.io'
    }
};
