const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//.env dosyasını kullnabilmek için ve veriyi okuyabilmek için
const dotenv = require("dotenv");
dotenv.config();

// Webpack configuration
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    devServer: {
        port: process.env.PORT || 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                resolve: {
                  extensions: [".js", ".jsx"]
                },
                use: {
                  loader: "babel-loader",
                },
              },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
}