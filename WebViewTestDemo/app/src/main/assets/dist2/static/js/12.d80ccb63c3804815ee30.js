webpackJsonp([12],{OC1K:function(t,e){},bvVH:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"lineChartComponent",props:["box","resultData"],data:function(){return{innerWidth:window.innerWidth,answerRightCount:0,answerErrorCount:0,questionOrder:""}},created:function(){this.questionOrder=this.local$.getItem("questionOrder"),this.box.height=window.innerHeight-290,this.box.width=window.innerWidth/2-50},mounted:function(){this.drawGauge(this.resultData.echart)},methods:{drawGauge:function(t){var e=this,i=this.$echarts.init(document.getElementById("mychars")),r=[],a=this.resultData.record.pattern,s=[],n=[{name:"得分组平均答题用时",type:"line",yAxisIndex:1,data:t.avgTimeList,lineStyle:{color:"#226cfb"},itemStyle:{color:"#226cfb"}}];1===a?(r=["答对学生人数","答错学生人数","得分组平均答题用时"],t.scoreList.forEach(function(i,r){var a=i?"对":"错",o=[];s.push(a),t.countList.length>=2?(o=i?[t.countList[0],0]:[0,t.countList[1]],e.answerRightCount=t.countList[0],e.answerErrorCount=t.countList[1]):(o=[t.countList[0]],e.answerRightCount=i?t.countList[0]:0,e.answerErrorCount=i?0:t.countList[0]),n.push({name:i?"答对学生人数":"答错学生人数",type:"bar",barGap:"-100%",lineStyle:{color:"#dddddd"},itemStyle:{color:i?"#80c269":"#eb6877"},data:o,barWidth:25})})):(r=["得分学生人数","得分组平均答题用时"],t.scoreList.forEach(function(t){s.push(t+"分")}),n.push({name:"得分学生人数",type:"bar",lineStyle:{color:"#dddddd"},data:t.countList,barWidth:25,itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#febb5c"},{offset:1,color:"#ff7e55"}])}}}));var o=this;i.setOption({tooltip:{trigger:"item",formatter:function(t){return"line"===t.componentSubType&&(t.value=o.utils$.fromatDate(t.value)),t.seriesName+" : "+t.value},axisPointer:{type:"cross",crossStyle:{color:"#666666"}}},legend:{data:r,textStyle:{color:"#666666",fontSize:14}},grid:{top:this.innerWidth<=1024?"20%":"10%",left:this.innerWidth<=1024?"10%":"5%",right:this.innerWidth<=1024?"10%":"5%",bottom:"6%"},xAxis:[{type:"category",data:s,axisLine:{lineStyle:{color:"#666666",opacity:.3,width:1,fontSize:14}},axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"学生人数",axisTick:{show:!1},axisLabel:{formatter:function(t){return o.utils$.fromatDate(t)}},nameTextStyle:{fontSize:14,color:"#666666"},axisLine:{lineStyle:{color:"#666666",opacity:"0.3",width:1}},splitLine:{lineStyle:{color:"#666666",opacity:"0.3"}}},{type:"value",name:"平均用时",axisTick:{show:!1},splitLine:{show:!1},axisLabel:{formatter:function(t){return o.utils$.fromatDate(t)}},nameTextStyle:{fontSize:14,color:"#666666"},axisLine:{lineStyle:{color:"#666666",opacity:.3,width:1}}}],series:n}),i.on("click",function(t){console.log(t);var e=t.name,i=t.name.substring(0,t.name.length-1);o.$emit("changeData",{clickAnswer:e,score:i,isRight:t.name})})}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"line-chart-page"},[0===t.resultData.record.pattern?i("div",{staticClass:"left-bottom",attrs:{flex:"main:justify"}},[i("span",[t._v("【"+t._s(t.questionOrder)+"】")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),i("span",[t._v("满分："+t._s(t.resultData.record.score)+"分，得分人数最多的分值："+t._s(t.resultData.record.max_item)+"分，人数 "+t._s(t.resultData.record.max_item_count)+" 人。")])]):t._e(),t._v(" "),1===t.resultData.record.pattern?i("div",{staticClass:"left-bottom",attrs:{flex:"main:justify"}},[i("span",[t._v("【"+t._s(t.questionOrder)+"】")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),i("span",[t._v("答对人数 "+t._s(t.answerRightCount)+" 人，答错人数 "+t._s(t.answerErrorCount)+" 人。")])]):t._e(),t._v(" "),i("div",{staticClass:"line-show nodrag-area",attrs:{id:"line-show"}},[i("div",{style:{width:t.box.width+"px",height:t.box.height+"px"},attrs:{id:"mychars"}})]),t._v(" "),i("div",{staticClass:"echars-foot",style:{marginTop:t.box.height<300?"50px":"20px"},attrs:{flex:"box:mean"}},[i("div",[i("div",{staticClass:"mar-bot-20px"},[t._v("正答率："+t._s(t._f("toPrecision")(t.resultData.record.right_proportion)))]),t._v(" "),i("div",[t._v("正答平均用时："+t._s(t._f("formatSeconds")(t.resultData.record.right_avg_time)))])]),t._v(" "),i("div",[i("div",{staticClass:"mar-bot-20px"},[t._v("班级难度系数："+t._s(t.resultData.record.degree_of_difficulty?t.resultData.record.degree_of_difficulty:"")+" "+t._s(t.resultData.degreeOfDifficulty))]),t._v(" "),i("div",[t._v("全班平均用时："+t._s(t._f("formatSeconds")(t.resultData.record.avg_time)))])]),t._v(" "),i("div",[i("div",[t._v("区分度："+t._s(t.resultData.record.discrimination?t.resultData.record.discrimination:"")+" "+t._s(t.resultData.discrimination))])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticStyle:{color:"#000"}},[this._v("\n      我的作答得分：\n      "),e("span",{staticStyle:{color:"#226cfb"}},[this._v("AB")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticStyle:{color:"#000"}},[this._v("\n      我的答题用时：\n      "),e("span",{staticStyle:{color:"#226cfb"}},[this._v("3‘36’")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticStyle:{color:"#000"}},[this._v("\n      我的答题结果：\n      "),e("span",{staticStyle:{color:"#226cfb"}},[this._v("答对")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticStyle:{color:"#000"}},[this._v("\n      我的答题用时：\n      "),e("span",{staticStyle:{color:"#226cfb"}},[this._v("3‘36’")])])}]};var s=i("VU/8")(r,a,!1,function(t){i("OC1K")},"data-v-ad5e4336",null);e.default=s.exports}});