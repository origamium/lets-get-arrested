const webpack = require('webpack');
const path = require('path')

module.exports = {
    output: {
        library: "lets-get-arrested",
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
}