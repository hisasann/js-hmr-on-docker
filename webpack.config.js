const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,

  entry: {
    app: [
      './app/index',
    ],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  plugins: [
  ],

  watchOptions: {
    aggregateTimeout: 300,
    poll: 500
  },

  devServer: {
    contentBase: './dist',
    port: 4567,
    host: '0.0.0.0'         // dockerのコンテナで立てたサーバが他のホストからアクセスできるように全てのネットワークインターフェースに接続

    // via https://github.com/webpack/webpack/issues/1151
    // hot: true,
    // inline: true,
  },
};
