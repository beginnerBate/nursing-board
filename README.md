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
## base-project
### 1. stylus基础搭建
1. reset.styl 样式重置 Reset CSS v2.0
1. variable.styl 变量管理
###  主题颜色搭建
1. 白天和黑夜主题切换
2. 分别建立颜色变量和主题
###  项目模块基本搭建
1. 首页：今日值班医生  今日值班护士 备忘录 n-home
2. 病区排班 n-order
3. 责任医护 n-care
4. 输液监测 n-trans
5. 体温监测 n-temp
6. 护士宣教 n-mission
7. 电子白板 n-board
8. 登录     n-login
###  项目路由搭建
home 路由 其他为子路由
###  字体图标
1. 字体图标引入 icomoon.css 
```javascript
  //  main.js 中引入
   import './common/css/icomoon.css'

```
###  技术相关
## git 相关
1.  git branch null-project 空项目 初始化项目
2.  git branch base-project 项目基础搭建

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
