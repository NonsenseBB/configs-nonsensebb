module.exports = {
  'parser': '@typescript-eslint/parser',
  'extends': [
    '@nonsensebb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'plugins': [
    '@typescript-eslint',
  ],
  'env': {
    'node': true,
  },
  'settings': {
    'import/extensions': [
      '.js',
      '.ts',
    ],
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.ts',
        ],
      },
    },
  },
  'rules': {},
  'overrides': [
    {
      'files': [
        'src/**/__tests__/**/*.[jt]s',
        'src/**/?(*.)+(spec|test).[tj]s',
        'tests/**/*.[jt]s',
      ],
      'env': {
        'jest': true,
      },
    },
  ],
}

