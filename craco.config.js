const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@mln-layouts': path.resolve(__dirname, 'src/layouts'),
      '@mln-images': path.resolve(__dirname, 'src/assets/images'),
      '@mln-svg': path.resolve(__dirname, 'src/assets/svg'),
      '@mln-scss': path.resolve(__dirname, 'src/assets/scss'),
      '@mln-navigator': path.resolve(__dirname, 'src/navigator'),
      '@mln-redux': path.resolve(__dirname, 'src/redux'),
      '@mln-thunk': path.resolve(__dirname, 'src/thunk'),
      '@mln-components': path.resolve(__dirname, 'src/components'),
      '@mln-hooks': path.resolve(__dirname, 'src/hooks'),
      '@mln-utils': path.resolve(__dirname, 'src/utils')
    }
  }
}