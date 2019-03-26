const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const proxy = require('../mocks/middle_proxy');
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunks: ["common", 'app']
        }),
        new OpenBrowserPlugin({url: 'http://localhost:3001'})
    ],
    mode: ENV,
    optimization: {
        minimize: false
    },

    devServer: {
        historyApiFallback: false,
        before: function (app) {
            proxy(app);
        }
    }
});
