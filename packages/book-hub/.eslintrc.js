const x = require('eslint-config/eslint-next')

module.exports = {
  ...x,
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
}
