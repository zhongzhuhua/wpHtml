// 总入口文件
// 获取用户 npm 执行的配置
let userConfig = require('./server/configs').getConfigs();
// 创建服务器对象，是否开发环境，读取端口
let http = require('http');
let express = require('express');
let app = express();
let reload = require('reload');
let webpack = require('webpack');
let swig = require('swig');
let port = 4050;
let webpackConfig = require('./webpack.config');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');

// 设置视图文件夹，设置视图后缀名，设置 html 文件由 swig 模板引擎管理
app.set('view engine', 'app');
app.engine('html', swig.renderFile);
app.set('views', __dirname + '/app');

// 管理视图文件，设置之后， HTML有修改，刷新才能有效果
swig.setDefaults({
    cache: false
});

// 创建服务器
let server = http.createServer(app);

// 定义路由器
app.use('/favicon.ico', express.static(__dirname + '/favicon.ico'));
app.use('/demo/html/index.html', function(req, res) {
    res.render('demo/html/index.html');
});

// 装载 webpack 容器
let compiler = webpack(webpackConfig);
// 链接 webpack 服务器
app.use(webpackDevMiddleware(compiler, {
    hot: true,
    noInfo: true,
    inline: true,
    stats: {
        cached: false,
        colors: true
    }
}));
app.use(webpackHotMiddleware(compiler));

server.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.log('启动成功');
});
