webpackJsonp([3],{lpZa:function(t,e){},zZai:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Cuuf"),n={name:"resultFeedbackComponent",data:function(){return{loading:!0,windowHeight:window.innerHeight,isShow:!1,pattern:0,clickAnswer:"",resultData:{},tableData:[],isFastFeedback:!0,clickParams:[],questionList:[],myAnswerList:[],currentIndex:0,currentQuestionAnswer:{},count:0,isResult:!1,questionId:"",currentQuestion:[],isTableShow:!1,localServerUrl:"",activityId:"",studentId:"",lineType:!1}},mounted:function(){this.localServerUrl=window.localStorage.getItem("localServerUrl"),this.activityId=window.localStorage.getItem("activityId"),this.studentId=window.localStorage.getItem("studentId"),this.lineType=window.localStorage.getItem("lineType"),this.loading=!0,this.isShow=!0,this.resultData={},this.tableData=[],this.getAllMyAnswerList(),this.getWebAllQuestionList(this.questionId)},methods:{getWebAllQuestionList:function(){var t=this;this.questionId=this.$route.query.questionId;var e={activityId:this.activityId};s.a.getQuickFeedbackQuestionList(this.localServerUrl,e).then(function(e){e&&(t.questionList=e,t.count=t.questionList.questionList.length,t.currentIndex=t.questionList.questionList.findIndex(function(e){return e.id==t.questionId}),t.currentQuestion=t.questionList.questionList[t.currentIndex],t.getQuestionData(t.questionId))})},getAllMyAnswerList:function(){var t=this,e={activityId:this.activityId,practiceType:2,studentId:this.studentId};s.a.getStudentQuestionResuleList(this.localServerUrl,e).then(function(e){e&&(t.myAnswerList=e)})},getWebTableList:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.isTableShow=!1;var n={activityId:this.activityId,questionId:t,item:i};s.a.getQuickFeedbackTable(this.localServerUrl,n).then(function(t){t&&(e.isTableShow=!0,e.tableData=t)})},getChartPieTable:function(t){var e=this,i={activityId:this.activityId,questionId:t,practiceType:2};s.a.getChartPieTable(this.localServerUrl,i).then(function(t){t&&(e.loading=!1,e.resultData=t,e.isShow=!0,e.resultData&&e.resultData.echart&&(e.isResult=!0),e.resultData.record=t.record[0])})},getChangeData:function(t){this.clickParams=t,this.clickAnswer=t.clickAnswer,this.currentQuestion=this.questionList.questionList[this.currentIndex],this.getQuestionData(this.currentQuestion.id,this.clickAnswer,!1)},getQuestionData:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(this.myAnswerList)for(var i=0;i<this.myAnswerList.length;i++)this.myAnswerList[i].question_id===t&&(this.currentQuestionAnswer=this.myAnswerList[i]);e&&this.getChartPieTable(t),this.isTableShow=!1,this.getWebTableList(t,this.clickAnswer)},prevQuestion:function(){0!==this.currentIndex&&(this.resultData={},this.tableData=[],this.isShow=!1,this.clickAnswer="",this.currentIndex-=1,this.currentQuestion=this.questionList.questionList[this.currentIndex],this.questionId=this.currentQuestion.id,this.getQuestionData(this.currentQuestion.id))},nextQuestion:function(){this.currentIndex+1!==this.count&&(this.resultData=[],this.tableData=[],this.isShow=!1,this.resultData=[],this.clickAnswer="",this.currentIndex+=1,this.currentQuestion=this.questionList.questionList[this.currentIndex],this.questionId=this.currentQuestion.id,this.getQuestionData(this.currentQuestion.id))},close:function(){this.$router.push({name:"resultFeedback",query:{activityId:this.activityId,practiceType:2,studentId:this.studentId,localServerUrl:this.localServerUrl}})}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lw-count-result"},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"lw-container"},[0==t.resultData.length&&0==t.tableData?i("div"):i("div",{staticClass:"header"},[t.resultData&&2==t.resultData.feedbackType?i("span",[t._v("书写训练自判统计结果")]):i("span",[i("font",{staticStyle:{color:"#226cfb"}},[t._v(t._s(t.currentQuestion.question_name?t.currentQuestion.question_name:t.currentIndex+1))]),t._v("\n        答题统计结果\n      ")],1)]),t._v(" "),i("div",{staticClass:"lw-main"},[0!=t.resultData.length||0!=t.tableData||t.loading?[i("div",{staticClass:"lw-inner-box",attrs:{flex:"dir:left"}},[i("div",{staticClass:"lw-pie-left",attrs:{id:"mychars1"}},[t.isResult?[t.isShow?i("lw-pie-chart",{attrs:{resultData:t.resultData,currentQuestionAnswer:t.currentQuestionAnswer,pattern:t.pattern,isFastFeedback:t.isFastFeedback},on:{changeData:t.getChangeData}}):t._e()]:t._e(),t._v(" "),t.isResult||t.loading?t._e():[t._m(1)]],2),t._v(" "),i("div",{staticClass:"lw-pie-right",attrs:{id:"table"}},[t.isTableShow?i("lw-result-table",{attrs:{tableData:t.tableData,currentQuestionAnswer:t.currentQuestionAnswer,chartData:t.resultData,pattern:t.pattern,clickAnswer:t.clickAnswer,isFastFeedback:t.isFastFeedback,questionId:t.questionId}}):t._e()],1)])]:[t._m(0)],t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.lineType,expression:"lineType"}],staticClass:"window-close",on:{click:t.close}},[t._v("关闭")])],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:2!=t.resultData.feedbackType,expression:"resultData.feedbackType != 2"}],staticClass:"lw-footer"},[i("div",{staticClass:"footer",attrs:{flex:"main:center cross:center"}},[i("div",{attrs:{flex:"main:center cross:center"},on:{click:t.prevQuestion}},[i("span",[t._v("上一题")]),t._v(" "),i("i",{staticClass:"iconfont icon-shangyiti"})]),t._v(" "),i("div",{staticClass:"footer-page"},[i("span",[t._v(t._s(t.currentIndex+1))]),t._v("\n          /"+t._s(t.count)+"\n        ")]),t._v(" "),i("div",{attrs:{flex:"main:center cross:center"},on:{click:t.nextQuestion}},[i("i",{staticClass:"iconfont icon-xiayiti"}),t._v(" "),i("span",[t._v("下一题")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"single-mask-wrap"},[e("div",{staticClass:"single-mask"}),this._v(" "),e("p",[this._v("没有生成数据")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"single-mask-wrap"},[e("div",{staticClass:"single-mask"}),this._v(" "),e("p",[this._v("没有生成数据")])])}]};var r=i("VU/8")(n,a,!1,function(t){i("lpZa")},"data-v-42b4f0ca",null);e.default=r.exports}});