const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@mln-layouts': path.resolve(__dirname, 'src/layouts'),
      '@mln-images': path.resolve(__dirname, 'src/assets/images'),
      '@mln-svg': path.resolve(__dirname, 'src/assets/svg'),
      '@mln-scss': path.resolve(__dirname, 'src/assets/scss'),
    }
  }
}