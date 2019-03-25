const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'eval',
    output: {
        path: helpers.root('../Scripts'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    mode: ENV,
    optimization: {
        minimize: true
    }
});
