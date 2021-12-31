const config = require('eslint-config/eslint-next')

module.exports = {
  ...config,
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: [...config.ignorePatterns, 'pages/api/nexus-typegen.ts', 'lib/generated/**/*'],
}
