(this.webpackJsonpjajaluts=this.webpackJsonpjajaluts||[]).push([[0],{18:function(e,a,t){},23:function(e,a,t){e.exports=t(33)},33:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),o=(t(18),t(5)),s=t(6),m=t(16);var i=function(){var e=l.a.useState(!1),a=Object(m.a)(e,2),t=a[0],n=a[1],r=l.a.useState(""),c=Object(m.a)(r,2),i=c[0],u=c[1],d=Object(s.f)().pathname;return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark mb-4"},l.a.createElement("a",{className:"navbar-brand",href:"#!"},"Top navbar"),l.a.createElement("button",{onClick:function(){n(!t)},className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse ".concat(t?"show":""),id:"navbarCollapse"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item ".concat("/"===d?"active":"")},l.a.createElement(o.b,{className:"nav-link",to:"/"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item ".concat(d.indexOf("/blog")>-1?"active":"")},l.a.createElement(o.b,{className:"nav-link",to:"/blog"},"Blog")),l.a.createElement("li",{className:"nav-item ".concat(d.indexOf("/about")>-1?"active":"")},l.a.createElement(o.b,{className:"nav-link",to:"/about"},"About")),l.a.createElement("li",{className:"nav-item ".concat("/#!"===d?"active":"")},l.a.createElement("a",{className:"nav-link disabled",href:"#!",tabIndex:"-1","aria-disabled":"true"},"Disabled"))),l.a.createElement("form",{className:"form-inline mt-2 mt-md-0",onSubmit:function(e){e.preventDefault(),fetch("/api/search/?searchValue="+i).then((function(e){return e.json()})).then((function(e){return e.search})).then((function(e){return alert(e)})).catch((function(e){return console.log(e)}))}},l.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search","aria-label":"Search",onChange:function(e){var a=e.target.value;u(a)},value:i}),l.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))},u=t(9),d=t(10),p=t(12),b=t(11);function v(e){var a=e.id,t=e.categoryName,n=e.title,r=e.postedAt,c=e.summary;return l.a.createElement("div",{className:"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},l.a.createElement("div",{className:"col p-4 d-flex flex-column position-static"},l.a.createElement("strong",{className:"d-inline-block mb-2 text-primary"},t),l.a.createElement("h3",{className:"mb-0"},n),l.a.createElement("div",{className:"mb-1 text-muted"},r),l.a.createElement("p",{className:"card-text mb-auto"},c),l.a.createElement(o.b,{to:"/blog/"+a,className:"stretched-link"},"Continue reading")),l.a.createElement("div",{className:"col-auto d-none d-lg-block"},l.a.createElement("img",{className:"bd-placeholder-img",width:"200",height:"250","aria-label":"Placeholder: Thumbnail",src:"https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940b",alt:n})))}l.a.Component;var h=v;function E(e){var a=e.title,t=e.summary;return l.a.createElement("div",{className:"col-lg-8"},l.a.createElement("h1",{className:"mt-4"},a),l.a.createElement("img",{className:"img-fluid rounded",src:"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",alt:a}),l.a.createElement("hr",null),l.a.createElement("p",{className:"lead"},t),l.a.createElement("blockquote",{className:"blockquote"},l.a.createElement("p",{className:"mb-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),l.a.createElement("footer",{className:"blockquote-footer"},"Someone famous in",l.a.createElement("cite",{title:"Source Title"},"Source Title"))),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!"),l.a.createElement("hr",null))}l.a.Component;var g=E;var N=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(i,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/about"},"About"),l.a.createElement(s.a,{path:"/blog/:articleId",component:g}),l.a.createElement(s.a,{path:"/blog"},l.a.createElement(h,null)),l.a.createElement(s.a,{path:"/"},"Home"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.d9199977.chunk.js.map