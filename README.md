# nursing-board-null

> 一步一步搭建护理白板
## nursing-board-null
1. 配置路径 nursing-board\build\webpack.base.conf.js
```javascript
  'base': resolve('src/base'),
  'components': resolve('src/components'),
  'common': resolve('src/common'),
  'api': resolve('src/api'),
  'store': resolve('src/store'),
```
2. 空项目目录新建
```javascript
  1. api  ---- js请求相关
  2. base ---- 项目基础组件
  3. components 项目业务逻辑组件
  4. store vuex目录
  5. common 项目静态文件 js css stylus image fonts
```
3. 安装一些必用的包
```
  1. npm i stylus stylus-loader --save-dev
  2. npm i babel-polyfill --save 在main.js 中引入
  3. 
```
## git 相关
1. git branch nursing-board-null 空项目 初始化项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3038
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
