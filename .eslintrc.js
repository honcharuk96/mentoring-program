module.exports = {
    env: {
        jest: true,
        browser: true,
        node: true,
        es2021: true,
    },
    overrides: [
        {
            files: '*.test.js',
            globals: {
                shallow: true,
                render: true,
                mount: true,
            },
        },
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
    ],
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        'comma-dangle': ['error', 'always-multiline'],
        'arrow-body-style': ['error', 'as-needed'],
        'global-require': 'off',
        'class-methods-use-this': 'off',
        'import/no-dynamic-require': 'off',
        'import/prefer-default-export': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/state-in-constructor': ['error', 'always'],
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'react/no-array-index-key': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react/no-unescaped-entities': 'off',
    },
};
