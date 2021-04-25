module.exports = {
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended'
  ],
  rules: {
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'double-quotes': 'off',
    'no-extra-semi': 'off'
  }
}
