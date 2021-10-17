const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.js'),
      name: 'my-avatars',
      fileName: (format) => `my-avatars.${format}.js`,
    },
  },
})
