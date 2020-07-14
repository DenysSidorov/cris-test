const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');


module.exports = function (env = {}) {
  return {
    output: {
      path: path.resolve(__dirname, './www')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_VERSION': JSON.stringify(process.version),
        }
      }),
    ]
  };
}

