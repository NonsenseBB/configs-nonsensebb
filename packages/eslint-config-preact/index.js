module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/react',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  'env': {
    'es6': true,
    'browser': true,
    'shared-node-browser': true,
  },
  'plugins': [
    'react-hooks',
  ],
  'settings': {
    'import/extensions': [
      '.js',
      '.jsx',
      '.less',
    ],
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.jsx',
        ],
      },
    },
    'import/ignore': [
      '\\.(scss|less|css)$',
    ],
    'react': {
      'pragma': 'h',
      'version': '16.0',
    },
  },
  'rules': Object.assign({}, require('@nonsensebb/eslint-config/lib/rules'), {
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-key': 'warn',
    'react/jsx-no-literals': [
      'warn',
      {
        'noStrings': true,
        'ignoreProps': true,
        'allowedStrings': [
          ':',
          '|',
          '(',
          ')',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/display-name': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        'groups': [
          [
            'builtin',
            'external',
          ],
          'parent',
          'sibling',
          'index',
        ],
        'pathGroups': [
          {
            'pattern': '**/*.{css|scss|sass}',
            'group': 'index',
            'position': 'after',
          },
        ],
      },
    ],
  }),
  'overrides': [
    {
      'files': [
        'src/**/__tests__/**/*.js?(x)',
        'src/**/?(*.)+(spec|test).js?(x)',
        'tests/**/*.js?(x)',
      ],
      'env': {
        'jest': true,
      },
    },
  ],
}
