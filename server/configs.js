let userOriginal = JSON.parse(process.env.npm_config_argv).original;
process.env.userOriginal = userOriginal;
console.log(userOriginal);

// 默认配置文件名称
let requireConfig = 'default';
let env = 'dev';
let port = null;
let zip = null;

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
    }

    let idx = -1;
    // 如果是有 - 的，则是特殊指令

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
        if (zip != null && zip != '') {
            zip = zip;
        }
        continue;
    }

    // 自定义配置文件
    idx = name.indexOf('-c');
    if (idx == 0) {
        let conf = name.substr(3);
        if (conf != null && conf != '') {
            requireConfig = conf;
        }
    }
}

let configs = require('./build/' + requireConfig);
configs.port = port === null ? configs.port : port;
configs.zip = zip === null ? configs.zip : zip;
console.log(configs);

/**
 * 获取指令配置
 */
function getConfigs() {
    return configs;
};
exports.getConfigs = getConfigs;
