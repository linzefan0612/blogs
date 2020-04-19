(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{255:function(t,e,s){"use strict";s.r(e);var o=s(28),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"关于页面滚动的那些事-主要是ios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于页面滚动的那些事-主要是ios"}},[t._v("#")]),t._v(" 关于页面滚动的那些事 (主要是ios)")]),t._v(" "),s("h2",{attrs:{id:"ios的布局-滚动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios的布局-滚动"}},[t._v("#")]),t._v(" IOS的布局-滚动")]),t._v(" "),s("h3",{attrs:{id:"ios归于页面滚动的影响在哪里"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios归于页面滚动的影响在哪里"}},[t._v("#")]),t._v(" IOS归于页面滚动的影响在哪里")]),t._v(" "),s("ol",[s("li",[t._v("页面本身的弹性效果 : 因为页面弹性的效果，所以H5在滚动的时候 有时候特别难受，你会感觉有几层在页面的感觉，稍不注意就触摸的是顶层，然后整个页面跟着滚动")]),t._v(" "),s("li",[t._v("页面不定位时，普通的滚动效果很卡，不丝滑，效果很木")])]),t._v(" "),s("h2",{attrs:{id:"谈谈几种布局感受"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#谈谈几种布局感受"}},[t._v("#")]),t._v(" 谈谈几种布局感受")]),t._v(" "),s("blockquote",[s("p",[t._v("第一种场景：就是页面自然撑开(表示页面没有 脱离文档流的定位)，然后滚动很木的情况")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("解决办法： 直接使用：-webkit-overflow-scrolling :touch\n")])])]),s("blockquote",[s("p",[t._v("第二种场景： 页面有固定的顶部导航栏，下面部分需要滚动（或者部分区域需要滚动）")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("解决办法：\n1.用滚动插件 ：better-scroll，基本可以解决滚动的问题，而且不用担心ios页面其他的坑\n缺点： 1.滚动不够丝滑，2.手指按上去停止的时候会有点位移(这点可以解决，但是比较麻烦)\n\n2.  1)页面设置为100%;\n\t2) header部分设置高度，main下面部分设置为 height:calc(100% - xxx);\n\t3）main部分加入overflow-y:scroll ; -webkit-overflow-scrolling :touch\n优点：滚动丝滑，并且触摸比较容易\n缺点：当手指从header部分为触发点时，会带动整个页面进行滚动，有弹性效果，（推荐的做法，因为header区域不大）\n\t\n3. \t1)页面最外层设置为 position:fixed;  或者顶部header设置position:fixed;\n\t2）内容部分设置高度，并设置overflow-y:scroll ; -webkit-overflow-scrolling :touch\n优点：页面本身弹性效果消失，滚动丝滑\n缺点：有时候会出现滚动的触发不灵敏，或偶尔页面卡死情况（不推荐）\n\n4. 页面使用position:absolute + -webkit-overflow-scrolling :touch的使用\n  缺点：因为脱离文档流的关系，偶尔也会出现类似触发不灵敏的问题。(部分手机，偶尔会出现)\n\n5. 页面使用position:fixed +    transform: translate3d(0, 0, 0) + 要滚动区域height:xxx +overflow-y:scroll ;-webkit-overflow-scrolling :touch;\n\t暂时无缺点：页面固定，滚动顺滑。（推荐的做法）\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);