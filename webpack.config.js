const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname,'dist'),
  },
  mode:'production',
  devtool: 'eval-cheap-source-map',
  module:{
    rules: [
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env','@babel/preset-react']
        }
        },
      resolve:{
          extensions: ['.js','.jsx'],
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
      },{
        test: /\.(png||svg)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins:[
    new CleanWebpackPlugin(), new HtmlWebpackPlugin({
      template:'./public/index.html',
      //favicon: './public/assets/icon.svg',
  })],
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname,'dist'),
    hot: true,
  }

}