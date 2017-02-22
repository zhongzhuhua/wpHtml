/**
 * 获取配置，其他所有的配置文件参照该文件来写
 * 备注，配置文件中，出现 {name} 的则代表用项目名称来代替
 * {zip} 代表 zipName
 */
let env = process.env.nodeEnv;

let config = {
    // 是否压缩脚本
    minJs: env == 'prd',
    // 是否压缩样式
    minCss: env == 'prd',
    // 是否压缩 html
    minHtml: env == 'prd',
    // 是否压缩图片
    minImg: env == 'prd',
    zip: null,
    publicPath: null,
    // 多项目打包配置
    packMany: {
        // 压缩后的 zip 包名称
        zip: '{name}',
        // 静态文件目录
        publicPath: '/dmz/{zip}/',
    },
    // 单项目打包配置
    packSimple: {
        zip: '{name}',
        publicPath: '/dmz/'
    }
};

/**
 * 获取配置文件
 * @param options 配置文件
   {
     zip: 打包后的 zip name
     publicPath: 静态文件目录
     simple: 是否单项目
   }
 */
module.exports = function (options) {
    options.
    return config;
};

