const allowedEnvironments = ['local', 'development', 'production'];

class AppEnv {
  constructor(env) {
    if (!env) {
      throw Error('Process environment is required!');
    }
    if (!allowedEnvironments.includes(env)) {
      throw Error('Process environment not allowed! Choose another!');
    }

    this._env = env;
  }

  get isLocal() {
    return this._env === 'local';
  }

  get isDevelopment() {
    return this._env === 'development';
  }

  get isProduction() {
    return this._env === 'production';
  }
}

module.exports = AppEnv;
