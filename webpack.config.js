const path = require('path');

module.exports = {
    entry: './public/app.js',
    output: {
      path: path.resolve(__dirname, '/public/dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
    }
  }
  