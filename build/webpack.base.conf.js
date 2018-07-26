const path = require('path')
const webpack = require('webpack')
const WXAppPlugin = require('wxapp-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const pkg = require('../package.json')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const srcDir = path.resolve(__dirname, '../src')

const target = WXAppPlugin.Targets['Wechat']
const WXAppWebpackPlugin = WXAppPlugin.default

// in the browser.
const showEslintErrorsInOverlay = false
const useEslint = true

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !showEslintErrorsInOverlay
  }
})

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.resolve(__dirname, '../dist')
  },
  target: target,
  module: {
    rules: [
      ...(useEslint ? [createLintingRule()] : []),
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.wxs$/,
        include: /src/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              useRelativePath: true,
              name: `[name].wxs`,
              context: srcDir
            }
          },
          'babel-loader'
        ].filter(Boolean)
      },
      {
        test: /\.(less|wxss|acss)$/,
        include: /src/,
        use: [
          {
            loader: 'file-loader',
            options: {
              useRelativePath: true,
              name: `[name].wxss`,
              context: srcDir
            }
          },
          {
            loader: 'less-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'src', 'styles'), srcDir]
            }
          }
        ]
      },
      {
        test: /\.(json|png|jpe?g|gif|svg)$/,
        include: /src/,
        use: [
          {
            loader: 'file-loader',
            options: {
              useRelativePath: true,
              name: `[name].[ext]`,
              context: srcDir
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(wxml|xml)$/,
        include: /src/,
        use: [
          {
            loader: 'file-loader',
            options: {
              useRelativePath: true,
              name: `[name].wxml`,
              context: srcDir
            }
          },
          {
            loader: 'wxml-loader',
            options: {
              root: srcDir,
              enforceRelativePath: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new WXAppWebpackPlugin({
      clear: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    }),
    new webpack.IgnorePlugin(/vertx/),
    new CopyWebpackPlugin([
      {
        from: './static',
        to: './static'
      }
    ])
  ],
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules']
  }
}
