# 搜索

-   两个页面的容器可以抽象称一个容器，封装了 isLoading ，内容，下滑触发更新

# 小说 home 页

某一本具体的小说，具有以下功能：

第一个模块：

-   小说封面
-   作者-
-   来源|类型|字数

第二个模块 三个按钮

-   开始阅读
-   加入书架
-   离线下载

第三个模块
小说描述

第四个模块：
小说章节列表

## vue 在自定义组件上添加 click 事件，需要添加.native 修饰符

## 小说内容页：取消左右滑动页面，改为下滑触发更新

在进入小说内容页的时候，将内容链接保存在 localStorage 中，

在请求的时候不经过 link，而是通过 localStorage 来获取数据

-   mounted()
-   下滑触发

## vuex 保存的数据

```js
//正在浏览的小说
const currentView = {
    title: String,
    author: String,
    desc: String,
    img: String,
    update: String, //更新时间
    chapterList: Array, //优先展示缓存数据，提供更新按钮，以及每天自动更新一次
    curReadChapter: String, //content 页面进入后，触发更新新的章节列表后执行更新
    isCollected: Boolean //设置是否为收藏的小说
};

//
```
