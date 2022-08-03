module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'no-param-reassign': 0,
    'no-console': 0,
    'no-extend-native': 0,
    'no-restricted-syntax': 0,
    'no-continue': 0,
    'class-methods-use-this': 0,
    'import/extensions': 0,
    'react/display-name': 0,
    'no-shadow': 0,
    'no-mixed-operators': 0,
    'no-restricted-globals': 0,
    'no-plusplus': 0,
    'linebreak-style': 0,
  },
};
