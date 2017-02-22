# H5standard 特性



````
    git pull upstream/master
````

## 基于 node webpack sass 搭建的框架

    * 参照 words 文件夹
    * env.md 搭建开发环境
    * code.js 代码规范

## 执行指令

    * 目前只能支持 npm 指令
    * npm run [环境指令] [打包或者要启动的项目] [-path=静态文件路径] [-c=指定打包配置文件，默认 default] [-s] [-z=打包后的zip包文件名称] [-p=端口号默认4050]build
    * c = default 引用的是 server/build/default.js
    * -s 存在的时候，代表打单项目，也就是说，有多个项目的时候，是独立一个一个打包出来的，使用配置是使用 packSimple 的配置

## 目录结构

```
├── components              -- 组件，被其他脚本 require 引用，公用业务
    └── scss                -- ui 组件
    └── js                  -- js 组件
    └── utils               -- 公用工具类
|app                        -- 开发目录
    └── _inc                -- 公用模板页
├── demo                    -- 常用 demo [项目拉下的时候，不用可以删除]
    └── html/demos          -- js ui 组件 demo
    └── html/activi         -- 运营活动组件 demo
    └── html/docs           -- 使用说明文档模块
├── 其他文件夹                -- 项目文件夹，每个项目独立一个文件夹，注意项目名称不能是 html sass js ensure components zip
server                      -- node 脚本，服务器脚本和配置脚本
├── utils.js                -- 常用 node 工具类
├── configs.js              -- webpack 打包配置文件
├── build                   -- 所有特殊重定义的打包配置文件
.gitignore                  -- git 配置
README.md                   -- 项目使用基础文档
package.json                -- 项目配置和依赖
server.js                   -- 项目启动文件
webpack.config.js       -- webpack 配置文件

```
