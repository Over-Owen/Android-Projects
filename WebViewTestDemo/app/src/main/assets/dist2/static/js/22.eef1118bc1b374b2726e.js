webpackJsonp([22],{"DxH+":function(t,e){},zZai:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("CS20"),n=i("Cuuf"),a={name:"resultFeedbackComponent",data:function(){return{loading:!0,windowHeight:window.innerHeight,isShow:!1,pattern:0,clickAnswer:"",resultData:[],tableData:[],isFastFeedback:!0,clickParams:[],questionList:[],currentIndex:0,count:0,isResult:!1,questionId:"",currentQuestion:[],isTableShow:!1,isShowMinimize:!0}},mounted:function(){var t=this;this.loading=!0,this.isShow=!0,this.resultData=[],this.tableData=[],s.a.getQuickFeedbackQuestionList().then(function(e){console.log("11111",e),t.loading=!1,t.questionList=e,t.count=t.questionList.questionList.length,t.currentIndex=t.questionList.questionList.findIndex(function(e){return e.id==t.questionList.questionId}),t.currentQuestion=t.questionList.questionList[t.currentIndex],t.questionId=t.questionList.questionId,t.getQuestionData(t.questionId)}).catch(function(e){console.log(e),t.isShowMinimize=!1,t.getWebAllQuestionList(t.questionId)})},methods:{getWebAllQuestionList:function(){var t=this,e=this.$route.query.questionId,i={practiceId:this.$route.query.paperId};n.a.getQuickFeedbackQuestionList(i).then(function(i){i&&(t.loading=!1,t.questionList.questionList=JSON.parse(i),t.count=t.questionList.questionList.length,t.currentIndex=t.questionList.questionList.findIndex(function(t){return t.id==e}),t.currentIndex=-1==t.currentIndex?0:t.currentIndex,t.currentQuestion=t.questionList.questionList[t.currentIndex],t.questionId=t.currentQuestion.id,t.getQuestionData(t.questionId))})},getWebTableList:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.isTableShow=!1;var s={practiceId:this.$route.query.paperId,questionId:t,item:i};n.a.getQuickFeedbackTable(s).then(function(t){t&&(e.isTableShow=!0,e.tableData=t)})},getWebQuestionItem:function(t){var e=this;this.loading=!0;var i={exerciseRecordId:this.$route.query.paperId,questionId:t,practiceType:2};n.a.getChartList(i).then(function(s){if(s){e.loading=!1;var n=[];if(t)n=s["quick_feedback_pie_chart_"+i.questionId];else for(var a in s)"quick_feedback_title"!=a&&(n=s[a]);e.resultData=n?JSON.parse(n):[],console.log(e.resultData),e.resultData&&e.resultData.echart?(e.isShow=!0,e.isResult=!0,e.resultData.record=e.resultData.record[0]):(e.isShow=!1,e.isResult=!1)}})},getChangeData:function(t){console.log("changeData",t),this.clickParams=t,this.clickAnswer=t.clickAnswer;""==this.clickParams.score&&""==this.clickParams.isRight&&this.clickParams.clickAnswer;this.clickParams.score&&this.clickParams.score;""==this.clickParams.score&&this.clickParams.isRight&&this.clickParams.isRight,this.currentQuestion=this.questionList.questionList[this.currentIndex],this.getQuestionData(this.currentQuestion.id,this.clickAnswer,!1)},getQuestionData:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";(!(arguments.length>2&&void 0!==arguments[2])||arguments[2])&&s.a.getPieChart(t).then(function(t){e.resultData=t,e.isShow=!0,e.resultData&&e.resultData.echart&&(e.isResult=!0),e.resultData.record=t.record[0]}).catch(function(i){e.getWebQuestionItem(t)}),this.isTableShow=!1,s.a.getTableChart(t,i).then(function(t){e.isTableShow=!0,e.tableData=t}).catch(function(i){e.getWebTableList(t,e.clickAnswer)})},prevQuestion:function(){0!=this.currentIndex&&(this.resultData=[],this.tableData=[],this.isShow=!1,this.clickAnswer="",this.currentIndex-=1,this.currentQuestion=this.questionList.questionList[this.currentIndex],this.questionId=this.currentQuestion.id,this.getQuestionData(this.currentQuestion.id))},nextQuestion:function(){this.currentIndex+1!=this.count&&(this.resultData=[],this.tableData=[],this.isShow=!1,this.resultData=[],this.clickAnswer="",this.currentIndex+=1,this.currentQuestion=this.questionList.questionList[this.currentIndex],this.questionId=this.currentQuestion.id,this.getQuestionData(this.currentQuestion.id))},minimize:function(){lw.Minimized()},close:function(){var t=window.localStorage.getItem("lineType");try{t?(cqf.cqfReturnhistogramChart(),window.localStorage.removeItem("lineType")):lw.closeWindow()}catch(e){t?this.$router.push({name:"resultFeedback",query:{paperId:this.$route.query.paperId,practiceType:2}}):window.close()}}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lw-count-result"},[i("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[0==t.resultData.length&&0==t.tableData?i("div"):i("div",{staticClass:"header"},[t.resultData&&2==t.resultData.feedbackType?i("span",[t._v("书写训练自判统计结果")]):i("span",[i("font",{staticStyle:{color:"#226cfb"}},[t._v(t._s(t.currentQuestion.question_name?t.currentQuestion.question_name:t.currentIndex+1))]),t._v("\n        答题统计结果\n      ")],1)]),t._v(" "),i("el-main",[0!=t.resultData.length||0!=t.tableData||t.loading?[i("div",{staticClass:"inner-box",attrs:{flex:"dir:left"}},[i("div",{staticClass:"pie-left",attrs:{id:"mychars1"}},[t.isResult?[t.isShow?i("lw-pie-chart",{attrs:{resultData:t.resultData,isFastFeedback:t.isFastFeedback},on:{changeData:t.getChangeData}}):t._e()]:t._e(),t._v(" "),t.isResult||t.loading?t._e():[i("div",{staticClass:"single-mask-wrap"},[i("div",{staticClass:"single-mask"}),t._v(" "),i("p",[t._v("没有生成数据")])])]],2),t._v(" "),i("div",{staticClass:"pie-right",attrs:{id:"table"}},[t.isTableShow?i("lw-result-table",{attrs:{tableData:t.tableData,chartData:t.resultData,pattern:t.pattern,clickAnswer:t.clickAnswer,isFastFeedback:t.isFastFeedback,questionId:t.questionId}}):t._e()],1)])]:[i("div",{staticClass:"single-mask-wrap"},[i("div",{staticClass:"single-mask"}),t._v(" "),i("p",[t._v("没有生成数据")])])],t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMinimize,expression:"isShowMinimize"}],staticClass:"window-minimize",on:{click:t.minimize}},[t._v("最小化")]),t._v(" "),i("div",{staticClass:"window-close",on:{click:t.close}},[t._v("关闭")])],2),t._v(" "),i("el-footer",{directives:[{name:"show",rawName:"v-show",value:2!=t.resultData.feedbackType,expression:"resultData.feedbackType != 2"}]},[i("div",{staticClass:"footer",attrs:{flex:"main:center cross:center"}},[i("div",{attrs:{flex:"main:center cross:center"},on:{click:t.prevQuestion}},[i("span",[t._v("上一题")]),t._v(" "),i("i",{staticClass:"iconfont icon-shangyiti"})]),t._v(" "),i("div",{staticClass:"footer-page"},[i("span",[t._v(t._s(t.currentIndex+1))]),t._v("\n          /"+t._s(t.count)+"\n        ")]),t._v(" "),i("div",{attrs:{flex:"main:center cross:center"},on:{click:t.nextQuestion}},[i("i",{staticClass:"iconfont icon-xiayiti"}),t._v(" "),i("span",[t._v("下一题")])])])])],1)],1)},staticRenderFns:[]};var o=i("VU/8")(a,r,!1,function(t){i("DxH+")},"data-v-01f72d0a",null);e.default=o.exports}});