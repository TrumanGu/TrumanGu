const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isDev = process.env.NODE_ENV !== 'production'

function resolve(dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
    chainWebpack: config => {
        config.plugin('define').tap(args => {
            const argv = process.argv
            const icourt = argv[argv.indexOf('--icourt-mode') + 1]

            args[0]['process.env'].MODE = `"${icourt}"`

            return args
        })
        config.resolve.alias
            .set('@', path.resolve(__dirname, 'src'));
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear() 
        svgRule.exclude.add(/node_modules/)
        svgRule
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            })

        // 修改images loader 添加svg处理
        const imagesRule = config.module.rule('images')
        imagesRule.exclude.add(resolve('src/icons'))
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)


    },
    configureWebpack: {
        module: {
            rules: [
                // {
                //   test: /\.css$/,
                //   use: [
                //     isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                //     'css-loader',
                //   ],
                // },
                // {
                //   test: /\.(scss|sass)$/,
                //   use: [
                //     isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                //     "css-loader",
                //     "postcss-loader",
                //     "sass-loader"
                //   ],
                // },
            ]
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    theme: {
                        name: 'chunk-iview',
                        test: /[\\/]node_modules[\\/]iview[\\/]/,
                        chunks: 'all',
                        priority: 1,
                        reuseExistingChunk: true,
                        enforce: true
                    },
                    highlightjs: {
                        name: 'chunk-highlightjs',
                        test: /[\\/]node_modules[\\/]highlight.js[\\/]/,
                        chunks: 'all',
                        priority: 1,
                        reuseExistingChunk: true,
                        enforce: true
                    }
                }
            }
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: isDev ? "[name].css" : "css/[name].[contenthash].css",
                chunkFilename: isDev ? "[id].css" : "css/[id].[contenthash].css"
            }),
            new CompressionWebpackPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
                threshold: 10240,
                minRatio: 0.8
            }),
            // new BundleAnalyzerPlugin() 
        ],
    },
    productionSourceMap: false,

    devServer: {
        open: true,
        https: false,
        proxy: {
            '/api': {
                target: 'https://trumangu.fun',
            },
            // '/api': {
            //     target: 'http://localhost:3000',
            // },

        },
    },
}