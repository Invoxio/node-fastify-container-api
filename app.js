'use strict';

const path = require('path');
const AutoLoad = require('fastify-autoload');

const appEnv = require('./config');
module.exports = async function (fastify, opts) {
  // Place here your custom code!
  appEnv();
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  await fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes folders
  // define your routes in one of these
  await fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    ignorePattern: /.*(test|spec).js/,
    options: Object.assign({ prefix: '/' }, opts),
  });

  if (appEnv.isDevelopment) {
    fastify.log.info(fastify.printRoutes());
  }
};
