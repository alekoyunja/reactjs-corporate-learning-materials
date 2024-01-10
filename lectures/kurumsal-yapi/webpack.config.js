const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//.env dosyasını kullnabilmek için ve veriyi okuyabilmek için
const dotenv = require("dotenv");
dotenv.config();

// Webpack configuration
module.exports = {
    entry: "./src/index.tsx",
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
        port: process.env.PORT || 3000,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
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
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ]
    }
}