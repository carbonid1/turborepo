module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'next/core-web-vitals',
    'next',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'import'],
  ignorePatterns: ['node_modules', '.next', '.turbo'],
  settings: {
    next: {
      rootDir: [
        'packages/book-hub/',
        'packages/eslint-config/',
        'packages/tsconfig/',
        'packages/ui/',
        'packages/ui-transpiled/',
      ],
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        project: ['tsconfig.json', 'package/tsconfig.json'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.json', 'package/tsconfig.json'],
      },
    },
  },
  rules: {
    'jsx-quotes': 'warn',
    'no-console': [
      'warn',
      {
        allow: ['error'],
      },
    ],
    'no-unused-vars': 'off',
    'no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/newline-after-import': 1,
    'import/order': [
      1,
      {
        pathGroups: [
          {
            pattern: 'lib/**',
            group: 'external',
            position: 'after',
          },
        ],
      },
    ],
  },
}
