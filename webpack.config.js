const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: require.resolve('./site/js/main.js'),
    context: __dirname,
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'site/dist'),
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
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/columns.js',
            to: '../js/columns.js'
        }])
    ]
};
