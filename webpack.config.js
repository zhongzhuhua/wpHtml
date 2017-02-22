let webpack = require('webpack');
let exclude = /(node_modules|bower_components|.DS_Store)/;

// 添加 entryMaps
let entryMaps = {
    'demo/js/index': ['./app/demo/js/index.js']
};

if (process.env.nodeEnv == 'dev') {
    for (let key in entryMaps) {
        entryMaps[key].unshift('webpack-hot-middleware/client?reload=true');
    }
}

module.exports = {
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    entry: entryMaps,
    //入口文件输出配置
    output: {
        path: '/dist',
        filename: '[name].js',
        publicPath: '/'
    }
};
