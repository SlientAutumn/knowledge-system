
# 路由
路由分为前端路由和后端路由，当第一次输入url时，后台服务器都会给返回一个html文档，不同的是采用前端路由的形式的话html文档还有会许多子页面（组件），这时url中的路由变换时只需要切换对应的子页面(组件)或者按需从服务器加载新页面片段，这样的应用也就是单页面应用，而采用后端路由，路由变换时，会根据变换后的路由重新请求一个新的html文档，也就是多页面应用

正常来说当url改变时都会重新发送请求的，那么前端路由是如何做到不发送请求的呢；主要有以下两种实现方案：
1、hash
2、history Api

## 1、hash原理

hash实现就是基于location.hash来实现的。其实现原理也很简单，location.hash的值就是URL中#后面的内容。比如百度网站，设置它的location.hash='abc'，那么他的网址就是：https://www.baidu.com/#abc
我们可以使用hashchange事件来监听hash的变化。并且通过history.length能看到路由总数

## 2、history原理
history 这个对象在html的时候新加入两个api history.pushState() 和 history.repalceState()
这两个 API可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，

window.history.pushState(state,title,url)
//state：需要保存的数据，这个数据在触发popstate事件时，可以在event.state里获取
//title：标题，基本没用，一般传null
//url：设定新的历史纪录的url。新的url与当前url的origin必须是一样的，否则会抛出错误。url可以时绝对路径，也可以是相对路径。
//如 当前url是 https://www.baidu.com/a/,执行history.pushState(null, null, './qq/')，则变成 https://www.baidu.com/a/qq/，再执行history.pushState(null, null, '../abc/'),则变成https://www.baidu.com/a/abc/，
//执行history.pushState(null, null, '/qq/')，则变成 https://www.baidu.com/qq/

window.history.replaceState(state,title,url)
//与pushState 基本相同，但她是修改当前历史纪录，而 pushState 是创建新的历史纪录


作者：好学习吧丶
链接：https://juejin.im/post/5e85cb8151882573c66cf63f
来源：掘金




