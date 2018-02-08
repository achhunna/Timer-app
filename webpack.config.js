module.exports = {
  entry: './jsx/app.jsx',
  output: {
    path: __dirname + '/js/',
    filename: 'client.min.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node-modules)/,
        loader: 'babel-loader',
        query:
        {
          presets:['react', 'es2015']
        }
      }
    ]
  }
}
