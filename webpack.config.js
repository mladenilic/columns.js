const path = require('path');

module.exports = [{
  entry: path.resolve(__dirname, './src/columns.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'columns.js',
    library: {
      type: 'umd',
      name: 'Columns',
      export: 'default'
    }
  }
}];
