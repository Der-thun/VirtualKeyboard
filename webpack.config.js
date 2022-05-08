const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/scrypt.js",
    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 3002,
    },
    mode: 'development',
    output: {
        filename: "[hash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                //path: path.resolve(__dirname, ".src/assets/styles"),
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};

