module.exports = {
    env: {
        browser: false,
        es6: true,
        jest: true,
    }, extends: [
        'airbnb-base',
        'plugin:jest/recommended',
    ], globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    }, parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    }, plugins: ['jest'],
    rules: {
        'no-undef': 'off',
        "linebreak-style": ["error", "unix"],
        "no-trailing-spaces": "error",
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
            'error',
            'LabeledStatement',
            'WithStatement',
        ],
    },
    overrides:[
        {
            files: ['*.js'],
            excludedFiles: 'babel.config.js',
        }
    ]
};