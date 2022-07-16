
<p align="center" style="font-size: 30px; font-weight: bold">
  在线代码生成器，为简化开发工作、提高生产效率而生
</p>

<p align="center">
  <a href="https://search.maven.org/search?q=g:io.github.zhonglunsheng">
    <img alt="code style" src="https://img.shields.io/badge/maven-release-orange">
  </a>
  <a href="https://gitee.com/lipop/online-code-gen">
    <img alt="code style" src="https://img.shields.io/badge/gitee-release-red">
  </a>
  <a href="https://github.com/zhonglunsheng/online-code-gen">
    <img alt="code style" src="https://img.shields.io/badge/github-release-blue">
  </a>
</p>

# 简介 | Intro

online-code-gen是一款在线代码生成器，引用依赖即可开箱使用，无需单独部署服务

使用前后端分离，前端采用Vue3 + View UI Plus 界面简洁美观

集成微软开源浏览器编辑器Monaco Editor，支持在线模板编辑和实时预览，支持Vscode快捷键使用

采用jfinal开源的Enjoy模板引擎，天然支持java语法规则，模板编写简单。避免Freemarker、Velocity复杂语法

不受语言限制，可生成前后端代码，项目脚手架可无缝集成，配置项目专属模板

支持多种方式生成模板，生成到本地路径、在线生成复制粘贴、打包下载

觉得好用，还望大家能够不吝点点三连:⭐Star,👀Watch,fork📌

# 优点 | Advantages

- **开箱即用:** 无需单独部署服务，集成依赖即可使用
- **界面美观:** 使用View UI Plus框架开发，界面简洁美观
- **强大模板引擎:** 使用Enjoy模板引擎，天然支持Java语法。内置集成Hutool 字符串、集合处理工具，可以直接在模板调用方法
- **内置模板:** 目前已内置一套Java后端CRUD模板，后续会增加更多  
- **一键生成:** 无需下载任意插件，只需配置数据库地址即可，便可一键生成
- **数据源切换:** 支持在线切换数据源，无需项目重启
- **功能强大:** 支持在线模板编辑和实时预览，支持字段和变量扩展，本地生成、打包下载
- **单独部署:** 如不想要集成项目，支持单独部署，团队共享使用模板
- **...**

# 效果预览 | Preview
![mark](http://upload.i20forever.cn/blog/20220716/45sf0gqcKmsX.png?imageslim)

![mark](http://upload.i20forever.cn/blog/20220716/n6nWG6A1HSJr.png?imageslim)

![mark](http://upload.i20forever.cn/blog/20220716/3vJXUIO7u9Ju.png?imageslim)

![mark](http://upload.i20forever.cn/blog/20220716/ahLJN26HlNT7.png?imageslim)

# 使用教程 | Tutorials
## 引用依赖
```xml
<dependency>
    <groupId>io.github.zhonglunsheng</groupId>
    <artifactId>online-code-gen</artifactId>
    <version>1.2.0</version>
</dependency>
```
## 配置数据库地址
在spring boot配置文件新增
```
code:
  gen:
    masterUrl: jdbc:mysql://localhost:3306/code-gen?serverTimezone=UTC # 代码生成器依赖的数据库地址，用来保存模板、变量等等
    masterUserName: root
    masterPassword: root
    slaveUrl: jdbc:mysql://localhost:3306/lipop?serverTimezone=UTC # 项目开发中需要生成的数据库地址信息
    slaveUserName: root
    slavePassword: root
```
## 初始化SQL
SQL文件在项目根目录sql目录下

## 添加启动注解@EnableCodeGen
![mark](http://upload.i20forever.cn/blog/20220716/M6q1dCO6ejYA.png?imageslim)

## 项目启动访问
启动后即可在浏览器访问使用

http://localhost:82/code.html

如配置了项目context-path，则需要在localstorage配置请求头
![mark](http://upload.i20forever.cn/blog/20220716/kQXTFhmgcRqc.png?imageslim)

# 期望 | Futures
- 个人也没有太多时间测试，只测了核心功能，项目开发中难免会出现小bug，欢迎提出修正
- 如果有更好的想法，欢迎提出更好的意见，帮助完善

# 版权 | License
[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)
# 感谢 | Thanks
- 感谢 [@Ruoyi](https://gitee.com/y_project/RuoYi) 开源项目，在开发的过程中，代码生成部分给了我很大的启发
- 感谢 [@Jfinal](https://gitee.com/jfinal/enjoy?_from=gitee_search) 开源的模板引擎Enjoy，真的非常好用，之前写模板最烦Freemarker、Velocity，找个字符串驼峰转换语法都找了老半天
- 感谢 [@Hutool](https://gitee.com/dromara/hutool?_from=gitee_search) 提供的工具库，真的好用，用了之后就再也不想回到之前手写工具的日子了
# 关注我 | About Me

[Github](https://github.com/zhonglunsheng)

[Gitee](https://gitee.com/lipop)
