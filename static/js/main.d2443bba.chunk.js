(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),c=n(14),i=n.n(c),o=(n(22),n(4)),l=n(16),d=(n(23),s.a.createContext({})),u=function(){var e=Object(r.useContext)(d);function t(e){var t=e.split("-"),n=t[0];return[t[1],t[2].split("T")[0],n].join("-")}return Object(a.jsxs)("tbody",{children:[" ",void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var n=e.login,r=e.name,s=e.picture,c=e.phone,i=e.email,o=e.dob;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{data:!0,th:"Image",className:"align-middle",children:Object(a.jsx)("img",{src:s.medium,alt:"profile image for "+r.first+" "+r.last,className:"img-responsive"})}),Object(a.jsxs)("td",{data:!0,th:"Name",className:"name-cell align-middle",children:[" ",r.first," ",r.last," "]}),Object(a.jsxs)("td",{data:!0,th:"Phone",className:"align-middle",children:[" ",c," "]}),Object(a.jsxs)("td",{data:!0,th:"Email",className:"align-middle",children:[Object(a.jsxs)("a",{href:"mailto:"+i,target:"__blank",children:[" ",i," "]}),"  "]}),Object(a.jsxs)("td",{data:!0,th:"DOB",className:"align-middle",children:[" ",t(o.date)," "]}),"  "]},n.uuid)})):Object(a.jsx)(a.Fragment,{})," "]})},j=(n(24),function(){var e=Object(r.useContext)(d);return Object(a.jsxs)("div",{className:"datatable mt-5",children:[Object(a.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(a.jsxs)("thead",{children:[Object(a.jsxs)("tr",{children:[" ",e.developerState.headings.map((function(t){var n=t.name,r=t.width;return Object(a.jsxs)("th",{className:"col",style:{width:r},onClick:function(){e.handleSort(n)},children:[n," ",Object(a.jsx)("span",{className:"pointer",children:" "})," "]},n)}))," "]})," "]}),Object(a.jsx)(u,{})]})," "]})}),h=n(3),b=(n(25),function(){var e=Object(r.useContext)(d);return Object(a.jsxs)("div",{className:"searchbox",children:[Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsxs)("div",{className:"input-group-prepend",children:[Object(a.jsx)("span",{className:"input-group-text",id:"",children:"Search "})," "]})," ",Object(a.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"name",aria:!0,label:"Search",onChange:function(t){return e.handleSearchChange(t)}})," "]})," "]})});n(26);var f=function(){var e;return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(a.jsx)("button",(e={className:"navbar-toggler",type:"button",data:!0,toggle:"collapse"},Object(h.a)(e,"data",!0),Object(h.a)(e,"target","#navbarNav"),Object(h.a)(e,"aria",!0),Object(h.a)(e,"controls","navbarNav"),Object(h.a)(e,"aria",!0),Object(h.a)(e,"expanded","false"),Object(h.a)(e,"aria",!0),Object(h.a)(e,"label","Toggle navigation"),Object(h.a)(e,"children",Object(a.jsx)("span",{className:"navbar-toggler-icon"})),e))," ",Object(a.jsxs)("div",{className:"collapse navbar-collapse row",id:"navbarNav",children:[" "," ",Object(a.jsx)("div",{className:"search-area col-4",children:Object(a.jsx)(b,{})})," "]})," "]})},m=n(15),v=n.n(m),g=function(){return v.a.get("https://randomuser.me/api/?results=200&nat=us")},p=(n(44),function(){var e=Object(r.useState)({users:[],order:"descend",filteredUsers:[],headings:[{name:"Image",width:"10%",order:"descend"},{name:"name",width:"10%",order:"descend"},{name:"phone",width:"20%",order:"descend"},{name:"email",width:"20%",order:"descend"},{name:"dob",width:"10%",order:"descend"}]}),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(r.useEffect)((function(){g().then((function(e){console.log(e.data.results),s(Object(o.a)(Object(o.a)({},n),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),Object(a.jsxs)(d.Provider,{value:{developerState:n,handleSearchChange:function(e){var t=e.target.value,a=n.users.filter((function(e){var n=e.name.first.toLowerCase()+" "+e.name.last.toLowerCase();if(console.log(t,n),-1!==n.indexOf(t.toLowerCase()))return e}));s(Object(o.a)(Object(o.a)({},n),{},{filteredUsers:a}))},handleSort:function(e){var t=n.headings.filter((function(t){return t.name===e})).map((function(e){return e.order})).toString();t="descend"===t?"ascend":"descend";var a=n.filteredUsers.sort((function(n,a){return"ascend"===t?void 0===n[e]?1:void 0===a[e]?-1:"name"===e?n[e].first.localeCompare(a[e].first):"dob"===e?n[e].age-a[e].age:n[e].localeCompare(a[e]):void 0===n[e]?1:void 0===a[e]?-1:"name"===e?a[e].first.localeCompare(n[e].first):"dob"===e?a[e].age-n[e].age:a[e].localeCompare(n[e])})),r=n.headings.map((function(n){return n.order=n.name===e?t:n.order,n}));s(Object(o.a)(Object(o.a)({},n),{},{filteredUsers:a,headings:r}))}},children:[Object(a.jsx)(f,{}),Object(a.jsxs)("div",{className:"data-area",children:[" ",n.filteredUsers.length>0?Object(a.jsx)(j,{}):Object(a.jsx)("div",{children:" "})," "]})," "]})});n(45);var O=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(p,{})})};n(46);var x=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"wrapper",children:[" ",t," "]})};n(47);var w=function(){return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h1",{children:" Employee Directory "})," ",Object(a.jsx)("p",{children:" Click on carrots to filter by heading or use the search box to narrow your results. "})," "]})};n(48);var N=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)(x,{children:[Object(a.jsx)(w,{}),Object(a.jsx)(O,{})]})," "]})},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(a.jsx)(N,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/EmployeeDirectory",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/EmployeeDirectory","/service-worker.js");y?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[49,1,2]]]);
//# sourceMappingURL=main.d2443bba.chunk.js.map