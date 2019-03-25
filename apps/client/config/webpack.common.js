const helpers = require('./helpers');
const HappyPack = require('happypack');
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: {
        app: './src/Components/Pages/index.tsx'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'happypack/loader'
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.svg$/, loaders: ['raw-loader',
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                {removeTitle: true},
                                {removeDimensions: true},
                                {convertColors: {shorthex: false}},
                                {convertPathData: false}
                            ]
                        }
                    }]
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw-loader'
            },
            {
                test: /\.less$/, loaders: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: "all",
                    test: /[\\/]node_modules[\\/]/,
                    name: "common",
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new HappyPack({
            threads: 8,
            loaders: [
                {
                    path: 'ts-loader',
                    options: {
                        transpileOnly: true
                    },
                    query: {happyPackMode: true}
                }
            ]
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/../assets'
        }]),
    ]
};
