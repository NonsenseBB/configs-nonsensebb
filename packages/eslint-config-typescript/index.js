module.exports = {
  'root': true,
  'parser': '@typescript-eslint/parser',
  'extends': [
    '@nonsensebb',
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
  'rules': {
    // TODO: implement a proper naming convention
    '@typescript-eslint/naming-convention': 'off',
  },
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

