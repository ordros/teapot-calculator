(this["webpackJsonpteapot-calculator"]=this["webpackJsonpteapot-calculator"]||[]).push([[0],{26:function(t,n,e){},27:function(t,n,e){},39:function(t,n,e){"use strict";e.r(n);var a,c,i,r,o,l,d,u,b,s,j,f,O,x,p,h,m,g,v,y,A,D,w,T,E,I=e(0),N=e.n(I),k=e(8),C=e.n(k),L=(e(26),e(11)),S=e(2),_=(e(27),e(3)),M=e(1),z=_.a.div(a||(a=Object(S.a)(["\n  height: 60vw;\n  max-height: 300px;\n  display: flex;\n  align-items: center;\n"]))),P=_.a.div(c||(c=Object(S.a)(["\n  width: 40vw;\n  max-width: 200px;\n  height: 100%;\n  border-radius: 5px 5px 20px 20px;\n  border: 4px solid black;\n  border-top: none;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n"]))),U=_.a.div(i||(i=Object(S.a)(["\n  width: 100%;\n  background: rgba(112, 241, 255, 0.5);\n  border-radius: 1px 1px 15px 15px;\n  height: ","%;\n  z-index: -1;\n"])),(function(t){return t.amount/t.max*100})),F=_.a.div(r||(r=Object(S.a)(["\n  height: 110%;\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n  justify-content: space-between;\n"]))),W=_.a.div(o||(o=Object(S.a)(["\n  position: relative;\n  font-weight: bold;\n  white-space: pre-wrap;\n"]))),J=function(t){var n=t.max,e=t.amount,a=t.onClick,c=t.children;return Object(M.jsxs)(z,{children:[Object(M.jsxs)(P,{onClick:function(t){console.log(t);var e=t.target.offsetHeight,c=t.clientY-t.target.offsetTop;if(c<=4)a(n);else if(c>=e-4)a(0);else{var i=1-c/e,r=10*Math.round(i*n/10);a(r)}},children:[Object(M.jsx)(U,{max:parseInt(n),amount:parseInt(e)}),c]}),Object(M.jsxs)(F,{children:[Object(M.jsx)(W,{children:n||100}),Object(M.jsx)(W,{children:(n||100)/4*3}),Object(M.jsx)(W,{children:(n||100)/2}),Object(M.jsx)(W,{children:(n||100)/4*1}),Object(M.jsx)(W,{children:" 0"})]})]})},B=_.a.div(l||(l=Object(S.a)(["\n  display: flex;\n  margin-left: -50px;\n"]))),R=_.a.input(d||(d=Object(S.a)(["\n  transform: rotate(-90deg);\n"]))),V=function(t){var n=t.min,e=void 0===n?0:n,a=t.max,c=void 0===a?100:a,i=t.step,r=void 0===i?10:i,o=t.value,l=t.setValue,d=void 0===l?function(){return null}:l;return Object(M.jsx)(B,{children:Object(M.jsx)(R,{type:"range",min:e,max:c||100,value:o,step:r,onChange:function(t){d(t.target.value)}})})},H=e(21),Y=e(10),q=e(4),G=e(5),K=_.a.div(u||(u=Object(S.a)(["\n  width: 24px;\n  height: 24px;\n  border-radius: 100px;\n  :hover {\n    background: #ff0f0f;\n    div {\n      color: white;\n    }\n  }\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n"]))),Q=_.a.div(b||(b=Object(S.a)(["\n  font-size: 20px;\n"]))),X=function(t){var n=Object.assign({},t);return Object(M.jsx)(K,Object(q.a)(Object(q.a)({},n),{},{children:Object(M.jsx)(Q,{children:"\ud83d\uddd1"})}))},Z=_.a.table(s||(s=Object(S.a)(["\n  border-collapse: collapse;\n  border-spacing: 0;\n"]))),$=_.a.th(j||(j=Object(S.a)(["\n  text-align: ",";\n  padding: 0 16px;\n"])),(function(t){return t.align||"start"})),tt=_.a.tr(f||(f=Object(S.a)(["\n  background: #a0a0a0;\n"]))),nt=_.a.td(O||(O=Object(S.a)(["\n  border-bottom 1px solid #a0a0a0;\n  padding: 0 8px;\n"]))),et=_.a.td(x||(x=Object(S.a)(["\n  border-bottom 1px solid #a0a0a0;\n  padding: 0 8px 0 16px;\n"]))),at=_.a.input(p||(p=Object(S.a)(["\n  border: none;\n  text-align: ",";\n  width: 100%;\n"])),(function(t){return t.align||"start"})),ct=function(t){var n=t.data,e=t.onDelete,a=Object(G.b)();return n&&n.columns?Object(M.jsxs)(Z,{children:[Object(M.jsx)("thead",{children:Object(M.jsxs)(tt,{children:[n.columns.map((function(t){return Object(M.jsx)($,{align:t.align,children:t.label},t.id)})),Object(M.jsx)("th",{})]})}),Object(M.jsx)("tbody",{children:n.data.sort((function(t,n){return t.id-n.id})).map((function(t){return Object(M.jsxs)("tr",{children:[n.columns.map((function(e){return Object(M.jsx)(nt,{align:e.align,children:Object(M.jsx)(at,{value:t[e.id],align:e.align,type:e.type||"text",min:1,onChange:function(c){return function(t){var e=t.rowId,c=t.columnId,i=t.value,r=n.data.find((function(t){return t.id===e}));a({type:"UPDATE_DATA",payload:{data:Object(q.a)(Object(q.a)({},r),{},Object(Y.a)({id:e},c,i))}})}({rowId:t.id,columnId:e.id,value:c.target.value})}})},e.id)})),Object(M.jsx)(et,{children:Object(M.jsx)(X,{onClick:function(){return e(t.id)}})})]},t.id)}))})]}):null},it=e(6),rt={tableData:{columns:[],data:[]}},ot=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INIT":return Object(q.a)(Object(q.a)({},t),{},{tableData:Object(q.a)({},n.payload)});case"UPDATE_DATA":var e=n.payload.data,a=t.tableData.data.filter((function(t){return t.id!==e.id}));return Object(q.a)(Object(q.a)({},t),{},{tableData:{columns:t.tableData.columns,data:[].concat(Object(it.a)(a),[e])}});case"ADD_DATA":var c=n.payload.data,i=Math.max.apply(Math,Object(it.a)(t.tableData.data.map((function(t){return t.id}))))+1;return isFinite(i)||(i=0),Object(q.a)(Object(q.a)({},t),{},{tableData:Object(q.a)(Object(q.a)({},t.tableData),{},{data:[].concat(Object(it.a)(t.tableData.data),[Object(q.a)(Object(q.a)({},c),{},{id:i})])})});case"DELETE_DATA":var r=n.payload.rowId,o=t.tableData.data.filter((function(t){return t.id!==r}));return Object(q.a)(Object(q.a)({},t),{},{tableData:{columns:t.tableData.columns,data:Object(it.a)(o)}});case"UPDATE_LAST_WATER_AMOUNT":var l=n.payload,d=l.waterAmount,u=l.teaLeafId,b=t.tableData.data.find((function(t){return t.id==u})),s=t.tableData.data.filter((function(t){return t.id!=u}));return Object(q.a)(Object(q.a)({},t),{},{tableData:{columns:t.tableData.columns,data:[].concat(Object(it.a)(s),[Object(q.a)(Object(q.a)({},b),{},{lastWaterAmount:d})])}});default:return t}},lt=_.a.select(h||(h=Object(S.a)(["\n  border: 2px solid;\n"]))),dt=function(t){var n=t.teaList,e=t.onChange;return Object(M.jsx)(lt,{onChange:e,children:n.filter((function(t){return t.leafName&&t.leafAmount&&t.waterAmount})).map((function(t){return Object(M.jsx)("option",{value:t.id,children:t.leafName},t.id)}))})},ut=_.a.div(m||(m=Object(S.a)(["\n  width: 24px;\n  height: 24px;\n  border-radius: 100px;\n  border: 1px solid #a0a0a0;\n  :hover {\n    background: #ff3a00;\n    border: 1px solid #ff3a00;\n    div {\n      color: white;\n    }\n  }\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),bt=_.a.div(g||(g=Object(S.a)(["\n  font-size: 24px;\n"]))),st=function(t){var n=Object.assign({},t);return Object(M.jsx)(ut,Object(q.a)(Object(q.a)({},n),{},{children:Object(M.jsx)(bt,{children:"\uff0b"})}))},jt="teaLeafSettings",ft=_.a.div(v||(v=Object(S.a)(["\n  margin: 8px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Ot=_.a.div(y||(y=Object(S.a)(["\n  display: flex;\n  margin-top: 8px;\n"]))),xt=_.a.div(A||(A=Object(S.a)(["\n  max-width: 580px;\n"]))),pt=Object(_.a)(st)(D||(D=Object(S.a)(["\n  margin: 0 8px 4px auto;\n"]))),ht=_.a.div(w||(w=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: -2;\n  position: absolute;\n"]))),mt=_.a.div(T||(T=Object(S.a)(["\n  font-weight: bold;\n  font-size 36px;\n  margin-bottom: 8px;\n"]))),gt=_.a.div(E||(E=Object(S.a)(["\n  font-weight: bold;\n  font-size 36px;\n  border-top: 4px solid black;\n"]))),vt=function(){var t=Object(I.useState)(50),n=Object(L.a)(t,2),e=n[0],a=n[1],c=Object(I.useState)(null),i=Object(L.a)(c,2),r=i[0],o=i[1],l=Object(I.useState)(0),d=Object(L.a)(l,2),u=d[0],b=d[1],s=Object(G.c)((function(t){return t})).tableData,j=s.data.sort((function(t,n){return t.id-n.id})),f=Object(G.b)();return Object(I.useEffect)((function(){b(function(){var t=s.data.find((function(t){return t.id==r}));return t?t.leafAmount/t.waterAmount*e:0}())}),[e,r,s]),Object(I.useEffect)((function(){var t;j.length&&!j.find((function(t){return t.id==r}))?o(j[0].id):j.length||o(null),s&&s.data.length&&(t=s,localStorage.setItem(jt,JSON.stringify(t)))}),[s]),Object(I.useEffect)((function(){e&&!isNaN(r)&&f({type:"UPDATE_LAST_WATER_AMOUNT",payload:{waterAmount:e,teaLeafId:r}})}),[e]),Object(I.useEffect)((function(){var t=s.data.find((function(t){return t.id==r}));t&&t.lastWaterAmount&&a(t.lastWaterAmount)}),[r]),Object(I.useEffect)((function(){var t=function(){var t=localStorage.getItem(jt);return JSON.parse(t)}();f({type:"INIT",payload:{columns:[{id:"leafName",label:"\u8336\u8449",align:"center"},{id:"leafAmount",label:"\u8336\u8449\u306e\u91cf [g]",align:"right",type:"number"},{id:"waterAmount",label:"\u6c34\u306e\u91cf [mL]",align:"right",type:"number"}],data:t?t.data:[]}})}),[]),Object(M.jsxs)(ft,{children:[Object(M.jsx)(dt,{teaList:j,onChange:function(t){return o(t.target.value)}}),Object(M.jsxs)(Ot,{children:[Object(M.jsx)(J,{max:400,amount:e,onClick:a,children:Object(M.jsxs)(ht,{children:[Object(M.jsxs)(mt,{children:[isNaN(u)||!u?" - ":Math.round(u),"g"]}),Object(M.jsxs)(gt,{children:[e,"mL"]})]})}),Object(M.jsx)(V,{min:0,max:400,value:e,setValue:function(t){return a(t)}})]}),Object(M.jsxs)(xt,{children:[Object(M.jsx)(pt,{onClick:function(){f({type:"ADD_DATA",payload:{leafName:"",leafAmount:0,waterAmount:0}})},children:"a"}),Object(M.jsx)(ct,{data:s,onDelete:function(t){f({type:"DELETE_DATA",payload:{rowId:t}})}})]})]})},yt=function(){var t=Object(H.a)(ot);return Object(M.jsx)(G.a,{store:t,children:Object(M.jsx)(vt,{})})},At=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,40)).then((function(n){var e=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;e(t),a(t),c(t),i(t),r(t)}))};C.a.render(Object(M.jsx)(N.a.StrictMode,{children:Object(M.jsx)(yt,{})}),document.getElementById("root")),At()}},[[39,1,2]]]);
//# sourceMappingURL=main.f50c411d.chunk.js.map