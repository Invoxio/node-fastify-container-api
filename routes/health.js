'use strict';

function healthRoutes(fastify, options, done) {
  fastify.route({
    method: 'GET',
    schema: {
      tags: ['Healthcheck'],
      description: 'Healthcheck endpoint to verify health',
      response: {
        200: {
          type: 'object',
          properties: {
            status: { type: 'string' },
            timestamp: { type: 'string', format: 'date-time' },
          },
        },
      },
    },
    url: '/health',
    handler: async (req, reply) => {
      return { status: 'ok', timestamp: new Date().toISOString() };
    },
  });
  done();
}

module.exports = healthRoutes;
