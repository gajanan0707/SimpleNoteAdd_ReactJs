(this.webpackJsonpgooglenoteclonereactjs=this.webpackJsonpgooglenoteclonereactjs||[]).push([[0],{28:function(e,t,n){},47:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),a=n.n(r),o=n(11),i=n.n(o),l=(n(47),n(38)),s=n(21),j=(n(28),n(24)),d=n(27),u=n(69),b=n(36),O=n.n(b),x=function(e){var t=Object(r.useState)(!1),n=Object(s.a)(t,2),a=n[0],o=n[1],i=Object(r.useState)({title:"",content:""}),l=Object(s.a)(i,2),b=l[0],x=l[1],h=function(e){var t=e.target,n=t.name,c=t.value;x((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},n,c))})),console.log(b)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"main_note",onDoubleClick:function(){o(!1)},children:Object(c.jsxs)("form",{children:[a?Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",name:"title",value:b.title,onChange:h,className:"form-control",placeholder:"Title"})}):null,Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("textarea",{className:"form-control",name:"content",id:"exampleFormControlTextarea1",value:b.content,onChange:h,placeholder:"Write a Note..",onClick:function(){o(!0)}})}),a?Object(c.jsx)("div",{children:Object(c.jsx)(u.a,{onClick:function(){e.passNote(b),x({title:"",content:""})},variant:"contained",color:"primary",children:Object(c.jsx)(O.a,{})})}):null]})})})},h=function(){var e=(new Date).getFullYear();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("footer",{className:"footer",children:Object(c.jsxs)("p",{children:["copyright ",Object(c.jsx)("i",{className:"fa fa-copyright","aria-hidden":"true"})," ",e]})})})},m=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{children:"ReactNote"})})})},f=n(37),g=n.n(f),p=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"mainCard",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("h1",{children:e.title}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:e.content}),Object(c.jsx)(u.a,{variant:"contained",color:"secondary",onClick:function(){e.deleteItem(e.id)},children:Object(c.jsx)(g.a,{className:"deleteicon"})})]})})})},v=(n(53),function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],o=function(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m,{}),Object(c.jsx)(x,{passNote:function(e){a((function(t){return[].concat(Object(l.a)(t),[e])})),console.log(e)}}),n.map((function(e,t){return Object(c.jsx)(p,{id:t,title:e.title,content:e.content,deleteItem:o},t)})),Object(c.jsx)(h,{})]})});i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.967f92b4.chunk.js.map