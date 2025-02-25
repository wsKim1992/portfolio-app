import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import jsAlly from 'eslint-plugin-jsx-a11y';
export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            'eslint:recommended',
            'plugin:react/recommended',
            'plugin:react-hooks/recommended',
            'plugin:jsx-a11y/recommended',
            'prettier',
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        ignorePatterns: [
            'dist',
            '.eslintrc.cjs',
            'node-modules',
            'tsconfig.json',
            'tsconfig.node.json',
        ],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: 15,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'jsx-a11y': jsAlly,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'react/function-component-definition': [
                'error',
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function',
                },
            ],
            'react/jsx-curly-brace-presence': [
                'error',
                {
                    props: 'always',
                    children: 'never',
                    propElementValues: 'always',
                },
            ],
            'react/self-closing-comp': 'error',
            'react/react-in-jsx-scope': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-refresh/only-export-components': [
                'error',
                { allowConstantExport: true },
            ],
            'import/no-unresolved': 'off',
            'import/extensions': [
                'error',
                'never',
                { svg: 'always', png: 'always', jpg: 'always', webp: 'always' },
            ],
            'prettier/prettier': 'error',
            '@typescript-eslint/no-unused-vars': ['error'],
            'no-unused-vars': 'off',
            'react/prop-types': 'off',
            'react-refresh/only-export-components': 'off',
            'react/display-name': 'off',
        },
    },
);
