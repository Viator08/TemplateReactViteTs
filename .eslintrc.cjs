module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'jest',
    'react',
    'react-hooks',
    'simple-import-sort',
    'import',
    'no-only-tests',
  ],
  rules: {
    'no-console': 'error',
    'no-plusplus': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-extra-boolean-cast': 'error',
    'no-implicit-coercion': 'error',
    'no-duplicate-imports': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'dot-notation': 'error',
    'object-shorthand': ['error', 'always'],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-nested-ternary': 'error',
    'no-only-tests/no-only-tests': 'error',
    'no-restricted-imports': ['error', { patterns: ['/src', '/build'] }],
    'no-lonely-if': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    yoda: 'error',
    'operator-assignment': 'error',
    curly: 'error',
    'require-atomic-updates': ['error', { allowProperties: true }],
    'no-constant-binary-expression': 'error',
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-empty-function': 0,
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-default-export': 'error',
    'react/jsx-key': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-boolean-value': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: true,
        noSortAlphabetically: true,
      },
    ],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^react', '^@emotion', '^\\w'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^\\u0000\\.\\.(?!/?$)', '^\\u0000\\.(?!/?$)'],
        ],
      },
    ],
  },
};