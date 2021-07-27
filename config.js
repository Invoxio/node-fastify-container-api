const AppEnv = require('./appEnv');

const appEnv = new AppEnv(process.env.NODE_ENV);

module.exports = appEnv;
