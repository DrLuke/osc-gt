const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    electron_app: './src/electron_app.js',
    index: './src/index.js',
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
        test: /src\/electron_app\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "file-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};