const path = require('path');

module.exports = {
    entry: require.resolve('./src/columns.js'),
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'columns.min.js'
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
