const path = require('path');

module.exports = {
    entry: {
        'dist/columns.min': require.resolve('./src/columns.js'),
        'site/dist/bundle': require.resolve('./site/js/main.js'),
    },
    context: __dirname,
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name].js'
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
