webpackJsonp([2],{"4WTo":function(t,e,r){var n=r("NWt+");t.exports=function(t,e){var r=[];return n(t,!1,r.push,r,e),r}},"7Doy":function(t,e,r){var n=r("EqjI"),i=r("7UMu"),o=r("dSzd")("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),n(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},"9Bbf":function(t,e,r){"use strict";var n=r("kM2E");t.exports=function(t){n(n.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},"9C8M":function(t,e,r){"use strict";var n=r("evD5").f,i=r("Yobk"),o=r("xH/j"),a=r("+ZMJ"),s=r("2KxR"),u=r("NWt+"),c=r("vIB/"),l=r("EGZi"),f=r("bRrM"),h=r("+E39"),d=r("06OY").fastKey,m=r("LIJb"),p=h?"_s":"size",v=function(t,e){var r,n=d(e);if("F"!==n)return t._i[n];for(r=t._f;r;r=r.n)if(r.k==e)return r};t.exports={getConstructor:function(t,e,r,c){var l=t(function(t,n){s(t,l,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[p]=0,void 0!=n&&u(n,r,t[c],t)});return o(l.prototype,{clear:function(){for(var t=m(this,e),r=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete r[n.i];t._f=t._l=void 0,t[p]=0},delete:function(t){var r=m(this,e),n=v(r,t);if(n){var i=n.n,o=n.p;delete r._i[n.i],n.r=!0,o&&(o.n=i),i&&(i.p=o),r._f==n&&(r._f=i),r._l==n&&(r._l=o),r[p]--}return!!n},forEach:function(t){m(this,e);for(var r,n=a(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(n(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!v(m(this,e),t)}}),h&&n(l.prototype,"size",{get:function(){return m(this,e)[p]}}),l},def:function(t,e,r){var n,i,o=v(t,e);return o?o.v=r:(t._l=o={i:i=d(e,!0),k:e,v:r,p:n=t._l,n:void 0,r:!1},t._f||(t._f=o),n&&(n.n=o),t[p]++,"F"!==i&&(t._i[i]=o)),t},getEntry:v,setStrong:function(t,e,r){c(t,e,function(t,r){this._t=m(t,e),this._k=r,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?l(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,l(1))},r?"entries":"values",!r,!0),f(e)}}},ALrJ:function(t,e,r){var n=r("+ZMJ"),i=r("MU5D"),o=r("sB3e"),a=r("QRG4"),s=r("oeOm");t.exports=function(t,e){var r=1==t,u=2==t,c=3==t,l=4==t,f=6==t,h=5==t||f,d=e||s;return function(e,s,m){for(var p,v,g=o(e),w=i(g),S=n(s,m,3),y=a(w.length),D=0,_=r?d(e,y):u?d(e,0):void 0;y>D;D++)if((h||D in w)&&(v=S(p=w[D],D,g),t))if(r)_[D]=v;else if(v)switch(t){case 3:return!0;case 5:return p;case 6:return D;case 2:_.push(p)}else if(l)return!1;return f?-1:c||l?l:_}}},BDhv:function(t,e,r){var n=r("kM2E");n(n.P+n.R,"Set",{toJSON:r("m9gC")("Set")})},D1Cz:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("lHA8"),i=r.n(n),o=r("c/Tr"),a=r.n(o),s=r("woOf"),u=r.n(s),c=r("CS20"),l={name:"powerScatterComponent",props:["powerScatterData"],data:function(){return{data:{},resData:{},psChart:"",exams:[{value:0,label:"试题维度"},{value:1,label:"知识点维度"}],demotion:0,knowledgeDemotion:{type:"",description:""},onlyShowMe:!1,photoImg:!1,nameShow:!1,currentStudentName:"钟知",innerWidth:window.innerWidth}},mounted:function(){var t=this;this.psChart=this.$echarts.init(document.getElementById("powerScatter")),c.a.getPScatterOrigins(this.demotion).then(function(e){t.data=e,t.resData=t.getResData(t.data.resultList),t.getPowerScatterChart(t.resData)}).catch(function(e){t.data=t.powerScatterData,t.resData=t.getResData(t.data.resultList),t.getPowerScatterChart(t.resData)})},computed:{filterData:function(){var t=this;if(this.onlyShowMe&&this.resData){var e=u()({},this.resData),r=this.resData.sureList.map(function(e,r){if(e.studentName===t.currentStudentName)return r}),n=this.resData.notSureList.map(function(e,r){if(e.studentName===t.currentStudentName)return r});if(r=r.filter(function(t){return void 0!==t}),n=n.filter(function(t){return void 0!==t}),r&&r.length>0){var i=this.resData.sureList.filter(function(t,e){return r.indexOf(e)>=0}),o=this.resData.sure.filter(function(t,e){return r.indexOf(e)>=0});e.sureList=i,e.sure=o}else e.sureList=[],e.sure=[];if(n&&n.length>0){var a=this.resData.notSureList.filter(function(t,e){return n.indexOf(e)>=0}),s=this.resData.notSure.filter(function(t,e){return n.indexOf(e)>=0});e.notSureList=a,e.notSure=s}else e.notSureList=[],e.notSure=[];return e}return this.resData}},watch:{demotion:function(t,e){var r=this;this.psChart.clear(),0==t?c.a.getPScatterOrigins(this.demotion).then(function(t){r.data=t,r.knowledgeDemotion={type:"",description:""},r.resData=r.getResData(r.data.resultList),r.getPowerScatterChart(r.resData)}).catch(function(t){r.data=r.$store.state.reportAllList.question_scatter_diagram,r.knowledgeDemotion={type:"",description:""},r.resData=r.getResData(r.data.resultList),r.getPowerScatterChart(r.resData)}):1==t&&c.a.getPScatterOrigins(this.demotion).then(function(t){r.data=t,r.showKnowledgeDialog()}).catch(function(t){r.data=r.$store.state.reportAllList.knowledge_scatter_diagram,r.showKnowledgeDialog()})}},methods:{showKnowledgeDialog:function(){var t=this;switch(this.knowledgeDemotion.type=this.data.knowledgesInfo,this.data.knowledgesInfo){case 0:this.knowledgeDemotion.description="本套试卷没有关联任何知识点！";break;case 1:this.knowledgeDemotion.description="本套试卷中不是每道题都关联了知识点，所以统计分析数据只能覆盖所有关联了知识点的试题"}1==this.knowledgeDemotion.type&&this.$confirm(this.knowledgeDemotion.description,{confirmButtonText:"知道了",type:"info",center:!0}).then(function(){t.resData=t.getResData(t.data.resultList),t.getPowerScatterChart(t.resData)}),this.data.knowledgesInfo||(this.resData=this.getResData(this.data.resultList),this.getPowerScatterChart(this.resData))},getPowerScatterChart:function(t){var e=t.nameList,r=this.showXWords(e),n=!0;0==r&&(n=!1);var i=e.length>20,o=window.innerWidth>1366?25:20,a=this.arrangeSerise(t),s={title:{top:0,left:0,text:"| 该套试卷学生答题实力散点分布图",textStyle:{color:"#226cfb",fontWeight:"normal",fontSize:16}},tooltip:{formatter:function(e){var r=void 0;return"不会"==e.seriesName?t.notSureList.map(function(t){if(t.userTime==e.data.value[0]&&t.masteryLevel==e.data.value[1])return r=t}):t.sureList.map(function(t){if(t.userTime==e.data.value[0]&&t.masteryLevel==e.data.value[1])return r=t}),e.seriesName+"（"+r.questionOrder+"）<br/>姓名："+r.studentName+"<br/>难度系数:"+(r.degreeOfDifficult/10).toFixed(2)+"<br/>认知掌握程度："+(r.masteryLevel/10).toFixed(2)}},grid:{y:149,x:120,x2:45,y2:i?125:90},dataZoom:{show:i,start:0,end:e.length<o?100:e.length>=o&&e.length<=50?60:10,bottom:60,borderColor:"#999999",fillerColor:"rgba(0, 36, 106, 0.5)",textStyle:{color:"#333333"}},color:["#80c269","#eb6877"],legend:{y:25,data:["会","不会"],itemWidth:23,itemHeight:23,itemGap:40,textStyle:{color:"#333333",fontSize:14}},dataRange:{max:10,min:0,orient:"horizontal",inverse:!0,y:70,x:"center",splitNumber:5,itemWidth:22,itemHeight:22,itemGap:25,color:["#eb6877","#f8b551","#f6eb53","#80c269","#13b5b1"],splitList:[{start:8,end:10,label:"精通掌握",color:"#13b5b1",symbolSize:80},{start:6,end:8,label:"熟练掌握",color:"#80c269",symbolSize:70},{start:5,end:6,label:"基本理解",color:"#f6eb53",symbolSize:60},{start:2,end:5,label:"一知半解",color:"#f8b551",symbolSize:50},{start:0,end:2,label:"完全不会",color:"#eb6877",symbolSize:40}],textStyle:{color:"#333333",fontSize:14}},xAxis:[{type:"category",data:e,axisLine:{lineStyle:{color:"#999999",fontSize:14}},splitLine:{show:!0,lineStyle:{color:"#999999",opacity:"0.3"}},axisLabel:{formatter:function(t){return n&&t.length>r?t.substring(0,r)+"...":t},textStyle:{color:"#333333",fontSize:14}},axisTick:{show:!1},triggerEvent:!0}],yAxis:[{type:"value",min:0,max:10,splitNumber:10,name:"认知掌握程度",nameTextStyle:{color:"#333333",fontSize:14},axisLabel:{show:!0,formatter:function(t,e){var r="";switch(t){case 0:r=0;break;case 5:r=.5;break;case 10:r=1}return r},textStyle:{color:"#333333",fontSize:"14"}},axisLine:{lineStyle:{color:"#999999"}},splitLine:{show:!0,lineStyle:{color:"#999999",opacity:"0.3"}},axisTick:{show:!1}}],animation:!1,series:a};this.psChart.setOption(s),this.utils$.extension(this.psChart)},getResData:function(t){var e=this,r={userTime:[],nameList:[],sure:[],notSure:[],sureList:[],notSureList:[]};return t.map(function(t){r.userTime.push(t.useTime),t.masteryLevel>=5?(r.sureList.push({userTime:e.utils$.fromatDate(t.useTime),questionOrder:t.questionOrder,studentName:t.studentName,degreeOfDifficult:t.degreeOfDifficult,masteryLevel:t.masteryLevel}),r.sure.push([e.utils$.fromatDate(t.useTime),t.masteryLevel])):(r.notSureList.push({userTime:e.utils$.fromatDate(t.useTime),questionOrder:t.questionOrder,studentName:t.studentName,degreeOfDifficult:t.degreeOfDifficult,masteryLevel:t.masteryLevel}),r.notSure.push([e.utils$.fromatDate(t.useTime),t.masteryLevel]))}),r.userTime.sort(function(t,e){return t-e}),r.userTime.forEach(function(t){r.nameList.push(e.utils$.fromatDate(t))}),r.nameList=a()(new i.a(r.nameList)),r},showXWords:function(t){var e,r=t.length;return r<=2?e=0:r>2&&r<=5?e=15:r>5&&r<=10?e=7:r>10&&(e=5),e},arrangeSerise:function(t){var e=["sure","notSure"],r=this;return["会","不会"].map(function(n,i){return{name:n,type:"scatter",tooltip:{trigger:"item"},symbolSize:0==i?35:20,data:(o=[],t[e[i]].map(function(e){var i;"不会"==n?t.notSureList.map(function(t){t.userTime==e[0]&&t.masteryLevel==e[1]&&(i=t)}):t.sureList.map(function(t){t.userTime==e[0]&&t.masteryLevel==e[1]&&(i=t)});var a,s=i.studentName;a={name:s,value:e,symbol:r.photoImg?"image://https://yk.laiweitec.com:120/lw-fileserver/fs/file/showPic?fileName=file/goods/courseware/2019/04/04/20190404102929105766918369824122.png":"circle",itemStyle:{borderRadius:"50%"},label:{show:s===r.currentStudentName||r.nameShow,color:"#333",fontSize:s===r.currentStudentName?"18":"14",position:"bottom",formatter:function(t){return t.name===r.currentStudentName?"我":t.name}}},o.push(a)}),o)};var o})},showPhoto:function(){this.psChart.clear(),this.getPowerScatterChart(this.filterData)},showName:function(){this.psChart.clear(),this.getPowerScatterChart(this.filterData)},showMe:function(){this.psChart.clear(),this.getPowerScatterChart(this.filterData)}}},f={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"power-scatter"},[r("div",{staticClass:"right-select select-component"},[r("el-select",{attrs:{placeholder:"试题维度"},model:{value:t.demotion,callback:function(e){t.demotion=e},expression:"demotion"}},t._l(t.exams,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),r("div",{staticClass:"photoImg",class:{"photoImg-1024":t.innerWidth<=1024}},[r("el-checkbox",{on:{change:t.showPhoto},model:{value:t.photoImg,callback:function(e){t.photoImg=e},expression:"photoImg"}},[t._v("显示头像")]),t._v(" "),r("el-checkbox",{on:{change:t.showName},model:{value:t.nameShow,callback:function(e){t.nameShow=e},expression:"nameShow"}},[t._v("显示姓名")]),t._v(" "),r("el-checkbox",{on:{change:t.showMe},model:{value:t.onlyShowMe,callback:function(e){t.onlyShowMe=e},expression:"onlyShowMe"}},[t._v("只显示我的")])],1),t._v(" "),r("div",{style:{width:"100%",height:"713px",minHeight:"380px"},attrs:{id:"powerScatter"}}),t._v(" "),0==t.knowledgeDemotion.type?r("p",{staticClass:"knowledge-tip"},[t._v(t._s(t.knowledgeDemotion.description))]):t._e(),t._v(" "),r("p",{staticClass:"power-scatter-bottom-title"},[r("span",{directives:[{name:"show",rawName:"v-show",value:0==t.demotion,expression:"demotion == 0"}]},[t._v("这套题各题的自身难度水平和全班的平均认知答题水平的联合分布规律")]),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:1==t.demotion,expression:"demotion == 1"}]},[t._v("这套题知识点的自身难度水平和全班的平均认知答题水平的联合分布规律")])])])},staticRenderFns:[]};var h=r("VU/8")(l,f,!1,function(t){r("vm4q")},"data-v-53c0939a",null);e.default=h.exports},HpRW:function(t,e,r){"use strict";var n=r("kM2E"),i=r("lOnJ"),o=r("+ZMJ"),a=r("NWt+");t.exports=function(t){n(n.S,t,{from:function(t){var e,r,n,s,u=arguments[1];return i(this),(e=void 0!==u)&&i(u),void 0==t?new this:(r=[],e?(n=0,s=o(u,arguments[2],2),a(t,!1,function(t){r.push(s(t,n++))})):a(t,!1,r.push,r),new this(r))}})}},LIJb:function(t,e,r){var n=r("EqjI");t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},ioQ5:function(t,e,r){r("HpRW")("Set")},lHA8:function(t,e,r){t.exports={default:r("pPW7"),__esModule:!0}},m9gC:function(t,e,r){var n=r("RY/4"),i=r("4WTo");t.exports=function(t){return function(){if(n(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},oNmr:function(t,e,r){r("9Bbf")("Set")},oeOm:function(t,e,r){var n=r("7Doy");t.exports=function(t,e){return new(n(t))(e)}},pPW7:function(t,e,r){r("M6a0"),r("zQR9"),r("+tPU"),r("ttyz"),r("BDhv"),r("oNmr"),r("ioQ5"),t.exports=r("FeBl").Set},qo66:function(t,e,r){"use strict";var n=r("7KvD"),i=r("kM2E"),o=r("06OY"),a=r("S82l"),s=r("hJx8"),u=r("xH/j"),c=r("NWt+"),l=r("2KxR"),f=r("EqjI"),h=r("e6n0"),d=r("evD5").f,m=r("ALrJ")(0),p=r("+E39");t.exports=function(t,e,r,v,g,w){var S=n[t],y=S,D=g?"set":"add",_=y&&y.prototype,b={};return p&&"function"==typeof y&&(w||_.forEach&&!a(function(){(new y).entries().next()}))?(y=e(function(e,r){l(e,y,t,"_c"),e._c=new S,void 0!=r&&c(r,g,e[D],e)}),m("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in _&&(!w||"clear"!=t)&&s(y.prototype,t,function(r,n){if(l(this,y,t),!e&&w&&!f(r))return"get"==t&&void 0;var i=this._c[t](0===r?0:r,n);return e?this:i})}),w||d(y.prototype,"size",{get:function(){return this._c.size}})):(y=v.getConstructor(e,t,g,D),u(y.prototype,r),o.NEED=!0),h(y,t),b[t]=y,i(i.G+i.W+i.F,b),w||v.setStrong(y,t,g),y}},ttyz:function(t,e,r){"use strict";var n=r("9C8M"),i=r("LIJb");t.exports=r("qo66")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return n.def(i(this,"Set"),t=0===t?0:t,t)}},n)},vm4q:function(t,e){}});