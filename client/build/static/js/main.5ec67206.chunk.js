(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){e.exports=n(68)},68:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return k})),n.d(a,"handleToken",(function(){return g}));n(40);var r=n(0),c=n.n(r),u=n(17),o=n.n(u),l=n(8),s=n(10),i=n(37),p=n(11),h=n(12),f=n(14),m=n(13),d=n(19),b=n(2),v=n(16),y=n.n(v),E=n(22),O=n(23),j=n.n(O),k=function(){return function(){var e=Object(E.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/current_user");case 2:n=e.sent,t({type:"fetch_user",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(E.a)(y.a.mark((function t(n){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("/api/stripe",e);case 2:a=t.sent,n({type:"fetch_user",payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=n(38),x=n.n(w),C=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement(x.a,{name:"React App",description:"5 credits for 5 dollars",amount:500,token:function(t){return e.props.handleToken(t)},stripeKey:"pk_test_51HIS1QA0ttJExnMqH2GkC0GpLJTGpeXb6bjy76uZVOXOTmnWe7OIkiadzOMWBWFHMBz4IXR0J8B8iGekDgoJfRFE00IGY0BULc"},c.a.createElement("button",{className:"btn"},"Add Credits"))}}]),n}(r.Component),A=Object(l.b)(null,a)(C),G=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"renderContent",value:function(){switch(this.props.auth){case null:return;case!1:return c.a.createElement("li",null,c.a.createElement("a",{href:"/auth/google"}," Log in with Google "));default:return[c.a.createElement("li",{key:"1"},c.a.createElement(A,null)),c.a.createElement("li",{key:"3",style:{margin:"0 10px"}},"Credits: ",this.props.auth.credits),c.a.createElement("li",{key:"2"},c.a.createElement("a",{href:"/api/logout"}," Log Out "))]}}},{key:"render",value:function(){return console.log(this.props),c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(d.b,{to:this.props.auth?"/surveys":"/",className:"left brand-logo"},"React App"),c.a.createElement("ul",{className:"right"},this.renderContent())))}}]),n}(r.Component);var J=Object(l.b)((function(e){return{auth:e.auth}}))(G),N=function(){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h1",null,"React App"),"Collect feedback from your users")},_=function(){return c.a.createElement("h2",null,"Dashboard")},R=function(){return c.a.createElement("h2",null,"SurveyNew")},B=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(d.a,null,c.a.createElement("div",null,c.a.createElement(J,null),c.a.createElement(b.a,{exact:!0,path:"/",component:N}),c.a.createElement(b.a,{exact:!0,path:"/surveys",component:_}),c.a.createElement(b.a,{path:"/surveys/new",component:R}))))}}]),n}(r.Component),I=Object(l.b)(null,a)(B),L=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"fetch_user":return t.payload||!1;default:return e}}}),M=Object(s.d)(L,{},Object(s.a)(i.a));o.a.render(c.a.createElement(l.a,{store:M},c.a.createElement(I,null)),document.querySelector("#root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.5ec67206.chunk.js.map