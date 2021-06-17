webpackJsonp([10],{MPhP:function(e,t){},n2XA:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("CS20"),i=o("tPrV"),r={popChartLegendZhNames:["精通掌握","熟练掌握","基本理解","一知半解","完全不会"],popChartLegendEnNames:["perfect","great","good","bad","worse"],popChartLegendColor:["#13b5b1","#80c269","#f6eb53","#f8b551","#eb6877"]},n=o("Cuuf"),s={name:"popComponent",props:["bubbleDiagram","radio","reportType","popData"],data:function(){return{data:"",pChart:"",photoImg:!1,nameShow:!1,onlyShowMe:!1,innerWidth:window.innerWidth,currentStudentName:"钟知"}},mounted:function(){this.pChart=this.$echarts.init(document.getElementById("popChart")),this.getPopOrigins()},computed:{filterData:function(){var e=this;return this.onlyShowMe&&this.data?this.data.filter(function(t){return t.studentName===e.currentStudentName}):this.data}},watch:{radio:function(e,t){this.pChart.clear(),this.getPopOrigins()}},methods:{getPopOrigins:function(){var e=this;this.popData?(this.data=this.popData,this.drawPop(this.filterData)):a.a.getPopOrigins(this.reportType,this.radio).then(function(t){e.data=t,e.drawPop(e.filterData)}).catch(function(t){e.getWebBubbleDiagramChart()})},getWebBubbleDiagramChart:function(){var e=this,t={exerciseRecordId:this.$route.query.paperId||this.local$.getItem("paperId"),questionId:this.$route.query.questionId||this.local$.getItem("questionId"),status:this.reportType,type:this.radio};n.a.getBubbleDiagramChart(t).then(function(t){t&&(e.data=JSON.parse(t.data),e.drawPop(e.filterData))})},drawPop:function(e){var t=this.arrangeSeries(e),o="",a="";0==this.radio||1==this.radio?(o="总做答耗时",a="总认知掌握程度"):(o="做答耗时",a="认知掌握程度");var i=window.innerWidth,n={title:{top:0,left:0,text:"| 认知气泡",textStyle:{color:"#226cfb",fontWeight:"normal",fontSize:16}},color:r.popChartLegendColor,legend:{top:"35",icon:"roundRect",itemWidth:23,itemHeight:23,itemGap:30,data:r.popChartLegendZhNames,textStyle:{color:"#333333",fontSize:14}},grid:{x:128,y:73,x2:130,y2:73,width:i-300},tooltip:{trigger:"item",formatter:function(e){var t=e.value[3]>0?e.value[3].toFixed(2):0;return e.seriesName+"<br>学生："+e.value[2]+"<br>学生掌握程度:"+t}},dataRange:{left:"40",min:0,max:1,splitNumber:3,y:"center",text:["很会","不会"],color:r.popChartLegendColor,calculable:!0,textStyle:{color:"#333333",fontSize:14}},xAxis:[{type:"value",scale:!0,inverse:!0,name:o,nameTextStyle:{color:"#333333",fontSize:14},axisLine:{lineStyle:{color:"#999999",fontSize:14}},splitLine:{lineStyle:{color:"#999999",opacity:"0.3"}},axisLabel:{formatter:function(e,t){var o=parseInt(e),a=0,i=0;o>60&&(a=parseInt(o/60),o=parseInt(o%60),a>60&&(i=parseInt(a/60),a=parseInt(a%60)));var r=parseInt(o)+"″";return a>0&&(r=parseInt(a)+"′"+r),i>0&&(r=parseInt(i)+":"+r),r},textStyle:{color:"#999999",fontSize:14}},axisTick:{show:!1}}],yAxis:[{type:"value",position:"right",scale:!0,max:1,min:0,splitNumber:10,name:a,nameTextStyle:{color:"#333333",fontSize:14},axisLine:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#13b5b1"},{offset:.3,color:"#80c269"},{offset:.5,color:"#f6eb53"},{offset:.7,color:"#f8b551"},{offset:1,color:"#eb6877"}],global:!1},width:9}},splitLine:{lineStyle:{color:"#999999",opacity:"0.3"}},axisLabel:{formatter:function(e,t){return 0==e?e:.2==e?e:.5==e?e:.6==e?e:.8==e?e:1==e?e:""},textStyle:{color:"#999999",fontSize:14}},axisTick:{show:!1}}],animation:!1,series:t};this.pChart.setOption(n)},arrangeSeries:function(e){var t=[];e.forEach(function(e){return t.push(e.useTime)}),t.sort(function(e,t){return e-t});var o=this;return r.popChartLegendZhNames.map(function(a,n){return{name:a,type:"scatter",splitLine:{show:!1},data:(s=[],e.filter(function(e){return e.masteryLevelName===r.popChartLegendEnNames[n]}).forEach(function(e){var a;a={name:e.studentName===o.currentStudentName?"我":e.studentName,value:[e.useTime,e.masteryLevel,e.studentName,e.masteryLevel],label:{show:e.studentName===o.currentStudentName||o.nameShow,color:"#000",fontSize:e.studentName===o.currentStudentName?"18":"14",position:"bottom",formatter:function(e){return e.name}},symbol:o.photoImg&&e.imgUrl?i.a.imgUrlPrefix+e.imgUrl:"circle",symbolSize:e.studentName===o.currentStudentName?80:68,symbolOffset:function(e){return e.useTime>t[t.length-1]-.5&&e.useTime<=t[t.length-1]&&e.masteryLevel>.9&&e.masteryLevel<=1?0==e.useTime&&e.masteryLevel>.9&&e.masteryLevel<=1?["-60%","30%"]:["60%","30%"]:e.useTime>t[t.length-1]-.5&&e.useTime<=t[t.length-1]&&e.masteryLevel<=.1?0==e.useTime&&e.masteryLevel<=.1?["-60%","-10%"]:["60%","-80%"]:e.useTime>=t[0]&&e.useTime<t[0]+.5&&e.masteryLevel>.9&&e.masteryLevel<=1?["-60%","60%"]:e.useTime>=t[0]&&e.useTime<t[0]+.5&&e.masteryLevel<=.1?["-60%","-80%"]:e.masteryLevel>.9&&e.masteryLevel<=1?[0,"60%"]:e.masteryLevel<=.1?[0,"-80%"]:e.useTime>t[0]-.5&&e.useTime<=t[0]?["-60%",0]:e.useTime>t[t.length-1]-.5&&e.useTime<=t[t.length-1]?["60%",0]:[0,0]}(e),itemStyle:{itemWidth:68,itemHeight:68,borderRadius:"50%"}},s.push(a)}),s)};var s})},showPhoto:function(){this.pChart.clear(),this.drawPop(this.filterData)},showName:function(){this.pChart.clear(),this.drawPop(this.filterData)},showMe:function(){this.pChart.clear(),this.drawPop(this.filterData)}}},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{width:"100%",height:"100%",position:"relative"}},[o("div",{staticClass:"photoImg",class:{"photoImg-1024":e.innerWidth<=1024}},[o("el-checkbox",{on:{change:e.showPhoto},model:{value:e.photoImg,callback:function(t){e.photoImg=t},expression:"photoImg"}},[e._v("显示头像")]),e._v(" "),o("el-checkbox",{on:{change:e.showName},model:{value:e.nameShow,callback:function(t){e.nameShow=t},expression:"nameShow"}},[e._v("显示姓名")]),e._v(" "),o("el-checkbox",{on:{change:e.showMe},model:{value:e.onlyShowMe,callback:function(t){e.onlyShowMe=t},expression:"onlyShowMe"}},[e._v("只显示我的")])],1),e._v(" "),o("div",{attrs:{id:"popChart"}}),e._v(" "),o("p",{staticClass:"commondRange",staticStyle:{top:"20%",color:"#13b5b1"}},[e._v("精通掌握")]),e._v(" "),o("p",{staticClass:"commondRange",staticStyle:{top:"33%",color:"#80c269"}},[e._v("熟练掌握")]),e._v(" "),o("p",{staticClass:"commondRange",staticStyle:{top:"44%",color:"#f6eb53"}},[e._v("基本理解")]),e._v(" "),o("p",{staticClass:"commondRange",staticStyle:{top:"58%",color:"#f8b551"}},[e._v("一知半解")]),e._v(" "),o("p",{staticClass:"commondRange",staticStyle:{top:"76%",color:"#eb6877"}},[e._v("完全不会")]),e._v(" "),o("p",{staticClass:"pop-bottom-title"},[e.radio||0==e.radio?e._e():o("span",[e._v("这道题全班的认知程度掌握详情呈现和分布规律")]),e._v(" "),0==e.radio||1==e.radio?o("span",[e._v("这套题全班的总认知掌握度和总做答耗时详情呈现和分布规律")]):e._e()])])},staticRenderFns:[]};var c=o("VU/8")(s,l,!1,function(e){o("MPhP")},null,null);t.default=c.exports}});