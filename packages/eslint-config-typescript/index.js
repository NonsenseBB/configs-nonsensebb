const parentRules = require('@nonsensebb/eslint-config/lib/rules')

const {
  indent,
  'no-shadow': noShadow,
  'no-use-before-define': noUseBeforeDefine,
  ...rest
} = parentRules

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
  'rules': Object.assign({}, rest, {
    // TODO: implement a proper naming convention
    '@typescript-eslint/naming-convention': 'off',
    'indent': 'off',
    '@typescript-eslint/indent': indent,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      noUseBeforeDefine[0],
      Object.assign({}, noUseBeforeDefine[1], {
        'enums': true,
        'typedefs': true,
        'ignoreTypeReferences': true,
      }),
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': noShadow
  }),
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

