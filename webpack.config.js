let webpack = require('webpack');
let exclude = /(node_modules|bower_components|.DS_Store)/;

// 添加 entryMaps
let entryMaps = {
    'demo/js/index': './app/demo/js/index.js'
};

if (process)


module.exports = {
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    entry: {
        'demo/js/index': ['webpack-hot-middleware/client?reload=true', './app/demo/js/index.js']
    },
    //入口文件输出配置
    output: {
        path: '/dist',
        filename: '[name].js',
        publicPath: '/'
    }
};
