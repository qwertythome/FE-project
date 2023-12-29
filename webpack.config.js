const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin')

const isDev=process.env.NODE_ENV==='development'

module.exports = {
    mode: 'development',
    entry: {
        main: './main.js',
        music: './src/music.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './main.html',
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                  from: path.resolve(__dirname, 'img/'),
                  to:   path.resolve(__dirname, 'dist/img')
                }
              ]
            }),
            new MiniCssExtractPlugin({
                filename:'[name].bundle.css',
            })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // hmr:isDev,
                        // reloadAll:true,
                      publicPath: "/public/path/to/",
                    },
                  },
                  "css-loader",],
            },
            
        ],
    },
};
