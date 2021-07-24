"use strict"

module.exports = function (fastify, opts, next) {
  fastify.route({
    method: "GET",
    schema: {
      tags: ["Healthcheck"],
      description: "Healthcheck endpoint to verify health",
      response: {
        200: {
          type: "object",
          properties: {
            status: {type: "string"},
            timestamp: {type: "string", format: "date-time"},
          },
        },
      },
    },
    url: "/health",
    handler: async (req, reply) => {
      return {status: "ok", timestamp: new Date().toISOString()}
    },
  })
  next()
}
