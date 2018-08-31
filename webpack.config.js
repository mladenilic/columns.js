const path = require('path');

module.exports = {
    entry: require.resolve('./src/columns.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'columns.min.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'example')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
};
