module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        selfClosingTag: 'never'
      }
    ]
  }
}
