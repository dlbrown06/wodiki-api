module.exports = {
    method: 'GET',
    url: '/wods',
    schema: {
      querystring: {
        name: { type: 'string' },
        excitement: { type: 'integer' }
      },
      response: {
        200: {
            type: 'object',
            properties: {
                count: { type: 'integer' },
                results: { 
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            name: { type: 'string' }
                        }
                    } 
                }
            }
        }
      }
    },
    handler: function (request, reply) {
      reply.send({
          count: 1,
          results: [
                { name: "Second WOD Logged" },
                { name: "First WOD Logged" }
            ]
      })
    }
};