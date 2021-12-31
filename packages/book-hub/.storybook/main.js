const path = require('path')

module.exports = {
  stories: ['../lib/**/*.stories.@(tsx|mdx)', '../docs/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-postcss',
    '@storybook/addon-essentials',
  ],
  webpackFinal: config => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        lib: path.resolve(__dirname, '../lib'),
        styles: path.resolve(__dirname, '../styles'),
      },
    },
  }),
}
