(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{208:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),o=a(12),s=a(64),l=a(128),d=a(45),p=a(7),u="CREATE",j="UPDATE",b="DELETE",x="FETCH_STOCK_BY_SEARCH",m="FETCH_POST",h="FETCH_ALL",g="FETCH_BY_SEARCH",f="LIKE",O="COMMENT",y="START_LOADING",v="END_LOADING",w="AUTH",C="LOGOUT",k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case v:return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1});case h:return Object(p.a)(Object(p.a)({},e),{},{posts:t.payload.data,currentPage:t.payload.currentPage,numberOfPages:t.payload.numberOfPages});case m:return Object(p.a)(Object(p.a)({},e),{},{post:t.payload});case g:return Object(p.a)(Object(p.a)({},e),{},{posts:t.payload});case f:case O:return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case u:return Object(p.a)(Object(p.a)({},e),{},{posts:[].concat(Object(d.a)(e.posts),[t.payload])});case j:return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case b:return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==t.payload}))});default:return e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{stocks:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0});case v:return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1});case x:return Object(p.a)(Object(p.a)({},e),{},{stocks:t.payload});default:return e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return localStorage.setItem("profile",JSON.stringify(Object(p.a)({},null===t||void 0===t?void 0:t.data))),Object(p.a)(Object(p.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case C:return localStorage.clear(),Object(p.a)(Object(p.a)({},e),{},{authData:null});default:return e}},I=Object(s.b)({stocks:S,posts:k,auth:N}),D=a(243),L=a(26),T=a(18),B=a(22),A=a(234),R=a(214),P=a(235),E=a(250),F=a(236),_=a(129),H=a(19),M=a(231),U=a(233),W=Object(M.a)((function(e){return{appBar:Object(H.a)({borderRadius:4,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 30px",backgroundColor:"#648caf"},e.breakpoints.down("sm"),{flexDirection:"column"}),heading:{color:"white",textDecoration:"none",fontSize:"2em",fontWeight:800},brandContainer:{display:"flex",alignItems:"center",textDecoration:"none"},image:{marginLeft:"10px",marginTop:"5px"},toolbar:Object(H.a)({display:"flex",justifyContent:"flex-end",width:"400px"},e.breakpoints.down("sm"),{width:"auto"}),profile:Object(H.a)({display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center"},e.breakpoints.down("sm"),{width:"auto",marginTop:20,justifyContent:"center"}),logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},purple:{color:e.palette.getContrastText(U.a[500]),backgroundColor:U.a[500]}}})),J=a(2),G=function(){var e=W(),t=Object(o.b)(),a=Object(T.g)(),r=Object(T.h)(),c=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),i=Object(B.a)(c,2),s=i[0],l=i[1];return Object(n.useEffect)((function(e,t){var a=null===t||void 0===t?void 0:t.token;a&&(1e3*Object(_.a)(a).exp<(new Date).getTime()&&e());l(JSON.parse(localStorage.getItem("profile")))}),[r]),Object(J.jsxs)(A.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(J.jsx)(L.b,{to:"/",className:e.brandContainer,children:Object(J.jsx)(R.a,{component:L.b,to:"/",className:e.heading,variant:"h2",align:"center",children:"Dividend Stock Screener"})}),Object(J.jsx)(P.a,{className:e.toolbar,children:s?Object(J.jsxs)("div",{className:e.profile,children:[Object(J.jsx)(E.a,{className:e.purple,alt:s.result.name,src:s.result.imageUrl,children:s.result.name.charAt(0)}),Object(J.jsx)(R.a,{className:e.userName,variant:"h6",children:s.result.name}),Object(J.jsx)(F.a,{variant:"contained",className:e.logout,onClick:function(){return t({type:C}),l(null),a.push("/auth")},children:"Logout"})]}):Object(J.jsx)(F.a,{component:L.b,to:"/auth",variant:"contained",color:"primary",children:"Log In"})})]})},Y=a(249),q=a(242),Q=a(10),z=a.n(Q),K=a(17),V=a(83),$=a.n(V),Z=$.a.create({baseURL:"https://dividend-screener.herokuapp.com"});Z.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var X=function(e){return Z.get("/posts/".concat(e))},ee=function(e){return Z.get("/posts/search?searchQuery=".concat(e.search||"none","&tags=").concat(e.tags))},te=function(e,t){return Z.post("/posts/".concat(t,"/commentPost"),{value:e})},ae=function(e){return Z.post("/user/signin",e)},ne=function(e){return Z.post("/user/signup",e)},re=function(e){return function(){var t=Object(K.a)(z.a.mark((function t(a){var n,r;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:y}),t.next=4,ee(e);case 4:n=t.sent,r=n.data.data,a({type:g,payload:r}),a({type:v}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},ce=function(e,t){return function(){var a=Object(K.a)(z.a.mark((function a(n){var r,c;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,te(e,t);case 3:return r=a.sent,c=r.data,n({type:O,payload:c}),a.abrupt("return",c.comments);case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0.message);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},ie=(a(97),a(241)),oe=a(237),se=(a(146),a(238),a(239)),le=(a(240),a(135),a(137),a(136),a(100),a(85)),de=a.n(le),pe=(Object(M.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},cardAction:{display:"block",textAlign:"initial"}}),Object(M.a)((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(U.a[500]),backgroundColor:U.a[500]}},Object(H.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object(H.a)(t,"actionDiv",{textAlign:"center"}),t})),a(144)),ue=a(247),je=(a(138),Object(M.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),a(251),a(248),Object(M.a)((function(){return{ul:{justifyContent:"space-around"}}})),Object(M.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%",width:"100%",display:"flex",flexDirection:"column",margin:"1rem 0"},halfCentered:{width:"50%",display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",position:"relative",marginBottom:"30px"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",position:"relative",marginBottom:"30px"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},cardAction:{display:"block",textAlign:"initial"},appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"}})),be=function(e){var t=e.stockInfo,a=je();return Object(J.jsx)(Y.a,{in:!0,children:Object(J.jsx)(oe.a,{className:a.fullHeightCard,children:Object(J.jsxs)(se.a,{children:[Object(J.jsxs)(R.a,{variant:"h4",style:{color:"black"},children:["Your Results for ",t.symbol,":"]}),null===t.trailingAnnualDividendRate||0===t.trailingAnnualDividendRate?Object(J.jsx)(R.a,{children:"This stock doesn't pay a dividend."}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(R.a,{style:{color:"black"},children:["Company Name: ",t.shortName]}),Object(J.jsxs)(R.a,{style:{color:"black"},children:["Market Cap: $",t.marketCap.toLocaleString()]}),Object(J.jsxs)(R.a,{style:{color:"black"},children:["Current price: $",t.regularMarketPrice]}),Object(J.jsxs)(R.a,{style:{color:"black"},children:["Most Recent Dividend Date: ",t.dividendDate.date]}),Object(J.jsxs)(R.a,{style:{color:"black"},children:["Trailing Annual Dividend Rate: ",t.trailingAnnualDividendRate,"%"]}),Object(J.jsxs)(R.a,{style:{color:"black"},children:["Trailing Annual Dividend Yield: ",(100*t.trailingAnnualDividendYield).toFixed(2),"%"]}),Object(J.jsxs)(R.a,{style:{color:"black"},children:["Trailing P/E Ratio: ",t.trailingPE.toFixed(2)]})]})]})})})};a(204);var xe=function(){var e=je(),t=Object(o.b)(),a=Object(T.g)(),r=(new URLSearchParams(Object(T.h)().search).get("searchQuery"),Object(n.useState)("")),c=Object(B.a)(r,2),i=c[0],s=c[1],l=function(){i.trim()?(i.toUpperCase(),t(function(e){return function(){var t=Object(K.a)(z.a.mark((function t(a){var n;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:y}),n={method:"GET",url:"https://mboum-finance.p.rapidapi.com/qu/quote",params:{symbol:e.search},headers:{"x-rapidapi-host":"mboum-finance.p.rapidapi.com","x-rapidapi-key":"cbe0339db0msh2daae506a51a3a4p1940e3jsn1ebae4488c25"}},t.next=4,$.a.request(n).then((function(e){var t=e.data[0];a({type:x,payload:t})})).catch((function(e){console.error(e)}));case 4:a({type:v});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}({search:i})),a.push("/stock/search?searchQuery=".concat(i||"none"))):a.push("/stock/search")};return Object(J.jsx)(Y.a,{in:!0,children:Object(J.jsxs)(A.a,{className:e.appBarSearch,position:"static",color:"inherit",children:[Object(J.jsx)(ue.a,{name:"search",value:i,style:{margin:"15px 0"},label:"Search stock tickers",variant:"outlined",onKeyDown:function(e){13===e.keyCode&&l()},onChange:function(e){return s(e.target.value.toLocaleUpperCase())}}),Object(J.jsx)(F.a,{className:e.searchButton,onClick:l,variant:"contained",color:"primary",children:"Search"})]})})},me=Object(M.a)((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(U.a[500]),backgroundColor:U.a[500]}},Object(H.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object(H.a)(t,"actionDiv",{textAlign:"center"}),t})),he=function(){var e=Object(o.c)((function(e){return e.stocks})),t=e.stocks,a=e.isLoading,n=me();return console.log(a),Object(J.jsx)(D.a,{maxWidth:"xl",children:Object(J.jsx)(q.a,{className:n.container,container:!0,alignItems:"stretch",children:a?Object(J.jsx)(ie.a,{}):0===t.length?Object(J.jsx)(xe,{}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(be,{stockInfo:t}),Object(J.jsx)(xe,{})]})})})},ge=Object(M.a)((function(e){return{appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:4,marginTop:"1rem",padding:"16px"},gridContainer:Object(H.a)({},e.breakpoints.down("xs"),{flexDirection:"column-reverse"})}}));var fe=function(){var e=ge(),t=new URLSearchParams(Object(T.h)().search),a=(t.get("page"),t.get("searchQuery"),Object(n.useState)(0)),r=Object(B.a)(a,2),c=(r[0],r[1],Object(o.b)(),Object(n.useState)("")),i=Object(B.a)(c,2),s=(i[0],i[1],Object(n.useState)([])),l=Object(B.a)(s,2);l[0],l[1],Object(o.c)((function(e){return e.stocks})).stocks,Object(T.g)();return Object(J.jsx)(Y.a,{in:!0,children:Object(J.jsxs)(D.a,{maxWidth:"xl",children:[Object(J.jsx)(he,{}),Object(J.jsx)(q.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,className:e.gridContainer,children:Object(J.jsx)(q.a,{item:!0,xs:12,sm:6,md:9})})]})})},Oe=a(139),ye=a(142),ve=a.n(ye),we=Object(M.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Ce=a(244),ke=a(245),Se=a(140),Ne=a.n(Se),Ie=a(141),De=a.n(Ie),Le=function(e){var t=e.name,a=e.label,n=e.handleChange,r=e.half,c=e.autoFocus,i=e.type,o=e.handleShowPassword;return Object(J.jsx)(q.a,{item:!0,xs:12,sm:r?6:12,children:Object(J.jsx)(ue.a,{name:t,onChange:n,variant:"outlined",required:!0,fullWidth:!0,label:a,autoFocus:c,type:i,InputProps:"password"===t?{endAdornment:Object(J.jsx)(Ce.a,{position:"end",children:Object(J.jsx)(ke.a,{onClick:o,children:"password"===i?Object(J.jsx)(Ne.a,{}):Object(J.jsx)(De.a,{})})})}:null})})},Te=function(){return Object(J.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(J.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},Be={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Ae=function(){var e=Object(n.useState)(!1),t=Object(B.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),i=Object(B.a)(c,2),s=i[0],l=i[1],d=Object(n.useState)(Be),u=Object(B.a)(d,2),j=u[0],b=u[1],x=we(),m=Object(T.g)(),h=Object(o.b)(),g=function(e){b(Object(p.a)(Object(p.a)({},j),{},Object(H.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(K.a)(z.a.mark((function e(t){var a,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=null===t||void 0===t?void 0:t.profileObj,n=null===t||void 0===t?void 0:t.tokenId;try{h({type:w,data:{result:a,token:n}}),m.push("/")}catch(r){console.log(r)}console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(J.jsx)(D.a,{component:"main",maxWidth:"xs",children:Object(J.jsxs)(pe.a,{className:x.paper,elevation:3,children:[Object(J.jsx)(E.a,{className:x.avatar,children:Object(J.jsx)(ve.a,{})}),Object(J.jsx)(R.a,{variant:"h5",children:s?"Sign Up":"Sign In"}),Object(J.jsxs)("form",{className:x.form,onSubmit:function(e){e.preventDefault(),h(s?function(e,t){return function(){var a=Object(K.a)(z.a.mark((function a(n){var r,c;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ne(e);case 3:r=a.sent,c=r.data,n({type:w,data:c}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0.message);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(j,m):function(e,t){return function(){var a=Object(K.a)(z.a.mark((function a(n){var r,c;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ae(e);case 3:r=a.sent,c=r.data,n({type:w,data:c}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0.message);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(j,m))},children:[Object(J.jsxs)(q.a,{container:!0,spacing:2,children:[s&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(Le,{name:"firstName",label:"First Name",handleChange:g,autoFocus:!0,half:!0}),Object(J.jsx)(Le,{name:"lastName",label:"Last Name",handleChange:g,half:!0})]}),Object(J.jsx)(Le,{name:"email",label:"Email Address",type:"email",handleChange:g}),Object(J.jsx)(Le,{name:"password",label:"Password",type:a?"text":"password",handleShowPassword:function(){return r((function(e){return!e}))},handleChange:g}),s&&Object(J.jsx)(Le,{name:"confirmPassword",label:"Repeat Password",type:"password",handleChange:g})]}),Object(J.jsx)(F.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:x.submit,children:s?"Sign Up":"Sign In"}),Object(J.jsx)(Oe.GoogleLogin,{clientId:"941971253122-02s9drkrmvukt8fha77buslca1u4g40u.apps.googleusercontent.com",render:function(e){return Object(J.jsx)(F.a,{className:x.googleButton,color:"primary",fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:Object(J.jsx)(Te,{}),variant:"contained",children:"Google Sign In"})},onSuccess:f,onFailure:function(e){console.log(e),console.log("Google Sign In was unsuccessful. Try Again Later.")},cookiePolicy:"single_host_origin"}),Object(J.jsx)(q.a,{container:!0,justify:"flex-end",children:Object(J.jsx)(F.a,{onClick:function(){l((function(e){return!e})),r(!1)},children:s?"Already have an account? Sign In":"Don't have an account? Sign Up"})})]})]})})},Re=a(246),Pe=Object(M.a)((function(e){return{media:{borderRadius:"20px",objectFit:"cover",width:"100%",maxHeight:"600px"},card:Object(H.a)({display:"flex",width:"100%"},e.breakpoints.down("sm"),{flexWrap:"wrap",flexDirection:"column"}),section:{borderRadius:"20px",margin:"10px",flex:1},imageSection:Object(H.a)({marginLeft:"20px"},e.breakpoints.down("sm"),{marginLeft:0}),recommendedPosts:Object(H.a)({display:"flex"},e.breakpoints.down("sm"),{flexDirection:"column"}),loadingPaper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",borderRadius:"15px",height:"39vh"},commentsOuterContainer:{display:"flex",justifyContent:"space-between"},commentsInnerContainer:{height:"200px",width:"200px",overflowY:"auto",marginRight:"30px"}}})),Ee=function(e){var t,a=e.post,r=Pe(),c=Object(o.b)(),i=JSON.parse(localStorage.getItem("profile")),s=Object(n.useState)(null===a||void 0===a?void 0:a.comments),l=Object(B.a)(s,2),d=l[0],p=l[1],u=Object(n.useState)(""),j=Object(B.a)(u,2),b=j[0],x=j[1],m=Object(n.useRef)(),h=function(){var e=Object(K.a)(z.a.mark((function e(){var t,n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i.result.name,": ").concat(b),e.next=3,c(ce(t,a._id));case 3:n=e.sent,p(n),x(""),m.current.scrollIntoView({behavior:"smooth"});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(J.jsx)("div",{children:Object(J.jsxs)("div",{className:r.commentsOuterContainer,children:[Object(J.jsxs)("div",{className:r.commentsInnerContainer,children:[Object(J.jsx)(R.a,{gutterBottom:!0,variant:"h6",children:"Comments"}),d.map((function(e,t){return Object(J.jsxs)(R.a,{gutterBottom:!0,variant:"subtitle1",children:[Object(J.jsx)("strong",{children:e.split(": ")[0]}),e.split(":")[1]]},t)})),Object(J.jsx)("div",{ref:m})]}),(null===i||void 0===i||null===(t=i.result)||void 0===t?void 0:t.name)&&Object(J.jsxs)("div",{style:{width:"70%"},children:[Object(J.jsx)(R.a,{gutterBottom:!0,variant:"subtitle1",children:"Leave a comment"}),Object(J.jsx)(ue.a,{fullWidth:!0,rows:4,variant:"outlined",label:"Comment",multiline:!0,value:b,onChange:function(e){return x(e.target.value)}}),Object(J.jsx)(F.a,{style:{marginTop:"10px"},fullWidth:!0,disabled:!b,variant:"contained",color:"primary",onClick:h,children:"Comment"})]})]})})},Fe=function(){var e=Object(o.c)((function(e){return e.posts})),t=e.post,a=e.posts,r=e.isLoading,c=Object(o.b)(),i=Object(T.g)(),s=Pe(),l=Object(T.i)().id;if(Object(n.useEffect)((function(){c(function(e){return function(){var t=Object(K.a)(z.a.mark((function t(a){var n,r;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:y}),t.next=4,X(e);case 4:n=t.sent,r=n.data,a({type:m,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(l))}),[c,l]),Object(n.useEffect)((function(){t&&c(re({search:"none",tags:t.tags.join(",")}))}),[c,t]),!t)return null;if(r)return Object(J.jsx)(pe.a,{elevation:6,className:s.loadingPaper,children:Object(J.jsx)(ie.a,{size:"7em"})});var d=a.filter((function(e){return e._id!==t._id}));return Object(J.jsxs)(pe.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6,children:[Object(J.jsxs)("div",{className:s.card,children:[Object(J.jsxs)("div",{className:s.section,children:[Object(J.jsx)(R.a,{variant:"h3",component:"h2",children:t.title}),Object(J.jsx)(R.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2",children:t.tags.map((function(e){return"#".concat(e," ")}))}),Object(J.jsx)(R.a,{gutterBottom:!0,variant:"body1",component:"p",children:t.message}),Object(J.jsxs)(R.a,{variant:"h6",children:["Created by: ",t.name]}),Object(J.jsx)(R.a,{variant:"body1",children:de()(t.createdAt).fromNow()}),Object(J.jsx)(Re.a,{style:{margin:"20px 0"}}),Object(J.jsx)(R.a,{variant:"body1",children:Object(J.jsx)("strong",{children:"Charts - coming soon!"})}),Object(J.jsx)(Re.a,{style:{margin:"20px 0"}}),Object(J.jsx)(R.a,{variant:"body1",children:Object(J.jsx)("strong",{children:"Financials - coming soon!"})}),Object(J.jsx)(Re.a,{style:{margin:"20px 0"}}),Object(J.jsx)(Ee,{post:t}),Object(J.jsx)(Re.a,{style:{margin:"20px 0"}})]}),Object(J.jsx)("div",{className:s.imageSection,children:Object(J.jsx)("img",{className:s.media,src:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",alt:t.title})})]}),!!d.length&&Object(J.jsxs)("div",{className:s.section,children:[Object(J.jsx)(R.a,{gutterBottom:!0,variant:"h5",children:"You might also like:"}),Object(J.jsx)(Re.a,{}),Object(J.jsx)("div",{className:s.recommendedPosts,children:d.map((function(e){var a=e.title,n=e.name,r=e.message,c=e.likes,o=e.selectedFile,s=e._id;return Object(J.jsxs)("div",{style:{margin:"20px",cursor:"pointer"},onClick:function(){return function(e){return i.push("/posts/".concat(e))}(s)},children:[Object(J.jsx)(R.a,{gutterBottom:!0,variant:"h6",children:a}),Object(J.jsx)(R.a,{gutterBottom:!0,variant:"subtitle2",children:n}),Object(J.jsx)(R.a,{gutterBottom:!0,variant:"subtitle2",children:r}),Object(J.jsxs)(R.a,{gutterBottom:!0,variant:"subtitle1",children:["Likes: ",c.length]}),Object(J.jsx)("img",{src:o,alt:t.title,width:"200px"})]},s)}))})]})]})},_e=function(){var e=JSON.parse(localStorage.getItem("profile"));return Object(J.jsx)(L.a,{children:Object(J.jsxs)(D.a,{maxWidth:"xl",children:[Object(J.jsx)(G,{}),Object(J.jsxs)(T.d,{children:[Object(J.jsx)(T.b,{path:"/",exact:!0,component:fe}),Object(J.jsx)(T.b,{path:"/posts",exact:!0,component:fe}),Object(J.jsx)(T.b,{path:"/posts/search",exact:!0,component:fe}),Object(J.jsx)(T.b,{path:"/posts/:id",exact:!0,component:Fe}),Object(J.jsx)(T.b,{path:"/auth",exact:!0,component:function(){return e?Object(J.jsx)(T.a,{to:"/posts"}):Object(J.jsx)(Ae,{})}}),Object(J.jsx)(T.b,{path:"/stock/search",exact:!0,component:he})]})]})})},He=(a(208),Object(s.d)(I,Object(s.c)(Object(s.a)(l.a))));i.a.render(Object(J.jsx)(o.a,{store:He,children:Object(J.jsx)(r.a.StrictMode,{children:Object(J.jsx)(_e,{})})}),document.getElementById("root"))}},[[209,1,2]]]);
//# sourceMappingURL=main.0da7550b.chunk.js.map