(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),r=s(4),i=s.n(r),l=(s(14),s(5)),o=s(6),a=s(2),d=s(9),j=s(8),h=(s(15),s(7)),m=s.n(h),u=s(0),b=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={employees:[],filteredEmployees:[]},n.sortEmployees=n.sortEmployees.bind(Object(a.a)(n)),n.filterEmployees=n.filterEmployees.bind(Object(a.a)(n)),n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=100").then((function(e){return e.json()})).then((function(t){e.setState({employees:t.results,filteredEmployees:t.results})}))}},{key:"filterEmployees",value:function(e){var t=e.target.value,s=this.state.employees.filter((function(e){return(e.name.first+e.name.last).toLowerCase().includes(t.toLowerCase())}));this.setState({filteredEmployees:s})}},{key:"sortEmployees",value:function(){var e=this.state.employees.sort((function(e,t){return e.name.first.toLowerCase().localeCompare(t.name.first.toLowerCase())})),t=this.state.filteredEmployees.sort((function(e,t){return e.name.first.toLowerCase().localeCompare(t.name.first.toLowerCase())}));this.setState({employees:e,filteredEmployees:t})}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"box",children:Object(u.jsxs)("div",{className:"container mt-3 columns",children:[Object(u.jsx)("div",{className:"column"}),Object(u.jsxs)("div",{className:"column is-three-fifths",children:[Object(u.jsx)("h1",{className:"title",children:"Employee Directory"}),Object(u.jsx)("input",{onChange:this.filterEmployees,placeholder:"Search employees by name",className:"input",style:{width:"33%"}}),Object(u.jsxs)("table",{className:"table mt-3",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsxs)("th",{onClick:this.sortEmployees,children:["Name ",Object(u.jsx)("i",{className:"fas fa-caret-down"})]}),Object(u.jsx)("th",{children:"Email"}),Object(u.jsx)("th",{children:"Phone"}),Object(u.jsx)("th",{children:"Gender"}),Object(u.jsx)("th",{children:"City"}),Object(u.jsx)("th",{children:"Country"}),Object(u.jsx)("th",{children:"Birthday"})]})}),Object(u.jsx)("tbody",{children:this.state.filteredEmployees.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.name.first+" "+e.name.last}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:e.phone}),Object(u.jsx)("td",{children:e.gender}),Object(u.jsx)("td",{children:e.location.city}),Object(u.jsx)("td",{children:e.location.country}),Object(u.jsx)("td",{children:m()(e.dob.date).format("MMM Do")})]},e.login.uuid)}))})]})]}),Object(u.jsx)("div",{className:"column"})]})})}}]),s}(c.a.Component),f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),f()}},[[18,1,2]]]);
//# sourceMappingURL=main.ffbd0835.chunk.js.map