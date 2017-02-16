let webpack = require('webpack');

module.exports = {
    entry: {
        'demo/js/index': ['./app/demo/js/index.js', 'webpack-hot-middleware/client?reload=true']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    //入口文件输出配置
    output: {
        path: '/dist',
        filename: '[name].js',
        publicPath: '/'
    }
};
