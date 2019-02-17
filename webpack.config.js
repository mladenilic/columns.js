const path = require('path');

module.exports = [{
    entry: require.resolve('./src/columns.js'),
    context: __dirname,
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'dist/columns.min.js',
        library: 'Columns',
        libraryExport: 'default',
        libraryTarget: 'umd'
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
},
{
    entry: require.resolve('./site/js/main.js'),
    context: __dirname,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './site/dist'),
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
}];
