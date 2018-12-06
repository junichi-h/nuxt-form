module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    test: true,
    browser: true,
    expect: true
  },
  extends: [
    'standard',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-new': 'off',
    'no-irregular-whitespace': 'off',
    'no-useless-escape': 'off',
    'no-control-regex': 'off',
    'prettier/prettier': ['warning', {
      'singleQuote': true,
      'semi': false,
      'printWidth': 120
    }]
  }
};
