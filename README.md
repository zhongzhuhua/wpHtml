# H5standard 特性



````
    git pull upstream/master
````

## 基于 node webpack sass 搭建的框架

    * 参照 words 文件夹
    * env.md 搭建开发环境
    * code.js 代码规范


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
├── backup.js               -- 备份脚本
.gitignore                  -- git 配置
README.md                   -- 项目使用基础文档
package.json                -- 项目配置和依赖
server.js                   -- 项目启动文件
webpack.config.js       -- webpack 配置文件

```
