webpackJsonp([21],{"0Thl":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("fZjL"),s=i.n(a),n=i("mvHQ"),l=i.n(n),r=i("CS20"),o=i("Cuuf"),u={name:"report",data:function(){return{studentsInfo:"",dialogTable:!1,loading:!1,initItem:{noResult:!1,titleData:{},gaugeData:{},funnelData:{},popData:{}},radio:1,funnelTableTitle:"",innerWidth:window.innerWidth,initAll:"",questionOrder:"",isShowMinimize:!1,webQuestionId:"",webParperId:""}},created:function(){},mounted:function(){var e=this;this.loading=!0,r.a.getSingleDefaultPage().then(function(t){e.isShowMinimize=!0,console.log(t),e.initItem={noResult:!0,titleData:{},gaugeData:[],funnelData:[],popData:[]},e.loading=!1,e.initItem.noResult=t,e.questionOrder=JSON.parse(lwmain.GetQuestionOrder()),e.local$.setItem("questionOrder","第"+e.questionOrder+"题"),e.getReportTitle()}).catch(function(t){e.isShowMinimize=!1,e.getIsSingleNull()}),this.$router.push({name:"smallAllReport",query:{paperId:"f5e433a3cb544131aedcd09110f2d3f9",practiceType:1,isInit:1}})},methods:{getIsSingleNull:function(){var e=this;if(this.loading=!0,this.webParperId=this.$route.query.paperId||this.local$.getItem("paperId"),this.webQuestionId=this.$route.query.questionId||this.local$.getItem("questionId"),this.local$.setItem("paperId",this.webParperId),this.local$.setItem("questionId",this.webQuestionId),this.$route.query.isInit){this.questionOrder=this.$route.query.questionOrder,this.questionOrder=this.questionOrder?"第"+this.questionOrder+"题":this.local$.getItem("orderName"),this.local$.setItem("questionOrder",this.questionOrder);var t={exerciseRecordId:this.webParperId,questionId:this.webQuestionId};o.a.isSingelNull(t).then(function(t){e.loading=!1,t&&(e.initItem.noResult=!0,e.getWebTitle()),e.local$.setItem("noResult",e.initItem.noResult)})}else this.loading=!1,this.initItem.noResult=this.local$.getItem("noResult"),this.questionOrder=this.local$.getItem("questionOrder"),this.initItem.titleData=JSON.parse(this.local$.getItem("singleTitleData"))},getWebTitle:function(){var e=this,t={exerciseRecordId:this.webParperId};o.a.getTitle(t).then(function(t){if(t){var i=JSON.parse(t.data);e.initItem.titleData={subjectName:i.subject_name,examName:i.paper_name,gradeClassName:""+i.grade_name+i.class_name,teacherName:i.teacher_name+"老师发起",infoData:[i.start_time.split(" ")[0].replace(/-/g,"/"),"周"+i.week_name,i.start_time.split(" ")[1].slice(0,5),"~",i.end_time?i.end_time.split(" ")[1].slice(0,5)+" ":""].join(" ")},e.local$.setItem("singleTitleData",l()(e.initItem.titleData))}})},getReportTitle:function(){var e=this;r.a.getReportTitle().then(function(t){console.log("title",t),t&&(e.initItem.titleData={id:t.id,subjectName:t.subject_name,examName:t.paper_name,gradeClassName:""+t.grade_name+t.class_name,teacherName:t.teacher_name+"老师发起",infoData:[t.start_time.split(" ")[0].replace(/-/g,"/"),"周"+t.week_name,t.start_time.split(" ")[1].slice(0,5),"~",t.end_time?t.end_time.split(" ")[1].slice(0,5)+" ":" "].join(" ")})})},getWebChartList:function(){var e=this;this.loading=!0;var t=this.$route.query.isInit,i={exerciseRecordId:this.$route.query.paperId,questionId:this.$route.query.questionId,practiceType:this.$route.query.practiceType};1!==t?(this.loading=!1,this.initItem=JSON.parse(this.local$.getItem("initItem")),this.questionOrder=this.local$.getItem("questionOrder"),console.log(this.initItem)):(this.loading=!0,this.local$.removeItem("paperId"),this.local$.removeItem("questionId"),this.local$.removeItem("practiceType"),this.questionOrder=this.$route.query.questionOrder,this.questionOrder=this.questionOrder?"第"+this.questionOrder+"题":this.local$.getItem("orderName"),this.local$.setItem("questionOrder",this.questionOrder),o.a.getChartList(i).then(function(t){if(e.loading=!1,e.local$.setItem("paperId",i.exerciseRecordId),e.local$.setItem("questionId",i.questionId),e.local$.setItem("practiceType",i.practiceType),0!==s()(t).length){var a=JSON.parse(t.practice_title),n=t["single_is_null_"+i.questionId];e.initItem={noResult:!("True"!==n&&"true"!==n&&!0!==n),gaugeData:JSON.parse(t["single_dash_board_"+i.questionId]),funnelData:JSON.parse(t["single_funnel_figure_"+i.questionId]),popData:JSON.parse(t["single_bubble_diagram_"+i.questionId]),resultInfo:JSON.parse(t["question_student_question_"+i.questionId])},a&&(e.initItem.titleData={subjectName:a.subject_name,examName:a.paper_name,gradeClassName:""+a.grade_name+a.class_name,teacherName:a.teacher_name+"老师发起",infoData:[a.start_time.split(" ")[0].replace(/-/g,"/"),"周"+a.week_name,a.start_time.split(" ")[1].slice(0,5),"~",a.end_time?a.end_time.split(" ")[1].slice(0,5)+" ":""].join(" ")}),e.local$.setItem("initItem",l()(e.initItem))}}))},cancelStudentTableInfo:function(){this.studentsInfo=""},recieveFunnel:function(e){this.funnelTableTitle=e.name+" - 学生统计信息展示表",this.studentsInfo=e,this.dialogTable=!0},recieveStudentTable:function(e){e&&(this.studentsInfo="")},minimize:function(){lw.Minimized()},close:function(){try{this.local$.getItem("toSingle")?(this.local$.clear(),this.$router.push({name:"smallAllResult",query:{exerciseId:this.initItem.titleData.id}})):lw.Hide()}catch(e){this.local$.clear(),window.close()}}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"small-report-overview",on:{click:function(t){return e.cancelStudentTableInfo()}}},[i("el-container",[i("el-main",[e.initItem.noResult?[i("div",{staticClass:"report-wrap",attrs:{id:"content-box"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.initItem.titleData,expression:"initItem.titleData"}],staticClass:"title"},[e._v("\n            【"+e._s(e.questionOrder)+"】 "+e._s(e.initItem.titleData.subjectName?"【"+e.initItem.titleData.subjectName+"】":"")+"\n            "+e._s('"'+e.initItem.titleData.examName+'" '+e.initItem.titleData.gradeClassName)+"练习卷整体结果统览\n            "),i("label",[e._v(e._s(e.initItem.titleData.infoData)+"  "+e._s(e.initItem.titleData.teacherName))])]),e._v(" "),i("div",{staticClass:"report-header"},[i("div",{staticClass:"report-gauage"},[i("lw-gauge",{ref:"gauge",attrs:{titlePosition:"left",reportType:1,gaugeData:e.initItem.gaugeData}})],1),e._v(" "),i("div",{staticClass:"report-funnel"},[i("lw-funnel",{attrs:{reportType:1,status:0,funnelData:e.initItem.funnelData},on:{funnelRank:e.recieveFunnel}})],1)]),e._v(" "),i("div",{staticClass:"report-pop",class:{opacityBg:!e.studentsInfo,staticBg:e.studentsInfo}},[i("lw-pop",{ref:"pop",attrs:{reportType:1}}),e._v(" "),i("el-dialog",{attrs:{title:e.funnelTableTitle,visible:e.dialogTable,width:"80%"},on:{"update:visible":function(t){e.dialogTable=t}}},[i("lw-studentInfoTable",{attrs:{reportType:1},on:{cancelStudentInfo:e.recieveStudentTable}})],1)],1)])]:e._e(),e._v(" "),e.initItem.noResult||e.loading?e._e():[i("div",{staticClass:"single-mask-wrap"},[i("div",{staticClass:"single-mask"}),e._v(" "),i("p",[e._v("没有生成数据")])])],e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowMinimize,expression:"isShowMinimize"}],staticClass:"window-minimize",on:{click:e.minimize}},[e._v("最小化")]),e._v(" "),i("div",{staticClass:"window-close",on:{click:e.close}},[e._v("关闭")])],2),e._v(" "),i("el-footer",[i("div",{staticClass:"btn"},[i("span",{staticClass:"active",on:{click:function(t){return e.$router.push({name:"smallReport"})}}},[e._v("该题认知结果统计")]),e._v(" "),i("span",{on:{click:function(t){return e.$router.push({name:"smallResult"})}}},[e._v("该题答题结果统计")])])])],1)],1)},staticRenderFns:[]};var d=i("VU/8")(u,c,!1,function(e){i("VEBM")},null,null);t.default=d.exports},VEBM:function(e,t){}});