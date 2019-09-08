const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = (env, options) => {
    const isDevelopment = options.mode === 'development'

    return {
        devtool: isDevelopment ? 'source-map' : 'none',
        entry: {
            index: './src/index.tsx'
        },
        output: {
            filename: '[name].[hash].js',
            path: resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json']
        },
        devServer: {
            publicPath: '/',
            contentBase: resolve(__dirname, 'dist'),
            port: '3000',
            inline: true,
            hot: true,
            hotOnly: true,
            historyApiFallback: true,
            open: 'chrome'
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.less$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                query: {
                                    modules: true,
                                    sourceMap: true,
                                    importLoaders: 1,
                                    localIdentName: '[name]__[local]___[hash:base64:6]'
                                }
                            },
                            { loader: 'less-loader' }
                        ]
                    })
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.(eot|woff|woff2|ttf)$/,
                    loader: 'url-loader'
                }
            ]
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'all'
                    }
                }
            }
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: resolve(__dirname, 'public/index.html'),
                favicon: resolve(__dirname, 'public/favicon.ico')
            }),
            new CopyWebpackPlugin([
                {
                    from: 'content/**/*',
                    to: 'content/',
                    flatten: true
                }
            ])
        ]
    }
}
