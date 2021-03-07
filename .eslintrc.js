module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:react/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended', // Make sure this is always the last configuration in the extends array.
    ],
    plugins: [
        'react',
        'sort-destructure-keys'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
            "jsx": true
        }
    },
    ignorePatterns: [
        '.eslintrc.js',
        '.prettierrc.js',
        'jest.config.js',
        '*.d.ts',
        'postcss.config.js',
        'tailwind.config.js'
    ],
    env: {
        browser: true,
        jest: true,
        es6: true,
        node: true,
    },
    rules: {
        'no-var': 'error',
        semi: 'error',
        indent: ['error', 2, { SwitchCase: 1 }],
        'no-multi-spaces': 'error',
        'space-in-parens': 'error',
        'no-multiple-empty-lines': 'error',
        'prefer-const': 'error',
        'no-use-before-define': 'error',
        'max-len': ['error', 120, {
            "ignoreComments": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true
        }],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'sort-destructure-keys/sort-destructure-keys': 2,
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                ignoreRestSiblings: true,
            },
        ],
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'prefer-destructuring': ['error'],
        'prefer-template': 'error',
        'object-shorthand': 'warn',
        'newline-after-var': ['error', 'always'],
        curly: 'error',
        'no-case-declarations': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': [
            'error',
            {
                ignoreConditionalTests: true,
                ignoreMixedLogicalExpressions: true,
            }
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                next: 'return',
                prev: '*',
            },
            {
                blankLine: 'always',
                next: '*',
                prev: 'directive',
            },
            {
                blankLine: 'any',
                next: 'directive',
                prev: 'directive',
            },
            {
                blankLine: 'always',
                next: '*',
                prev: ['case', 'default'],
            },
        ],
        "react/react-in-jsx-scope": "off",
        "react/no-unescaped-entities": "off"
    },
};
