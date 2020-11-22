(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{271:function(t,e,a){"use strict";a.r(e);var n=a(28),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"html-元信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-元信息"}},[t._v("#")]),t._v(" HTML 元信息")]),t._v(" "),a("blockquote",[a("p",[t._v("转自 https://www.liyao1994.top/")])]),t._v(" "),a("blockquote",[a("p",[t._v("HTML 自身的信息，而用来描述 HTML 自身信息的标签 则就是元信息类标签。\n元信息是关于信息的信息，用于描述信息的结构、语义、用途和用法等，其实也就是 meta 标签,位于文档的头部。\n标签的属性定义了与文档相关联的名称/值对。")])]),t._v(" "),a("h2",{attrs:{id:"meta-标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-标签"}},[t._v("#")]),t._v(" meta 标签")]),t._v(" "),a("h3",{attrs:{id:"name-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name-content"}},[t._v("#")]),t._v(" name/content")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("meta标签是一组键值对，他是一种通用的元信息表示标签，也就是name / content。\n基本用法：\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//百度网页 随便复制的一组\n<meta name="theme-color" content="#2932e1">\n//表示：页面风格颜色，实际并不影响页面，但是浏览器会根据此约定调整页面之外的颜色，比如窗口边框等等\n\n<meta name="参数"content="具体的参数值">。\n//name属性主要用于描述网页，与之对应的属性值为content，content中的内容主要是便于搜索引擎机器人查找信息和分类信息用的。\n')])])]),a("p",[t._v("上述代码顾名思义就是 页面所在的 theme-color 是#2932e1\n首先我们要明白，这里的 name 是一种自由的约定，并不是绝对的值，白话文的意思就是你可以随意的去定义。")]),t._v(" "),a("p",[t._v("既然是约定 那么自然就有了通俗的约定，也就是大家都会准守的，比如：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//keywords用来告诉搜索引擎你网页的关键字是什么。\n<meta name="keywords"content="meta总结,html meta,meta属性,meta跳转">\n\n//description用来告诉搜索引擎你的网站主要内容。\n<meta name="description"content="XX的博客">\n\n//robots(机器人向导)\n<meta name="robots"content="none">\n\n//author(作者)\n<meta name="author"content="root,root@xxxx.com">\n\n')])])]),a("p",[t._v("上面这些只是常用的其中一部分，也就是我们用来定义网页信息的基本情况的一些约定。")]),t._v(" "),a("h4",{attrs:{id:"这里有一个常用，并特殊的，就介绍一下。就是-name-为-viewport-的-mate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#这里有一个常用，并特殊的，就介绍一下。就是-name-为-viewport-的-mate"}},[t._v("#")]),t._v(" 这里有一个常用，并特殊的，就介绍一下。就是 name 为 viewport 的 mate")]),t._v(" "),a("p",[t._v("这个约定并没有定义在 HTML 标准中，但是却是移动端开发所准守的事实标准")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'>\n\nwidth 页面宽度\nheight 页面高度\ninitial-scalse 初始缩放比例\nminimum-scale 最小缩放比例\nmaximum-scale 最大缩放比例\nuser-scalable 是否允许用户缩放\n")])])]),a("p",[t._v("上面这一个 meta 应该是很常见的")]),t._v(" "),a("h3",{attrs:{id:"http-equiv-属性-ttp-equiv-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-equiv-属性-ttp-equiv-content"}},[t._v("#")]),t._v(" http-equiv 属性 ttp-equiv/content")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("具有http-equiv属性的meta标签，表示执行一个命令，它可以传递给浏览器一些命令信息，也就是对应的content。\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<meta http-equiv="参数"content="参数变量值">\n\n//：举个例子\n<meta http-equiv="content-type" content="text/html; charset=UTF-8">\n//它的参数是 content-type ，告诉了浏览器内容的解析‘content-type’ 需要‘text/html; charset=UTF-8’格式去解析\n')])])]),a("p",[t._v("它还有常用一些命令：\ndefault-style 指定默认样式表；")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<meta http-equiv="default-style" content="the document\'s preferred stylesheet">\n注释：上面 content 属性的值必须匹配同一文档中的一个 link 元素上的 title 属性的值，或者必须匹配同一文档中的一个 style 元素上的 title 属性的值。\n')])])]),a("p",[t._v("refresh 定义文档自动刷新的时间间隔。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<meta http-equiv="refresh" content="300">\n注释：值 "refresh" 应该慎重使用，因为它会使得页面不受用户控制\n')])])]),a("p",[t._v("keywords 关键字,给搜索引擎用的")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<meta http-equiv="keywords" content="keyword1,keyword2">\n')])])]),a("p",[t._v("Cache-Control 清除缓存（再访问这个网站要重新下载！）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<meta http-equiv="Cache-Control" content="no-cache"/>\n')])])]),a("p",[t._v("content-language 指定内容的语言;"),a("br"),t._v("\nset-cookie 模拟 http 头 set-cookie,设置 cookie；"),a("br"),t._v("\n等等")]),t._v(" "),a("p",[t._v("总结：HTML 就像一篇文章，而元信息标签则是对文章的表述标签，而阅读者则是浏览器，它跟根据你所约定的信息进行编译。")])])}),[],!1,null,null,null);e.default=s.exports}}]);