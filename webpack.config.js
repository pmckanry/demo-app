const path = require('path');

module.exports = {
    mode: 'development',
    entry: './client/index.jsx',
    output: {
        path: path.resolve(__dirname, 'server', 'public'),
        filename: 'app.bundle.js'
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
      ]
    }
  };