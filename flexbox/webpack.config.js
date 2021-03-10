const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
    module: {
        rules: [
 
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(jpg|png)$/,
            use: {
              loader: 'url-loader',
            },
          },
        ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'index.html',
        template: 'src/assets/index.html' 
      }),
      new CopyPlugin({
        patterns: [
          { from: "./src/assets/images", to: "images" },
        ],
      }),
    ],                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
}