const path = require('path');

module.exports = {
    entry: require.resolve('./example/js/main.js'),
    context: __dirname,
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'example/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    }
};
