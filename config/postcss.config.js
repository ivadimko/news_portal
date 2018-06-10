module.exports = {
  ident: 'postcss',
  plugins: [
    require('autoprefixer'),
    require('postcss-sorting'),
    require('css-mqpacker')({
      sort: require('sort-css-media-queries')
    })
  ],
  sourceMap: true
}