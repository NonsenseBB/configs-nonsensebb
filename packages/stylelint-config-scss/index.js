module.exports = {
  'extends': 'stylelint-config-recommended-scss',
  'plugins': [
    'stylelint-scss',
    'stylelint-order',
  ],
  'rules': require('@nonsensebb/stylelint-config/lib/rules'),
}

