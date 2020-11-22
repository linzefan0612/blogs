(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{270:function(a,t,s){"use strict";s.r(t);var e=s(28),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"jquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jquery"}},[a._v("#")]),a._v(" jQuery")]),a._v(" "),s("blockquote",[s("p",[a._v("jQuery 是一套 JS 库，JS 库其实就是一堆封装好的 JS 代码")])]),a._v(" "),s("h2",{attrs:{id:"入口函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#入口函数"}},[a._v("#")]),a._v(" 入口函数")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("写法：\n$(document).ready( function(){} )\n简写:\n$(function(){  });\n")])])]),s("h2",{attrs:{id:"dom-对象和-jquery-对象的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-对象和-jquery-对象的区别"}},[a._v("#")]),a._v(" DOM 对象和 jQuery 对象的区别")]),a._v(" "),s("h4",{attrs:{id:"dom-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-对象"}},[a._v("#")]),a._v(" DOM 对象")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("1. 用原生 JS 找到的元素，这就叫 DOM 对象\n2. DOM 对象只能用原生的 JS 方法\n")])])]),s("h4",{attrs:{id:"jquery-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jquery-对象"}},[a._v("#")]),a._v(" jQuery 对象")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("1. 只有 jQuery 对象才有 jQuery 里的方法\n2. $(DOM 对象) 能把 DOM 对象转成 jQuery 对象\n")])])]),s("h2",{attrs:{id:"常用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用方法"}},[a._v("#")]),a._v(" 常用方法")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("end()   // 回调最初调用的元素\nindex()   // 获取下标\neq()   // 截取当前下标\nnext()和nextAll()   // 找到下一个兄弟元素和后面全部兄弟元素\nprev()和prveAll()   // 找到上一个兄弟元素和前面全部兄弟元素\nsibilings()   // 除了本身，其他兄弟元素\ntrigger()   // 可以调用别的地方写好的事件\ntrim()   // 去掉字符串两端的多余的空格\nparent()   // 找到父级元素\nparents()   // 找到所有父级元素\nfind()   // 找到子元素，相当于找后代选择器 tr td\nchildren()   // 找到子元素，相当于子代选择器 tr>td\nprop()   // 获取和设置  checked,selected,disabled 这种布尔类型的属性\n")])])]),s("h2",{attrs:{id:"类操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类操作"}},[a._v("#")]),a._v(" 类操作")]),a._v(" "),s("ol",[s("li",[a._v("addClass() 添加一个类")]),a._v(" "),s("li",[a._v("removeClass() 删除一个类")]),a._v(" "),s("li",[a._v("hasClass() 判断是否有某个类，有返回 true，没有返回 false")]),a._v(" "),s("li",[a._v("toggleClass() 切换一个类，原来没有这个类就添加，有这个类就删除")])]),a._v(" "),s("h2",{attrs:{id:"样式操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式操作"}},[a._v("#")]),a._v(" 样式操作")]),a._v(" "),s("h3",{attrs:{id:"获取样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取样式"}},[a._v("#")]),a._v(" 获取样式")]),a._v(" "),s("p",[a._v("$(dom).css(样式名);")]),a._v(" "),s("h3",{attrs:{id:"设置样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置样式"}},[a._v("#")]),a._v(" 设置样式")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("设置单个\n$(dom).css(样式名,值);\n\n设置多个\n$(dom).css({\n    样式名 1:值 1,\n    样式名 2:值 2,\n    });\n")])])]),s("h3",{attrs:{id:"元素宽高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元素宽高"}},[a._v("#")]),a._v(" 元素宽高")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("width()和height()   // 就是获取纯粹的宽和高\ninnerWidth() 和 innerHeight()   // 获取带padding的宽和高\noutWidth() 和 outerHeight()   // 获取带padding和边框的宽和高\n")])])]),s("h3",{attrs:{id:"元素位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元素位置"}},[a._v("#")]),a._v(" 元素位置")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("offset()\n\t获得的是盒子与document之间的距离\n\t有left跟top，这2个值\n\t类似原生中的 getBoundingClientRect()\n\nposition()\n\t获取的是自身定位盒子的位置\n\t有left跟top，这2个值\n")])])]),s("h2",{attrs:{id:"创建元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建元素"}},[a._v("#")]),a._v(" 创建元素")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("1. html()\n$(dom).html()  // 类似于JS中的innerHTML，包含标签文本\n2. $(dom)\n创建一个标签，并包装成jQuery对象\n类似原生的var 标签=createElement('标签')   标签.innerHTML = '内容\n3. append()\n添加到元素最后，类似原生的 appendChild\n4. prepend()\n添加到元素最前\n5. before()\n添加到某个元素前面，类似原生的 insertBefore\n6. after()\n添加到某个元素后面\n7. appendTo()\n自己找到父元素，再添加到末尾\n8. prependTo()\n自己找到父元素，再添加到最前面\n")])])]),s("h2",{attrs:{id:"节点操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点操作"}},[a._v("#")]),a._v(" 节点操作")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("1. jQuery对象.remove();\n会删除自身\n2. jQuery对象.empty();\n清空子元素，删除事件\n3. jQuery对象.html('');\n清空子元素，不会删除事件\n")])])]),s("h2",{attrs:{id:"行内属性操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行内属性操作"}},[a._v("#")]),a._v(" 行内属性操作")]),a._v(" "),s("h3",{attrs:{id:"普通类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通类型"}},[a._v("#")]),a._v(" 普通类型")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("attr(属性名)   // 获取行内属性\nattr(属性名，属性值)   // 设置行内属性\n")])])]),s("h3",{attrs:{id:"布尔类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布尔类型"}},[a._v("#")]),a._v(" 布尔类型")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("prop()\n主要用于checked,selected,disabled等\n")])])]),s("h2",{attrs:{id:"动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画"}},[a._v("#")]),a._v(" 动画")]),a._v(" "),s("h3",{attrs:{id:"animate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animate"}},[a._v("#")]),a._v(" animate")]),a._v(" "),s("blockquote",[s("p",[a._v("animate({属性:属性值},速度,回调函数)")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("参数1：传入一个对象\n参数2：动画的持续时间\n参数3：动画完成的回调函数\n")])])]),s("h3",{attrs:{id:"滑动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#滑动"}},[a._v("#")]),a._v(" 滑动")]),a._v(" "),s("blockquote",[s("p",[a._v("滑动(持续时间，速度，回调函数)，不传为默认")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("slideDown  下滑\nslideUp 上滑\n")])])]),s("h2",{attrs:{id:"淡入淡出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#淡入淡出"}},[a._v("#")]),a._v(" 淡入淡出")]),a._v(" "),s("blockquote",[s("p",[a._v("淡入淡出(持续时间，速度，回调函数)，不传为默认")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("fadeIn 淡入\nfadeOut 淡出\nfadeToggle 淡出入\n")])])]),s("h2",{attrs:{id:"事件委托"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[a._v("#")]),a._v(" 事件委托")]),a._v(" "),s("blockquote",[s("p",[a._v("委托可以避免新增元素没有事件的 bug")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("写法：\njQuery元素.on(事件方法,操作元素,函数)\n例：\n$('#id').on('click','.div',function(){})\n")])])]),s("h2",{attrs:{id:"ajax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[a._v("#")]),a._v(" Ajax")]),a._v(" "),s("h3",{attrs:{id:"get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[a._v("#")]),a._v(" get")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$.get({\n\turl:接口地址,\n\tdata:请求参数,\n\tsuccess:回调，接口返回数据\n})\n")])])]),s("h3",{attrs:{id:"post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[a._v("#")]),a._v(" post")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$.post({\n\turl:接口地址,\n\tdata:请求参数,\n\tsuccess:回调，接口返回数据\n})\n")])])]),s("h3",{attrs:{id:"ajax-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax-2"}},[a._v("#")]),a._v(" ajax")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$.ajax({\n\ttype:get 或 post\n\turl:接口地址,\n\tdata:请求参数,\n\tsuccess:回调，接口返回数据\n})\n")])])]),s("h3",{attrs:{id:"常用参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用参数"}},[a._v("#")]),a._v(" 常用参数")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("url\t\t// 请求地址\ndata\t\t// 请求参数\nsuccess\t\t// 请求数据\ndataType\t\t// 手动转换为JS对象\ncontentType\t\t// 禁止JQ自动创建post表头\nprocessData\t\t// 禁止JQ自动把参数转换成字符串\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);