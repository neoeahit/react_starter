module.exports = {
  entry: './index.js',
  devServer: {
    proxy: {
        '/test*': 'http://10.56.6.45:9999'
      }
  },
  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
