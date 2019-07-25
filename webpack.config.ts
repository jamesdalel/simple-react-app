import * as webpack from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
    devtool: 'cheap-eval-source-map',
    entry: './client/index.tsx',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    mode: "development",
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    },  
    output: {
      path: __dirname + '/dist',
      filename: 'index_bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'template.html'
      })
    ]    
}

module.exports = config;