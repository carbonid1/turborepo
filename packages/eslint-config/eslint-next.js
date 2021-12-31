module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'next/core-web-vitals',
    'next',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint'],
  ignorePatterns: ['pages/api/nexus-typegen.ts', 'lib/generated/**/*'],
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
