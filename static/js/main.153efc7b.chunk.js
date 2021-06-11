(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(6),l=c.n(a),i=c(7),s=c(3),r=c(16),d=c(0),m=function(e){var t=e.inputText,c=e.setInputText,n=e.handleCreateTodo;return Object(d.jsxs)("div",{className:"input mt-md mb-sm",children:[Object(d.jsx)("div",{className:"checkbox"}),Object(d.jsx)("input",{value:t,onChange:function(e){return c(e.target.value)},type:"text",className:"input__field",placeholder:"Create a new todo...",onKeyUp:n})]})},u=c.p+"static/media/icon-moon.6c03114b.svg",h=c.p+"static/media/icon-sun.910b1f9a.svg",j=c.p+"static/media/icon-cross.6ee81d30.svg",b=function(e){var t=e.todoList,c=e.handleDeleteTodo,n=e.handleSetCompleted,o=e.closeIcon;return Object(d.jsx)("div",{className:"todo__list",children:t.map((function(e){return Object(d.jsxs)("li",{className:"todo__list-item",children:[!e.completed&&Object(d.jsx)("div",{className:"todo__checkbox",onClick:n,id:e.key}),e.completed&&Object(d.jsx)("div",{className:"todo__checkbox todo__checkbox--checked",id:e.key,onClick:n}),Object(d.jsx)("p",{className:"todo__text",children:e.task}),Object(d.jsx)("img",{src:o,alt:"Close button",className:"todo__cross",onClick:c,id:e.key})]},e.key)}))})},p=function(e){var t=e.state,c=e.dispatch;return Object(d.jsxs)("div",{className:"todo__action-buttons",children:[Object(d.jsx)("button",{className:"todo__button ".concat(t.all&&"active"),onClick:function(){return c({type:"all"})},children:"All"}),Object(d.jsx)("button",{className:"todo__button ".concat(t.active&&"active"),onClick:function(){return c({type:"active"})},children:"Active"}),Object(d.jsx)("button",{className:"todo__button ".concat(t.completed&&"active"),onClick:function(){return c({type:"completed"})},children:"Completed"})]})},f=function(){var e=document.querySelector("html"),t=Object(n.useState)([]),c=Object(s.a)(t,2),o=c[0],a=c[1],l=Object(n.useState)(""),f=Object(s.a)(l,2),x=f[0],v=f[1],O=Object(n.useState)(u),_=Object(s.a)(O,2),g=_[0],k=_[1];Object(n.useEffect)((function(){"light-theme"===window.localStorage.getItem("theme")?(e.className="light-theme",k(u)):(e.className="dark-theme",k(h))}),[]);var N,C=Object(n.useReducer)((function(e,t){switch(t.type){case"all":return{all:!0,active:!1,completed:!1};case"active":return{all:!1,active:!0,completed:!1};case"completed":return{all:!1,active:!1,completed:!0};default:return{all:!0,active:!1,completed:!1}}}),{all:!0,active:!1,completed:!1}),y=Object(s.a)(C,2),w=y[0],S=y[1],I=(N=w).all?o:N.active?o.filter((function(e){return!0!==e.completed})):o.filter((function(e){return e.completed}));return Object(d.jsx)("div",{className:"home",children:Object(d.jsxs)("div",{className:"home__box",children:[Object(d.jsxs)("div",{className:"home__title-bar",children:[Object(d.jsx)("h1",{className:"heading-primary",children:"todo"}),Object(d.jsx)("img",{src:g,alt:"Theme switch icon",className:"home__theme-icon",onClick:function(){"light-theme"===window.localStorage.getItem("theme")?(e.className="dark-theme",window.localStorage.setItem("theme","dark-theme"),k(h)):(e.className="light-theme",window.localStorage.setItem("theme","light-theme"),k(u))}})]}),Object(d.jsx)(m,{handleCreateTodo:function(e){13===e.which&&(a([].concat(Object(i.a)(o),[{task:e.target.value,completed:!1,key:Object(r.a)()}])),v(""))},setInputText:v,inputText:x}),Object(d.jsxs)("div",{className:"list-container",children:[Object(d.jsx)(b,{closeIcon:j,handleDeleteTodo:function(e){return a(o.filter((function(t){return t.key!==e.target.id})))},handleSetCompleted:function(e){var t=o.findIndex((function(t){return t.key===e.target.id})),c=o.filter((function(t){return t.key===e.target.id}))[0];c.completed=!c.completed;var n=o.filter((function(t){return t.key!==e.target.id}));n.splice(t,0,c),a(n)},todoList:I}),Object(d.jsxs)("div",{className:"todo__bottom-bar",children:[Object(d.jsxs)("p",{className:"todo__items-left",children:[I.length," item",I.length>1?"s":""," left"]}),Object(d.jsx)(p,{state:w,dispatch:S}),Object(d.jsx)("p",{className:"todo__clear-button",onClick:function(){var e=o.filter((function(e){return!e.completed}));a(e)},children:"Clear Completed"})]})]}),Object(d.jsx)("p",{className:"small-text text-align-center mt-md",children:"Drag and drop to reorder list"})]})})};var x=function(){return Object(d.jsx)(f,{})},v=(c(13),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),n(e),o(e),a(e),l(e)}))});l.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),v()}},[[14,1,2]]]);
//# sourceMappingURL=main.153efc7b.chunk.js.map