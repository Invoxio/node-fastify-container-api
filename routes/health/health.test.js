const setupTestEnvironment = require('../../tests/setupTests');

const fastify = setupTestEnvironment();

test('should answer that it is healthy', async () => {
  const health = await fastify.inject({
    url: '/health',
    method: 'GET',
  });

  expect(health.statusCode).toBe(200);
  expect(health.json().status).toBe('ok');
});
