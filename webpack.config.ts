import { Configuration, HotModuleReplacementPlugin } from 'webpack'
import { join, resolve } from 'path'

import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import copyWebpackPlugin from 'copy-webpack-plugin'

const webpackConfig: (env: any, options: any) => Configuration = (_, { mode }) => ({
    target: 'web',
    entry: './src/index.tsx',
    output: {
        filename: '[name].[hash].js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: mode === 'development' ? 'inline-source-map' : false,
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg|eot|woff|woff2?|ttf)$/,
                loader: 'file-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[/\\]node_modules[/\\]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    devServer: {
        contentBase: join(__dirname, 'dist'),
        compress: true,
        inline: true,
        hot: true,
        hotOnly: true,
        historyApiFallback: true,
        port: 11000
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public/index.html'),
            favicon: resolve(__dirname, 'public/content/images/favicon.ico')
        }),
        new ForkTsCheckerWebpackPlugin({ eslint: { enabled: true, files: './src/**/*.{ts,tsx}' } }),
        new Dotenv({
            path: resolve(__dirname, `./config/${mode}.env`)
        }),
        new copyWebpackPlugin({
            patterns: [
                {
                    from: 'public/content/**/*',
                    to: 'content/',
                    flatten: true
                }
            ]
        })
    ]
})

export default webpackConfig
