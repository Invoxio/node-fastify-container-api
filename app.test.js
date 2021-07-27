const AppEnv = require('./appEnv');
const appEnv = require('./config');

describe('AppEnv tests', () => {
  process.env.NODE_ENV = 'development';
  const createAppEnv = (env) => new AppEnv(env);

  it('should throw for empty env', () => {
    expect(() => createAppEnv('')).toThrow();
  });

  it('should throw for bad env', () => {
    expect(() => createAppEnv('_bad_env_value_')).toThrow();
  });

  it('should be local', () => {
    expect(createAppEnv('local').isLocal).toBe(true);
  });

  it('should be development', () => {
    expect(createAppEnv('development').isDevelopment).toBe(true);
  });

  it('should be production', () => {
    expect(createAppEnv('production').isProduction).toBe(true);
  });
});

describe('Env config tests', () => {
  // it('should throw for empty env', () => {
  //   expect(() => createAppEnv('')).toThrow();
  // });

  // it('should throw for bad env', () => {
  //   expect(() => createAppEnv('_bad_env_value_')).toThrow();
  // });

  // it('should be local', () => {
  //   expect(createAppEnv('local').isLocal).toBe(true);
  // });

  it('should be development', () => {
    expect(appEnv().isDevelopment).toBe(true);
  });

  it('should be development', () => {
    expect(!appEnv().isDevelopment).toBe(false);
  });
});
