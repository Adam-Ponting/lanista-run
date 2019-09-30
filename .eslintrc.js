module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',

    'plugin:prettier/recommended', // we added this line
    '@vue/prettier'
  ],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
