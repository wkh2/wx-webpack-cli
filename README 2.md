# test小程序

> 部落夺宝小程序，参与抽奖，获取魂石，邀请好友等

## 概述


## 目标功能

- 

## 预览

用[微信 web 开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)打开`dist`目录（请注意，是 dist 目录，不是整个项目）

## 重要申明

- **微信小程序官方已经向没有资格的开发者开放了`微信Web开发者工具`的使用**
- 这里不需要再用[之前的办法](https://github.com/gavinkwoe/weapp-ide-crack)破解，破解了有问题！破解了有问题！破解了有问题！

### 解决办法

- 完全卸载之前的版本(删除掉用户目录下与`微信Web开发者工具`相关的目录)
- 安装`0.9.092300`或`0.10.102800`版本

### 下载链接

> `0.10.102800`版本

- [Windows 64 位](https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki&t=1475052055457)
- [Windows 32 位](https://servicewechat.com/wxa-dev-logic/download_redirect?type=ia32&from=mpwiki&t=1475052055457)
- [macOS](https://servicewechat.com/wxa-dev-logic/download_redirect?type=darwin&from=mpwiki&t=1475052055457)

## 项目特点

- 开发阶段与生产阶段分离。
- 自动化生成新页面所需文件并添加到配置中。
- 以`Eslint`校验全部的`js`和`json`文件。
- 支持引入 NPM 模块
- 强力压缩 JS, 极大节省包体积。
- 支持图片压缩, jpg/jpeg/mozjpeg/png/gif/webp/svg
- 支持使用css/sass/less代替wxss，xml代替wxml
- 开发阶段`json`配置文件可以有注释，方便备注。
- 代码中集成部分文档内容，减少查文档的时间。
- 开发阶段可以使用`less`完成样式编码，原因你懂得~ （如果你了解这些，当然可以支持`sass`等其他预处理样式）。
- 借助`babel`自动进行`ES2015`特性转换，放心使用新特性。
- 开发阶段用`xml`文件后缀取代`wxml`后缀，避免在开发工具中配置代码高亮。
- Source Map
- Travis CI

## 项目布局

```
|-- src                              // 开发模式的文件，包括app、页面、组件、图片等静态资源、辅助函数库、Redux数据管理器、第三方工具库。
|
|   |-- app.js                      //  程序入口

|   |-- app.json                      //  路由，全局配置
|
|   |-- images                      //  静态资源，图片
|
|   |-- pages                        // 页面组件
|      |-- index                     // 业务-首页 -- web-view 容器
|
|   |-- utils                      //  工具方法
|
|-- .editorconfig                    // 代码编写规格
|-- .gitignore                       // 忽略的文件
|-- README.md                        // 项目说明
```

## 操作步骤

### 将项目克隆到本地

用到了`GIT`环境，没有环境的话请自行解决吧。

```bash
# 定位到任意目录
$ cd path/to/root

# 克隆仓库到指定的文件夹
http://git.jd.com/xnfed/wx-treasure.git [project-name] --depth 1

# 进入指定的文件夹
$ cd [project-name]
```

### 安装项目`NPM`依赖

用到了`Node`环境，没有环境的话也请自行解决吧。

```bash
$ npm install 或者 yarn install
```

## 使用说明

### 开发阶段

执行如下命令

```bash
# 启动监视
$ npm run start
```

通过`微信Web开放者工具`打开项目根目录下`dist`文件夹，预览~

- 打开`微信Web开放者工具`，选择`添加项目`，填写或选择相应信息
  - AppID：输入开发者：AppID，如果没有点击右下角`无AppID`（个人开发者可以免费申请）
  - 项目名称：随便填写，因为不涉及到部署，所以无所谓
  - 项目目录：选择项目根目录下`dist`文件夹
  - 点击`添加项目`
- 可以通过任意开发工具完成`src`下的编码，`webpack`会监视项目根目录下`src`文件夹，当文件变化自动编译

#### 创建新页面

执行如下命令

```bash
# 启动生成器
$ npm run generate
? Input the page name (index) [page-name]
? Do you need a configuration file (y/N) N
? Select a style framework (Use arrow keys)
> less
# 自动生成...
```

由于微信小程序的每一个页面有特定的结构，新建工作比较繁琐。可以通过此任务减少操作。

### 生产阶段

执行如下命令

```bash
# 启动编译
$ npm run build
```

生产阶段的代码会经过压缩处理，最终输出到`dist`下。生产环境下不生产：sourcemap

同样可以通过`微信Web开放者工具`测试。

## 使用

- [x] 自动化生成新页面所需文件；
- [x] 自动生成新页面时，自动添加配置到`app.json`；
- [x] 加入`ES2015`的`Polyfill`，支持类似`Promise`的新`API`；
- [x] 自动刷新`微信Web开放者工具`中的预览；

## 文档

WeChat API 参考 [API](http://mp.weixin.qq.com/debug/wxadoc/dev/api/)

微信小程序 Redux 绑定 [wechat-weapp-redux](https://github.com/charleyw/wechat-weapp-redux)

在微信小程序中引入 RxJS [rxjs](https://github.com/ReactiveX/rxjs)

在微信小程序中引入 xstream [xstream](https://github.com/staltz/xstream)

```
#文章
http://blog.csdn.net/shooter32/article/details/52767890
http://www.tuicool.com/articles/mIzauiI
https://juejin.im/post/5870bd4b61ff4b005c3c4f6e
```

## 贡献

如果你有好的意见或建议，欢迎给我们提 issue 或 pull request。

### 打包

- 预发：npm run build:pre
- 生产：npm run build:prod

### HOSTS:

```
#image
192.168.150.54 img30.360buyimg.com  img11.360buyimg.com

192.168.144.119 plogin.m.jd.com
```

## TODO

- [] 组件：

```

```

- [] 样式通用：

```
.box-shadow
字体
字号
颜色
```

## Eslint 相关配置文章

[https://www.godblessyuan.com/2018/04/%E6%A2%B3%E7%90%86%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E4%BD%BF%E7%94%A8eslint%E5%92%8Cprettier%E6%9D%A5%E6%A3%80%E6%9F%A5%E5%92%8C%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BB%A3%E7%A0%81%E9%97%AE%E9%A2%98.html](https://www.godblessyuan.com/2018/04/%E6%A2%B3%E7%90%86%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E4%BD%BF%E7%94%A8eslint%E5%92%8Cprettier%E6%9D%A5%E6%A3%80%E6%9F%A5%E5%92%8C%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BB%A3%E7%A0%81%E9%97%AE%E9%A2%98.html)

[https://egoist.moe/2017/12/11/write-better-code-with-eslint-and-prettier/](https://egoist.moe/2017/12/11/write-better-code-with-eslint-and-prettier/)
