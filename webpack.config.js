const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// exporting this object
module.exports = {
    // where webpack starts looking for all the dependencies which it should then bundle together
    entry: ['babel-polyfill', './server.js'],
    // tell where webpack should put the bundle file
    output: {
        // needs absolute path so we use path 
        path: path.resolve(__dirname, 'dist'),
        // name of the file webpack is creating
        filename: 'js/bundle.js'
    },
    devServer: {
        // the folder webpack should serve our files in
        contentBase: './dist'
    },
    // allows us to do complex processing of our input files
    plugins: [
        // loading & complex processing of our input index.html
        new HtmlWebpackPlugin({
            //name of the file
            filename: 'index.html',
            // template, starting, html file
            template: './app/public/index.html'
        })
    ],
    //standard babel-loader configuration https://github.com/babel/babel-loader
    module: {
        // receives an array of all the loaders we want to use
        rules: [
            {
                // look for all of the files and test if they end with .js(regular expression below)
                test: /\handlebars$/,
                //use this loader when you find .js files
                use: {
                    loader: 'handlebars-loader'
                    
                }
            }
        ]
    }
};