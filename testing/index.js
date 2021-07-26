import fastify from 'fastify';
// import healthRoutes from '../routes/health.js';
// import itemRoutes from '../routes/users.js';

const app = require('../index.js');

const setupTests = () => {
  const server = fastify({
    logger: true,
  });

  server.register(healthRoutes);
  server.register(itemRoutes);

  // Declare a route
  // server.get('/', async (request, reply) => {
  //   reply.send(data);
  // });

  // Run the server!
  const start = async () => {
    try {
      await server.listen(3000);
      server.log.info(`server listening on ${server.server.address().port}`);
    } catch (err) {
      server.log.error(err);
      process.exit(1);
    }
  };
  start();
};

export default setupTests;
