const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');

module.exports = {
    entry: './src/main.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Puzzel Test',
            template: 'src/index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets" }
            ]
        }),
    ],

    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 4000,
    },
};