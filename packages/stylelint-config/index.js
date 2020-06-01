module.exports = {
  'extends': 'stylelint-config-recommended',
  'plugins': [
    'stylelint-order',
  ],
  'rules': require('./lib/rules'),
}

