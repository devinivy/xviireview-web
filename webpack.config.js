const Path = require('path');

module.exports = {
  context: Path.join(__dirname, 'src'),
  entry: {
    app: './components/xvii-app/index.js',
  },
  output: {
    path: Path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /.js$/,
        include: [
          Path.resolve(__dirname, 'src'),
        ],
      },
    ],
  }
};
