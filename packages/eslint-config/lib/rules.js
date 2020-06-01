module.exports = {
  'semi': [
    'warn',
    'never',
  ],
  'indent': [
    'warn',
    2,
    {
      'SwitchCase': 1,
      'VariableDeclarator': 'first',
      'outerIIFEBody': 1,
      'FunctionDeclaration': {
        'parameters': 1,
        'body': 1,
      },
      'FunctionExpression': {
        'parameters': 1,
        'body': 1,
      },
      'CallExpression': {
        'arguments': 1,
      },
      'ArrayExpression': 1,
      'ObjectExpression': 1,
      'ImportDeclaration': 1,
      'flatTernaryExpressions': false,
      'ignoredNodes': [
        'JSXElement',
        'JSXElement > *',
        'JSXAttribute',
        'JSXIdentifier',
        'JSXNamespacedName',
        'JSXMemberExpression',
        'JSXSpreadAttribute',
        'JSXExpressionContainer',
        'JSXOpeningElement',
        'JSXClosingElement',
        'JSXFragment',
        'JSXOpeningFragment',
        'JSXClosingFragment',
        'JSXText',
        'JSXEmptyExpression',
        'JSXSpreadChild',
      ],
      'ignoreComments': false,
    },
  ],
  'linebreak-style': [
    'error',
    'unix',
  ],
  'no-plusplus': 'off',
  'object-curly-newline': [
    'error',
    {
      'ObjectExpression': {
        'minProperties': 6,
        'multiline': true,
        'consistent': true,
      },
      'ObjectPattern': {
        'minProperties': 6,
        'multiline': true,
        'consistent': true,
      },
      'ImportDeclaration': {
        'minProperties': 6,
        'multiline': true,
        'consistent': true,
      },
      'ExportDeclaration': {
        'minProperties': 6,
        'multiline': true,
        'consistent': true,
      },
    },
  ],
  'no-use-before-define': [
    'error',
    {
      'functions': false,
      'classes': false,
      'variables': true,
    },
  ],
  'prefer-const': 'error',
  'import/prefer-default-export': 'off',
  'import/no-named-as-default': 'off',
  'no-console': 'off',
  'consistent-return': 'off',
  'no-shadow': 'off',
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
    },
  ],
  'import/no-deprecated': 'warn',
}
