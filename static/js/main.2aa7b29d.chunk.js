(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(5),c=a(2),s=a(7),o=a(1),l=a(9),d=a.n(l),u=a(0),m=function(e){var t=e.user,a=t.name,n=t.email;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},j=function(e){var t=e.todo,a=t.title,n=t.completed,i=t.id,r=t.user;return Object(u.jsxs)("article",{"data-id":i,className:d()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:a}),r&&Object(u.jsx)(m,{user:r})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];a(15);function O(e){return h.find((function(t){return t.id===e}))||null}var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:O(e.userId)})})),p=function(){var e=Object(o.useState)(f),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),s=Object(c.a)(i,2),l=s[0],d=s[1],m=Object(o.useState)("0"),j=Object(c.a)(m,2),p=j[0],x=j[1],v=Object(o.useState)(!1),y=Object(c.a)(v,2),S=y[0],N=y[1],I=Object(o.useState)(!1),g=Object(c.a)(I,2),C=g[0],_=g[1],k=function(){var e=Object(r.a)(a).map((function(e){return e.id}));return Math.max.apply(Math,Object(r.a)(e))+1};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){return function(e){if(e.preventDefault(),l||N(!0),+p<1&&_(!0),l&&!(+p<1)){var t={id:k(),title:l,completed:!1,userId:+p,user:O(+p)};n([].concat(Object(r.a)(a),[t])),d(""),x("0")}}(e)},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(u.jsx)("input",{type:"text","data-cy":"titleInput",name:"title",placeholder:"Enter a title",id:"title",value:l,onChange:function(e){return function(e){var t=e.replace(/[^a-zA-Z0-9\u0410-\u042f\u0430-\u044f ]/g,"");d(t),N(!1)}(e.target.value)}}),S&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("label",{htmlFor:"select",children:"User: "}),Object(u.jsxs)("select",{"data-cy":"userSelect",name:"select",id:"select",value:p,onChange:function(e){return t=e.target.value,x(t),void _(!1);var t},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),C&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)(b,{todos:a})]})};i.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2aa7b29d.chunk.js.map