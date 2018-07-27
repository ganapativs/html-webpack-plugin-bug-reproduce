const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = () => ['index1', 'index2'].map(i => ({
    mode: 'development',
    entry: `./src/${i}.js`,
    output: {
        path: path.resolve('dist'),
        filename: `${i}.js`
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: `landing-${i}.html`,
            template: `template.ejs`,
            inject: true,
            chunksSortMode: 'none',
        }),
    ]
}))
