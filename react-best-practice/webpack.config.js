const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// .env dosyasını okumak için
require('dotenv').config({ path: './.env' });

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js", 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", 
    }),
  ],
  devServer: {
    port: process.env.PORT || 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};