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
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-extend-native': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'react/display-name': 'off',
    'no-shadow': 'off',
    'no-mixed-operators': 'off',
    'no-restricted-globals': 'off',
  },
};
