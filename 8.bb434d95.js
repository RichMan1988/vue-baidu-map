webpackJsonp([8],{"+Vkg":function(t,s,a){var n,e,l;!function(a,_){e=[t,s],n=_,void 0!==(l="function"==typeof n?n.apply(s,e):n)&&(t.exports=l)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{center:{lng:116.404,lat:39.915},zoom:15}},methods:{gotoBeijing:function(t){this.center={lng:116.404,lat:39.915}},gotoShanghai:function(t){this.center={lng:121.473354,lat:31.238413}}}},t.exports=s.default})},UPnB:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("菜单项")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("示例")]),t._v(" "),a("h3",[t._v("插入一个复杂的右键菜单")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(2),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:t.center,zoom:t.zoom},slot:"map"},[a("bm-context-menu",[a("bm-context-menu-item",{attrs:{callback:t.gotoBeijing,text:"去北京"}}),t._v(" "),a("bm-context-menu-item",{attrs:{callback:t.gotoShanghai,text:"去上海",iconUrl:"http://lbsyun.baidu.com/skins/MySkin/resources/img/red.png"}}),t._v(" "),a("bm-context-menu-item",{attrs:{seperator:""}}),t._v(" "),a("bm-context-menu-item",{attrs:{disabled:"",text:"去深圳"}})],1)],1)],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmContextMenuItem")]),t._v(" 菜单项是右键菜单的子组件，请勿在其他组件中使用。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("callback")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("new Function")]),t._v(" "),a("td",[t._v("点击菜单时执行的回调函数，第一个参数为 {BMap, map, target, pixel, point}")])]),t._v(" "),a("tr",[a("td",[t._v("text")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),a("td",[t._v("指定此菜单项的文本")])]),t._v(" "),a("tr",[a("td",[t._v("iconUrl")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),a("td",[t._v("指定此菜单项的icon URL（大小为17px*17px）")])]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",[t._v("是否禁用菜单项")])]),t._v(" "),a("tr",[a("td",[t._v("seperator")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",[t._v("是否是分隔线（此属性为真时，其它属性会被忽略）")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"center"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"zoom"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":callback")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"gotoBeijing"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"去北京"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":callback")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"gotoShanghai"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"去上海"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("iconUrl")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"http://lbsyun.baidu.com/skins/MySkin/resources/img/red.png"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("seperator")]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"去深圳"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu-item")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-context-menu")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("center")]),t._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.404")]),t._v(",\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.915")]),t._v("\n      },\n      "),a("span",{staticClass:"hljs-attr"},[t._v("zoom")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("15")]),t._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    gotoBeijing (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".center = {\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.404")]),t._v(",\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.915")]),t._v("\n      }\n    },\n    gotoShanghai (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".center = {\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("121.473354")]),t._v(",\n        "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("31.238413")]),t._v("\n      }\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},UUw7:function(t,s,a){t.exports=a("W6nW")},W6nW:function(t,s,a){var n=a("VU/8")(a("+Vkg"),a("UPnB"),null,null);t.exports=n.exports}});