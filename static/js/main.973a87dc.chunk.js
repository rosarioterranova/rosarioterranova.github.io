(this["webpackJsonprosarioterranova-react"]=this["webpackJsonprosarioterranova-react"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),s=a(4),i=a.n(s);a(10),a(11);function o(){return Object(n.jsxs)("div",{className:"text-white text-center my-5 mx-3",children:[Object(n.jsx)("p",{className:"about-title",children:"Rosario Terranova"}),Object(n.jsx)("p",{className:"about-subtitle",children:"Software Engineer"}),Object(n.jsx)("img",{src:"/img/me.jpg",className:"rounded-circle my-3",alt:"Rosario Terranova",width:"150",height:"150"}),Object(n.jsx)("p",{className:"text-left",children:"I'm a software engineer with many years of professional and commercial experience in the development of software, fullstack web apps, games, 3D, AR and VR applications with various technologies and pipelines."}),Object(n.jsx)("div",{className:"div",children:Object(n.jsx)("a",{href:"https://www.codewars.com/users/rosario.terranova",target:"_blank",children:Object(n.jsx)("img",{src:"https://www.codewars.com/users/rosario.terranova/badges/micro"})})}),Object(n.jsxs)("div",{className:"btn-group mt-2",role:"group",children:[Object(n.jsx)("a",{href:"mailto:rosarioterranova91@gmail.com",target:"_blank",children:Object(n.jsx)("button",{type:"button",className:"btn btn-success m-1",children:Object(n.jsx)("i",{className:"fa fa-envelope-o","aria-hidden":"true"})})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/rosarioterranova/",target:"_blank",children:Object(n.jsx)("button",{type:"button",className:"btn btn-primary m-1",children:Object(n.jsx)("i",{className:"fa fa-linkedin","aria-hidden":"true"})})}),Object(n.jsx)("a",{href:"https://github.com/rosarioterranova",target:"_blank",children:Object(n.jsx)("button",{type:"button",className:"btn btn-danger m-1",children:Object(n.jsx)("i",{className:"fa fa-github","aria-hidden":"true"})})}),Object(n.jsx)("a",{href:"https://twitter.com/rosterranova",target:"_blank",children:Object(n.jsx)("button",{type:"button",className:"btn btn-primary m-1",children:Object(n.jsx)("i",{className:"fa fa-twitter","aria-hidden":"true"})})}),Object(n.jsx)("a",{href:"https://www.facebook.com/rosterranova/",target:"_blank",children:Object(n.jsx)("button",{type:"button",className:"btn btn-primary m-1",children:Object(n.jsx)("i",{className:"fa fa-facebook","aria-hidden":"true"})})})]})]})}var l=a(3);a(12),a(13);function b(e){var t=e.title,a=e.description,c=e.img,r=e.link,s=e.linkCode,i=e.tech,o=e.platforms;return Object(n.jsx)("div",{className:"col-12 col-md-6 col-lg-4 project text-white p-0",children:Object(n.jsxs)("div",{className:"col-12 bg-dark m-2 h-100",children:[Object(n.jsx)("div",{className:"p-2",children:Object(n.jsx)("b",{className:"project-title",children:t})}),Object(n.jsx)("img",{className:"project-img img-fluid",src:c}),Object(n.jsxs)("div",{className:"p-1 text-left",children:[Object(n.jsx)("p",{children:a}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"Tech:"})," ",i]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"Platforms:"})," ",o]})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"text-center",children:Object(n.jsxs)("div",{className:"btn-group project-btns",children:[null!=r?Object(n.jsxs)("a",{href:r,target:"_blank",className:"btn btn-secondary btn-sm",children:[Object(n.jsx)("i",{className:"fa fa-external-link","aria-hidden":"true"})," Info"]}):null,null!=s?Object(n.jsxs)("a",{href:s,target:"_blank",className:"btn btn-secondary btn-sm",children:[Object(n.jsx)("i",{className:"fa fa-file-code-o","aria-hidden":"true"})," Code"]}):null]})})]})]})})}var j=a.p+"static/media/gear.e77dfbdf.svg";function d(){return Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)("img",{src:j})})}a(14);function m(e){var t=e.click;return Object(n.jsx)("div",{className:"navigation text-center m-2 navigation-animation-enter",children:Object(n.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[Object(n.jsxs)("button",{type:"button",className:"btn btn-dark",onClick:function(){return t("web")},children:[Object(n.jsx)("i",{className:"fa fa-globe","aria-hidden":"true"})," Web Apps"]}),Object(n.jsxs)("button",{type:"button",className:"btn btn-dark",onClick:function(){return t("mobile")},children:[Object(n.jsx)("i",{className:"fa fa-mobile","aria-hidden":"true"})," Mobile Apps"]}),Object(n.jsxs)("button",{type:"button",className:"btn btn-dark",onClick:function(){return t("games")},children:[Object(n.jsx)("i",{className:"fa fa-gamepad","aria-hidden":"true"})," Games"]})]})})}function u(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(null),i=Object(l.a)(s,2),o=i[0],j=i[1];Object(c.useEffect)((function(){fetch("".concat("","/projects.json")).then((function(e){return e.json()})).then((function(e){r(e),j(f(e))}))}),[]);var u=Object(c.useRef)(),h=Object(n.jsx)(d,{});function f(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}return null!=o&&(h=o.map((function(e,t){return Object(n.jsx)(b,{title:e.title,description:e.description,img:e.img,link:e.link,linkCode:e.linkCode,tech:e.tech,platforms:e.platforms},t)}))),Object(n.jsxs)("div",{className:"container mb-2",children:[Object(n.jsx)(m,{click:function(e){j(f(a.filter((function(t){return t.category===e})))),u.current.classList.remove("portfolio-animation-enter"),u.current.classList.add("portfolio-animation-exit"),setTimeout((function(){u.current.classList.add("portfolio-animation-enter"),u.current.classList.remove("portfolio-animation-exit")}),250)}}),Object(n.jsx)("div",{className:"row portfolio-animation-enter",ref:u,children:h})]})}var h=function(){return Object(n.jsxs)("div",{className:"App row bg-secondary",children:[Object(n.jsx)("div",{className:"col-left col-12 col-md-3 bg-dark about-animation-enter",children:Object(n.jsx)(o,{})}),Object(n.jsx)("div",{className:"col-right col-12 col-md-9 bg-secondary scrollable-area",children:Object(n.jsx)(u,{})})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.973a87dc.chunk.js.map