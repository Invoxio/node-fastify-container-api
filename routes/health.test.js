import fastify from 'fastify';
import healthRoutes from './health.js';

const server = fastify({
  logger: true,
});

test('requests the "/health" route', async (t) => {
  server.register(healthRoutes);

  const response = await server.inject({
    method: 'GET',
    url: '/health',
  });
  t.equal(response.statusCode, 200, 'returns a status code of 200');
});
