module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  'env': {
    'shared-node-browser': true,
  },
  'parserOptions': {
    'ecmaVersion': 2017,
  },
  'rules': require('./lib/rules'),
  'overrides': [
    {
      'files': [
        'src/**/__tests__/**/*.js',
        'src/**/?(*.)+(spec|test).js',
        'tests/**/*.js',
      ],
      'env': {
        'jest': true,
      },
    },
  ],
}
