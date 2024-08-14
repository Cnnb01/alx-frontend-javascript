module.exports = {
    env: {
      browser: false,
      es6: true,
      jest: true,
    },
    extends: [
      'airbnb-base',
      'plugin:jest/recommended',
      'plugin:@typescript-eslint/recommended',  // Add TypeScript support
    ],
    parser: '@typescript-eslint/parser',  // Set TypeScript parser
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: ['jest', '@typescript-eslint'],  // Add TypeScript plugin
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-underscore-dangle': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
    overrides: [
      {
        files: ['*.js'],
        excludedFiles: 'babel.config.js',
      },
      {
        files: ['*.ts', '*.tsx'],  // Add overrides for TypeScript files
        rules: {
          // Add any TypeScript-specific ESLint rules here
        },
      },
    ],
  };
