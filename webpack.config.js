const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const MODE = 'production';
const enabledSourceMap = MODE === "development";

module.exports = {
  // context: __dirname,
  cache: true,
  mode: MODE,
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: {
    bundle: path.resolve(__dirname, './src/main.js'),
  },
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: path.resolve(__dirname, './dist/'),
    // publicPath: '/assets/js',
    filename: 'assets/js/[name].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          // node_modules配下のモジュールをバンドル対象とする
          test: /node_modules/,
          name: "vendor",
          chunks: "initial",
          enforce: true
        }
      }
    }
  },
  devServer: {
    open: true,//ブラウザを自動で開く
    contentBase: path.join(__dirname, 'dist'),// HTML等コンテンツのルートディレクトリ
    watchContentBase: true,//コンテンツの変更監視をする
    port: 3000, // ポート番号
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        exclude: /(node_modules)/,
        // include: [
        //   srcPath,
        //   path.resolve(__dirname, 'node_modules/gsap'),
        // ],
        use: [
          {
            // Babel を利用する
            loader: "babel-loader",
            // Babel のオプションを指定する
            options: {
              "presets": [
                ["@babel/preset-env", {
                  "useBuiltIns": false,
                }],
              ],
              "plugins": [
                "@babel/plugin-transform-runtime",
                "@babel/plugin-syntax-dynamic-import"
              ]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          // 'css-loader',
          'style-loader',
          {
            loader: "css-loader",
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              sourceMap: enabledSourceMap,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          // PostCSSのための設定
          {
            loader: "postcss-loader",
            options: {
              sourceMap: enabledSourceMap,
              plugins: [
                require("autoprefixer")({
                  grid: true
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              data: `
              @import "./src/assets/_sass/setting/_variables.scss";
              @import "./src/assets/_sass/setting/_functions.scss";
              @import "./src/assets/_sass/mixin/_mixin.scss";
              `,
              sourceMap: enabledSourceMap
            },
          }
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-plain-loader"
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loaders: 'url-loader'
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: [
          'raw-loader',
          'glslify-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],// importするときに省略できる拡張子の設定
    // modules: [// モジュールを読み込むときに検索するディレクトリの設定
    //   'node_modules'
    // ],
    alias: {// 例えばmain.js内で `import Vue from 'vue';` と記述したときの`from vue`が表すファイルパスを指定
      vue$: 'vue/dist/vue.esm.js',
      // vuex$: 'vuex/dist/vuex.js'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      'THREE': 'three/build/three'
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin(
      [
        {
          context: './src/',
          from: 'assets/img',
          to: 'assets/img',
        },
      ],
    ),
    new CopyWebpackPlugin(
      [
        {
          context: './src/',
          from: '**.html',
          to: '',
        },
      ],
    ),
    // new HtmlWebpackPlugin({title: 'Revision control'})
  ]
};