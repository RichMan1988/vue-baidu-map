webpackJsonp([26],{"+BCN":function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",[s("h1",[t._v("定位控件")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),s("h2",[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),s("h2",[t._v("示例")]),t._v(" "),s("h3",[t._v("在地图右下角加入定位控件")]),t._v(" "),s("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),s("h4",[t._v("预览")]),t._v(" "),s("doc-preview",[s("baidu-map",{staticClass:"map",slot:"map"},[s("bm-geolocation",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",showAddressBar:!0,autoLocation:!0}})],1)],1)],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("code",[t._v("BmGeolocation")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("属性名")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("anchor")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("ControlAnchor")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),s("td",[t._v("控件停靠位置")])]),t._v(" "),s("tr",[s("td",[t._v("offset")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Size")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),s("td",[t._v("控件偏移值")])]),t._v(" "),s("tr",[s("td",[t._v("showAddressBar")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),s("td",[t._v("是否显示定位信息面板。默认显示定位信息面板")])]),t._v(" "),s("tr",[s("td",[t._v("autoLocation")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),s("td",[t._v("添加控件时是否进行定位。根据 "),s("a",{attrs:{href:"https://www.w3.org/TR/geolocation-API/#privacy_for_uas"}},[t._v("W3C相关标准")]),t._v(" 描述，为保证用户隐私安全，geoLocation API 必须使用 SSL 连接，并获得用户的手动许可。请确保使用该属性时满足上述条件。")])]),t._v(" "),s("tr",[s("td",[t._v("locationIcon")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Icon")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")]),t._v(" "),s("td",[t._v("可自定义定位中心点的Icon样式")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("事件名")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("locationSuccess")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("{point, AddressComponent}")]),t._v(" "),s("td",[t._v("定位成功后触发此事件")])]),t._v(" "),s("tr",[s("td",[t._v("locationError")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("{StatusCode}")]),t._v(" "),s("td",[t._v("定位失败后触发此事件")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-geolocation")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("anchor")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"BMAP_ANCHOR_BOTTOM_RIGHT"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":showAddressBar")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":autoLocation")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v("/>")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])}]}},AMJK:function(t,a,s){t.exports=s("CvoL")},CvoL:function(t,a,s){var e=s("VU/8")(null,s("+BCN"),null,null);t.exports=e.exports}});