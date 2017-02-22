let userOriginal = JSON.parse(process.env.npm_config_argv).original;
process.env.userOriginal = userOriginal;
console.log(userOriginal);

// 默认配置文件名称
let requireConfig = 'default';
let env = 'dev';
let port = 4050;
let zip = null;
let simple = false;
let acts = [];

// 如果指令是 start dev 开头的，则是开发环境
// 如果指令是 stg 开头的，则是测试环境
// 如果指令是 build 开头的，则是生产环境
// 遍历指令
let len = userOriginal.length;
for (let i = 0; i < len; i++) {
    let name = userOriginal[i];
    if (i == 0) {
        env = name.indexOf('stg') == 0 ? 'stg' : name.indexOf('build') == 0 ? 'prd' : 'dev';
        process.env.nodeEnv = env;
        continue;
    }

    let idx = -1;
    // 如果是有 - 的，则是特殊指令

    // 静态文件路径
    idx = name.indexOf('-path');
    if (idx == 0) {
        publicPath = name.substr(6);
        continue;
    }

    // 自定义端口号
    idx = name.indexOf('-p');
    if (idx == 0) {
        port = name.substr(3);
        if (port != '' && /[1-9][0-9]*/.test(port)) {
            port = port;
        }
        continue;
    }

    // 自定义压缩后包的名称
    idx = name.indexOf('-z');
    if (idx == 0) {
        zip = name.substr(3);
        continue;
    }

    // 自定义配置文件
    idx = name.indexOf('-c');
    if (idx == 0) {
        let conf = name.substr(3);
        if (conf != null && conf != '') {
            requireConfig = conf;
        }
        continue;
    }

    if (name.indexOf('-s') == 0) {
        simple = true;
        continue;
    }

    // 添加要打包的项目
    if (name.length > 0 && name != '_inc') {
        acts.push(name);
    }
}

// 用户指定配置
let configs = require('./build/' + requireConfig);
// 打包所需配置
let buildConfigs = require('./build-configs');
// 获取所有要打包的项目名称
let userActs = buildConfigs.acts;
if (acts == null || acts.length == 0) {
    acts = userActs;
}

// 用户通过指令带进来的配置
configs.userConfigs = {
    port: port,
    zip: zip,
    publicPath: publicPath,
    simple: simple,
    acts: acts
};
console.log('配置文件');
console.log(configs);

/**
 * 获取指令配置
 */
function getConfigs() {
    return configs;
};
exports.getConfigs = getConfigs;
