# 路由
路由分为前端路由和后端路由，当第一次输入url时，后台服务器都会给返回一个html文档，不同的是采用前端路由的形式的话html文档还有会许多子页面（组件），这时url中的路由变换时只需要切换对应的子页面(组件)或者按需从服务器加载新页面片段（具体表现为控制dom的显示和隐藏，而dom中可能存在script标签，显示后开始加载，请求js文件开始渲染），这样的应用也就是单页面应用，而采用后端路由，路由变换时，会根据变换后的路由重新请求一个新的html文档，也就是多页面应用
前端路由的核心是：改变视图的同时不会向后端发出请求。
正常来说当url改变时都会重新发送请求的，那么前端路由是如何做到不发送请求的呢；主要有以下两种实现方案：

1、hash

2、history Api

hash 模式和 history 模式都属于浏览器自身的属性
## 1、hash
### 特点
hash 虽然出现在 URL 中，但不会被包括在 HTTP，因为我们hash每次页面切换其实切换的是#之后的内容，而#后内容的改变并不会触发地址的改变，所以不存在向后台发出请求，对后端完全没有影响，因此改变 hash 不会重新加载页面。
### 原理
hash实现就是基于location.hash来实现的。其实现原理也很简单，location.hash的值就是URL中#后面的内容。比如百度网站，设置它的location.hash='abc'，那么他的网址就是：https://www.baidu.com/#abc
我们可以使用hashchange事件来监听hash的变化。并且通过history.length能看到路由总数

## 2、history

### 特点
利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。（需要特定浏览器支持）
在当前已有的 back、forward、go的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的URL，但浏览器不会立即向后端发送请求，唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，
history：可以通过前进 后退控制页面的跳转，刷新是真是的改变url。
### 缺点
不能刷新，需要后端进行配置。由于history模式下是可以自由修改请求url，当刷新时如果对对应地址进行匹配就会返回404。
但是在hash模式下是可以刷新的，前端路由修改的是#中的信息，请求时地址是不会变的

### 原理
window.history.pushState(state,title,url)
//state：需要保存的数据，这个数据在触发popstate事件时，可以在event.state里获取
//title：标题，基本没用，一般传null
//url：设定新的历史纪录的url。新的url与当前url的origin必须是一样的，否则会抛出错误。url可以时绝对路径，也可以是相对路径。
//如 当前url是 https://www.baidu.com/a/,执行history.pushState(null, null, './qq/')，则变成 https://www.baidu.com/a/qq/，再执行history.pushState(null, null, '../abc/'),则变成https://www.baidu.com/a/abc/，
//执行history.pushState(null, null, '/qq/')，则变成 https://www.baidu.com/qq/

window.history.replaceState(state,title,url)
//与pushState 基本相同，但她是修改当前历史纪录，而 pushState 是创建新的历史纪录






