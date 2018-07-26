const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const prodConfig = merge(baseConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV:JSON.stringify('production')
            }
        }),
        new webpack.NamedModulesPlugin(),
        new UglifyJsPlugin({
            uglifyOptions: {
                output: {
                    beautify: false,
                    comments: false
                },
                compress: {
                    drop_debugger: true,
                    drop_console: true,
                    warnings: false
                }
            },
            sourceMap: false // 生成source-map
        })
    ]
})

module.exports = prodConfig
