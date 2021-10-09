(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{204:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),s=n(17),o=n(64),l=n(125),u=n(62),d=n(7),p="CREATE",j="UPDATE",b="DELETE",m="FETCH_POST",g="FETCH_ALL",h="FETCH_BY_SEARCH",f="LIKE",x="START_LOADING",O="END_LOADING",v="AUTH",y="LOGOUT",w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0});case O:return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1});case g:return Object(d.a)(Object(d.a)({},e),{},{posts:t.payload.data,currentPage:t.payload.currentPage,numberOfPages:t.payload.numberOfPages});case m:return Object(d.a)(Object(d.a)({},e),{},{post:t.payload});case h:return Object(d.a)(Object(d.a)({},e),{},{posts:t.payload});case f:return Object(d.a)(Object(d.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case p:return Object(d.a)(Object(d.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[t.payload])});case j:return Object(d.a)(Object(d.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case b:return Object(d.a)(Object(d.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==t.payload}))});default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return localStorage.setItem("profile",JSON.stringify(Object(d.a)({},null===t||void 0===t?void 0:t.data))),Object(d.a)(Object(d.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case y:return localStorage.clear(),Object(d.a)(Object(d.a)({},e),{},{authData:null});default:return e}},C=Object(o.b)({posts:w,auth:k}),S=n(239),N=n(27),I=n(16),L=n(32),D=n(230),P=n(210),T=n(231),_=n(246),A=n(232),B=n(126),F=n(22),E=n(227),R=n(229),W=Object(E.a)((function(e){return{appBar:Object(F.a)({borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},e.breakpoints.down("sm"),{flexDirection:"column"}),heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300},image:{marginLeft:"10px",marginTop:"5px"},toolbar:Object(F.a)({display:"flex",justifyContent:"flex-end",width:"400px"},e.breakpoints.down("sm"),{width:"auto"}),profile:Object(F.a)({display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center"},e.breakpoints.down("sm"),{width:"auto",marginTop:20,justifyContent:"center"}),logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(R.a[500]),backgroundColor:R.a[500]}}})),z=n(2),J=function(){var e=W(),t=Object(s.b)(),n=Object(I.g)(),r=Object(I.h)(),c=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),i=Object(L.a)(c,2),o=i[0],l=i[1];return Object(a.useEffect)((function(e,t){var n=null===t||void 0===t?void 0:t.token;n&&(1e3*Object(B.a)(n).exp<(new Date).getTime()&&e());l(JSON.parse(localStorage.getItem("profile")))}),[r]),Object(z.jsxs)(D.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(z.jsx)(N.b,{to:"/",className:e.brandContainer,children:Object(z.jsx)(P.a,{component:N.b,to:"/",className:e.heading,variant:"h2",align:"center",children:"Dividend Stock Screener"})}),Object(z.jsx)(T.a,{className:e.toolbar,children:o?Object(z.jsxs)("div",{className:e.profile,children:[Object(z.jsx)(_.a,{className:e.purple,alt:o.result.name,src:o.result.imageUrl,children:o.result.name.charAt(0)}),Object(z.jsx)(P.a,{className:e.userName,variant:"h6",children:o.result.name}),Object(z.jsx)(A.a,{variant:"contained",className:e.logout,onClick:function(){return t({type:y}),l(null),n.push("/auth")},children:"Logout"})]}):Object(z.jsx)(A.a,{component:N.b,to:"/auth",variant:"contained",color:"primary",children:"Log In"})})]})},H=n(245),U=n(238),M=n(243),G=n(142),Q=n(13),V=n.n(Q),Y=n(24),q=n(132),K=n.n(q).a.create({baseURL:"https://dividend-screener.herokuapp.com"});K.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var Z=function(e){return K.get("/posts/".concat(e))},X=function(e){return K.get("/posts?page=".concat(e))},$=function(e){return K.get("/posts/search?searchQuery=".concat(e.search||"none","&tags=").concat(e.tags))},ee=function(e){return K.patch("/posts/".concat(e,"/likePost"))},te=function(e,t){return K.patch("/posts/".concat(e),t)},ne=function(e){return K.delete("/posts/".concat(e))},ae=function(e){return K.post("/user/signin",e)},re=function(e){return K.post("/user/signup",e)},ce=function(e){return function(){var t=Object(Y.a)(V.a.mark((function t(n){var a,r;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:x}),t.next=4,$(e);case 4:a=t.sent,r=a.data.data,n({type:h,payload:r}),n({type:O}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},ie=function(e,t){return function(){var n=Object(Y.a)(V.a.mark((function n(a){var r,c;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:x}),n.next=4,i=e,K.post("/posts",i);case 4:r=n.sent,c=r.data,a({type:p,payload:c}),t.push("/posts/".concat(c._id)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}var i}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},se=function(e,t){return function(){var n=Object(Y.a)(V.a.mark((function n(a){var r,c;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,te(e,t);case 3:r=n.sent,c=r.data,a({type:j,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},oe=n(83),le=n.n(oe),ue=n(237),de=n(233),pe=n(144),je=n(234),be=n(235),me=n(236),ge=n(133),he=n.n(ge),fe=n(135),xe=n.n(fe),Oe=n(134),ve=n.n(Oe),ye=n(98),we=n.n(ye),ke=n(85),Ce=n.n(ke),Se=Object(E.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},cardAction:{display:"block",textAlign:"initial"}}),Ne=function(e){var t,n,a,r,c=e.post,i=e.setCurrentId,o=Object(s.b)(),l=Se(),u=JSON.parse(localStorage.getItem("profile")),d=Object(I.g)(),p=function(){var e;return(null===c||void 0===c||null===(e=c.likes)||void 0===e?void 0:e.length)>0?c.likes.find((function(e){var t,n;return e===((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id))}))?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(he.a,{fontSize:"small"}),"\xa0",c.likes.length>2?"You and ".concat(c.likes.length-1," others"):"".concat(c.likes.length," like").concat(c.likes.length>1?"s":"")]}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(we.a,{fontSize:"small"}),"\xa0",c.likes.length," ",1===c.likes.length?"Like":"Likes"]}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(we.a,{fontSize:"small"}),"\xa0Like"]})};return Object(z.jsxs)(de.a,{className:l.card,raised:!0,elevation:6,children:[Object(z.jsxs)(pe.a,{component:"span",name:"test",className:l.cardAction,onClick:function(e){e.stopPropagation(),d.push("/posts/".concat(c._id))},children:[Object(z.jsx)(je.a,{className:l.media,image:c.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:c.title}),Object(z.jsxs)("div",{className:l.overlay,children:[Object(z.jsx)(P.a,{variant:"h6",children:c.name}),Object(z.jsx)(P.a,{variant:"body2",children:Ce()(c.createdAt).fromNow()})]}),((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id)===(null===c||void 0===c?void 0:c.creator))&&Object(z.jsx)("div",{className:l.overlay2,name:"edit",children:Object(z.jsx)(A.a,{style:{color:"white"},size:"small",onClick:function(e){e.stopPropagation(),i(c._id)},children:Object(z.jsx)(ve.a,{fontSize:"medium"})})}),Object(z.jsx)("div",{className:l.details,children:Object(z.jsx)(P.a,{variant:"body2",color:"textSecondary",component:"h2",children:c.tags.map((function(e){return"#".concat(e," ")}))})}),Object(z.jsx)(P.a,{className:l.title,gutterBottom:!0,variant:"h5",component:"h2",children:c.title}),Object(z.jsx)(be.a,{children:Object(z.jsxs)(P.a,{variant:"body2",color:"textSecondary",component:"p",children:[c.message.split(" ").splice(0,20).join(" "),"..."]})})]}),Object(z.jsxs)(me.a,{className:l.cardActions,children:[Object(z.jsx)(A.a,{size:"small",color:"primary",disabled:!(null===u||void 0===u?void 0:u.result),onClick:function(){return o((e=c._id,function(){var t=Object(Y.a)(V.a.mark((function t(n){var a,r,c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,ee(e,null===a||void 0===a||a.token);case 4:r=t.sent,c=r.data,n({type:f,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(z.jsx)(p,{})}),((null===u||void 0===u||null===(a=u.result)||void 0===a?void 0:a.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(r=u.result)||void 0===r?void 0:r._id)===(null===c||void 0===c?void 0:c.creator))&&Object(z.jsxs)(A.a,{size:"small",color:"secondary",onClick:function(){return o((e=c._id,function(){var t=Object(Y.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ne(e);case 3:n({type:b,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(z.jsx)(xe.a,{fontSize:"small"})," \xa0 Delete"]})]})]})},Ie=Object(E.a)((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(R.a[500]),backgroundColor:R.a[500]}},Object(F.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object(F.a)(t,"actionDiv",{textAlign:"center"}),t})),Le=function(e){var t=e.setCurrentId,n=Object(s.c)((function(e){return e.posts})),a=n.posts,r=n.isLoading,c=Ie();return a.length||r?r?Object(z.jsx)(ue.a,{}):Object(z.jsx)(U.a,{className:c.container,container:!0,alignItems:"stretch",spacing:3,children:null===a||void 0===a?void 0:a.map((function(e){return Object(z.jsxs)(U.a,{item:!0,xs:12,sm:12,md:6,lg:3,children:[Object(z.jsx)(Ne,{post:e,setCurrentId:t})," "]},e.id)}))}):"No such stock found"},De=n(136),Pe=n.n(De),Te=Object(E.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),_e=function(e){var t,n=e.currentId,r=e.setCurrentId,c=Object(a.useState)({title:"",message:"",tags:[],selectedFile:""}),i=Object(L.a)(c,2),o=i[0],l=i[1],p=Object(s.c)((function(e){return n?e.posts.posts.find((function(e){return e._id===n})):null})),j=Object(s.b)(),b=Te(),m=Object(I.g)(),g=JSON.parse(localStorage.getItem("profile")),h=function(){r(0),l({title:"",message:"",tags:[],selectedFile:""})};Object(a.useEffect)((function(){(null===p||void 0===p?void 0:p.title)||h(),p&&l(p)}),[j,p]);var f=function(){var e=Object(Y.a)(V.a.mark((function e(t){var a,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===n?(j(ie(Object(d.a)(Object(d.a)({},o),{},{name:null===g||void 0===g||null===(a=g.result)||void 0===a?void 0:a.name}),m)),h()):(j(se(n,Object(d.a)(Object(d.a)({},o),{},{name:null===g||void 0===g||null===(r=g.result)||void 0===r?void 0:r.name}))),h());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(!(null===g||void 0===g||null===(t=g.result)||void 0===t?void 0:t.name))return Object(z.jsx)(G.a,{className:b.paper,elevation:6,children:Object(z.jsx)(P.a,{variant:"h6",align:"center",children:"Please sign in to build your own dividend screener."})});return Object(z.jsx)(G.a,{className:b.paper,elevation:6,children:Object(z.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(b.root," ").concat(b.form),onSubmit:f,children:[Object(z.jsxs)(P.a,{variant:"h6",children:[n?"Editing":"Creating"," a Stock"]}),Object(z.jsx)(M.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:o.title,onChange:function(e){return l(Object(d.a)(Object(d.a)({},o),{},{title:e.target.value}))}}),Object(z.jsx)(M.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:o.message,onChange:function(e){return l(Object(d.a)(Object(d.a)({},o),{},{message:e.target.value}))}}),Object(z.jsx)("div",{style:{padding:"5px 0",width:"94%"},children:Object(z.jsx)(le.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:o.tags,onAdd:function(e){return function(e){l(Object(d.a)(Object(d.a)({},o),{},{tags:[].concat(Object(u.a)(o.tags),[e])}))}(e)},onDelete:function(e){return t=e,void l(Object(d.a)(Object(d.a)({},o),{},{tags:o.tags.filter((function(e){return e!==t}))}));var t}})}),Object(z.jsx)("div",{className:b.fileInput,children:Object(z.jsx)(Pe.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(d.a)(Object(d.a)({},o),{},{selectedFile:t}))}})}),Object(z.jsx)(A.a,{className:b.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(z.jsx)(A.a,{variant:"contained",color:"secondary",size:"small",onClick:h,fullWidth:!0,children:"Clear"})]})})},Ae=n(247),Be=n(244),Fe=Object(E.a)((function(){return{ul:{justifyContent:"space-around"}}})),Ee=function(e){var t=e.page,n=Object(s.c)((function(e){return e.posts})).numberOfPages,r=Object(s.b)(),c=Fe();return Object(a.useEffect)((function(){t&&r(function(e){return function(){var t=Object(Y.a)(V.a.mark((function t(n){var a,r,c,i,s;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:x}),t.next=4,X(e);case 4:a=t.sent,r=a.data,c=r.data,i=r.currentPage,s=r.numberOfPages,n({type:g,payload:{data:c,currentPage:i,numberOfPages:s}}),n({type:O}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[r,t]),Object(z.jsx)(Ae.a,{classes:{ul:c.ul},count:n,page:Number(t)||1,variant:"outlined",color:"primary",renderItem:function(e){return Object(z.jsx)(Be.a,Object(d.a)(Object(d.a)({},e),{},{component:N.b,to:"/posts?page=".concat(e.page)}))}})},Re=Object(E.a)((function(e){return{appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:4,marginTop:"1rem",padding:"16px"},gridContainer:Object(F.a)({},e.breakpoints.down("xs"),{flexDirection:"column-reverse"})}}));var We=function(){var e=Re(),t=new URLSearchParams(Object(I.h)().search),n=t.get("page")||1,r=t.get("searchQuery"),c=Object(a.useState)(0),i=Object(L.a)(c,2),o=i[0],l=i[1],d=Object(s.b)(),p=Object(a.useState)(""),j=Object(L.a)(p,2),b=j[0],m=j[1],g=Object(a.useState)([]),h=Object(L.a)(g,2),f=h[0],x=h[1],O=Object(I.g)(),v=function(){b.trim()||f?(d(ce({search:b,tags:f.join(",")})),O.push("/posts/search?searchQuery=".concat(b||"none","&tags=").concat(f.join(",")))):O.push("/")};return Object(z.jsx)(H.a,{in:!0,children:Object(z.jsx)(S.a,{maxWidth:"xl",children:Object(z.jsxs)(U.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,className:e.gridContainer,children:[Object(z.jsx)(U.a,{item:!0,xs:12,sm:6,md:9,children:Object(z.jsx)(Le,{setCurrentId:l})}),Object(z.jsxs)(U.a,{item:!0,xs:12,sm:6,md:3,children:[Object(z.jsxs)(D.a,{className:e.appBarSearch,position:"static",color:"inherit",children:[Object(z.jsx)(M.a,{name:"search",variant:"outlined",label:"Search for a stock",onKeyDown:function(e){13===e.keyCode&&v()},fullWidth:!0,value:b,onChange:function(e){return m(e.target.value)}}),Object(z.jsx)(le.a,{style:{margin:"15px 0"},value:f,onAdd:function(e){return x([].concat(Object(u.a)(f),[e]))},onDelete:function(e){return x(f.filter((function(t){return t!==e})))},label:"Search stock tickers",variant:"outlined"}),Object(z.jsx)(A.a,{onClick:v,className:e.searchButton,variant:"contained",color:"primary",children:"Search"})]}),Object(z.jsx)(_e,{currentId:o,setCurrentId:l}),!r&&!f.length&&Object(z.jsx)(G.a,{className:e.pagination,elevation:6,children:Object(z.jsx)(Ee,{page:n})})]})]})})})},ze=n(137),Je=n(140),He=n.n(Je),Ue=Object(E.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Me=n(240),Ge=n(241),Qe=n(138),Ve=n.n(Qe),Ye=n(139),qe=n.n(Ye),Ke=function(e){var t=e.name,n=e.label,a=e.handleChange,r=e.half,c=e.autoFocus,i=e.type,s=e.handleShowPassword;return Object(z.jsx)(U.a,{item:!0,xs:12,sm:r?6:12,children:Object(z.jsx)(M.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:c,type:i,InputProps:"password"===t?{endAdornment:Object(z.jsx)(Me.a,{position:"end",children:Object(z.jsx)(Ge.a,{onClick:s,children:"password"===i?Object(z.jsx)(Ve.a,{}):Object(z.jsx)(qe.a,{})})})}:null})})},Ze=function(){return Object(z.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(z.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},Xe={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},$e=function(){var e=Object(a.useState)(!1),t=Object(L.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(L.a)(c,2),o=i[0],l=i[1],u=Object(a.useState)(Xe),p=Object(L.a)(u,2),j=p[0],b=p[1],m=Ue(),g=Object(I.g)(),h=Object(s.b)(),f=function(e){b(Object(d.a)(Object(d.a)({},j),{},Object(F.a)({},e.target.name,e.target.value)))},x=function(){var e=Object(Y.a)(V.a.mark((function e(t){var n,a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null===t||void 0===t?void 0:t.profileObj,a=null===t||void 0===t?void 0:t.tokenId;try{h({type:v,data:{result:n,token:a}}),g.push("/")}catch(r){console.log(r)}console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsx)(S.a,{component:"main",maxWidth:"xs",children:Object(z.jsxs)(G.a,{className:m.paper,elevation:3,children:[Object(z.jsx)(_.a,{className:m.avatar,children:Object(z.jsx)(He.a,{})}),Object(z.jsx)(P.a,{variant:"h5",children:o?"Sign Up":"Sign In"}),Object(z.jsxs)("form",{className:m.form,onSubmit:function(e){e.preventDefault(),h(o?function(e,t){return function(){var n=Object(Y.a)(V.a.mark((function n(a){var r,c;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,re(e);case 3:r=n.sent,c=r.data,a({type:v,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(j,g):function(e,t){return function(){var n=Object(Y.a)(V.a.mark((function n(a){var r,c;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ae(e);case 3:r=n.sent,c=r.data,a({type:v,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(j,g))},children:[Object(z.jsxs)(U.a,{container:!0,spacing:2,children:[o&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Ke,{name:"firstName",label:"First Name",handleChange:f,autoFocus:!0,half:!0}),Object(z.jsx)(Ke,{name:"lastName",label:"Last Name",handleChange:f,half:!0})]}),Object(z.jsx)(Ke,{name:"email",label:"Email Address",type:"email",handleChange:f}),Object(z.jsx)(Ke,{name:"password",label:"Password",type:n?"text":"password",handleShowPassword:function(){return r((function(e){return!e}))},handleChange:f}),o&&Object(z.jsx)(Ke,{name:"confirmPassword",label:"Repeat Password",type:"password",handleChange:f})]}),Object(z.jsx)(A.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:m.submit,children:o?"Sign Up":"Sign In"}),Object(z.jsx)(ze.GoogleLogin,{clientId:"941971253122-02s9drkrmvukt8fha77buslca1u4g40u.apps.googleusercontent.com",render:function(e){return Object(z.jsx)(A.a,{className:m.googleButton,color:"primary",fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:Object(z.jsx)(Ze,{}),variant:"contained",children:"Google Sign In"})},onSuccess:x,onFailure:function(e){console.log(e),console.log("Google Sign In was unsuccessful. Try Again Later.")},cookiePolicy:"single_host_origin"}),Object(z.jsx)(U.a,{container:!0,justify:"flex-end",children:Object(z.jsx)(A.a,{onClick:function(){l((function(e){return!e})),r(!1)},children:o?"Already have an account? Sign In":"Don't have an account? Sign Up"})})]})]})})},et=n(242),tt=Object(E.a)((function(e){return{media:{borderRadius:"20px",objectFit:"cover",width:"100%",maxHeight:"600px"},card:Object(F.a)({display:"flex",width:"100%"},e.breakpoints.down("sm"),{flexWrap:"wrap",flexDirection:"column"}),section:{borderRadius:"20px",margin:"10px",flex:1},imageSection:Object(F.a)({marginLeft:"20px"},e.breakpoints.down("sm"),{marginLeft:0}),recommendedPosts:Object(F.a)({display:"flex"},e.breakpoints.down("sm"),{flexDirection:"column"}),loadingPaper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",borderRadius:"15px",height:"39vh"}}})),nt=function(){var e=Object(s.c)((function(e){return e.posts})),t=e.post,n=e.posts,r=e.isLoading,c=Object(s.b)(),i=Object(I.g)(),o=tt(),l=Object(I.i)().id;if(Object(a.useEffect)((function(){c(function(e){return function(){var t=Object(Y.a)(V.a.mark((function t(n){var a,r;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:x}),t.next=4,Z(e);case 4:a=t.sent,r=a.data,n({type:m,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(l))}),[c,l]),Object(a.useEffect)((function(){t&&c(ce({search:"none",tags:t.tags.join(",")}))}),[c,t]),!t)return null;if(r)return Object(z.jsx)(G.a,{elevation:6,className:o.loadingPaper,children:Object(z.jsx)(ue.a,{size:"7em"})});var u=n.filter((function(e){return e._id!==t._id}));return Object(z.jsxs)(G.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6,children:[Object(z.jsxs)("div",{className:o.card,children:[Object(z.jsxs)("div",{className:o.section,children:[Object(z.jsx)(P.a,{variant:"h3",component:"h2",children:t.title}),Object(z.jsx)(P.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2",children:t.tags.map((function(e){return"#".concat(e," ")}))}),Object(z.jsx)(P.a,{gutterBottom:!0,variant:"body1",component:"p",children:t.message}),Object(z.jsxs)(P.a,{variant:"h6",children:["Created by: ",t.name]}),Object(z.jsx)(P.a,{variant:"body1",children:Ce()(t.createdAt).fromNow()}),Object(z.jsx)(et.a,{style:{margin:"20px 0"}}),Object(z.jsx)(P.a,{variant:"body1",children:Object(z.jsx)("strong",{children:"Charts - coming soon!"})}),Object(z.jsx)(et.a,{style:{margin:"20px 0"}}),Object(z.jsx)(P.a,{variant:"body1",children:Object(z.jsx)("strong",{children:"Financials - coming soon!"})}),Object(z.jsx)(et.a,{style:{margin:"20px 0"}})]}),Object(z.jsx)("div",{className:o.imageSection,children:Object(z.jsx)("img",{className:o.media,src:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",alt:t.title})})]}),!!u.length&&Object(z.jsxs)("div",{className:o.section,children:[Object(z.jsx)(P.a,{gutterBottom:!0,variant:"h5",children:"You might also like:"}),Object(z.jsx)(et.a,{}),Object(z.jsx)("div",{className:o.recommendedPosts,children:u.map((function(e){var n=e.title,a=e.name,r=e.message,c=e.likes,s=e.selectedFile,o=e._id;return Object(z.jsxs)("div",{style:{margin:"20px",cursor:"pointer"},onClick:function(){return function(e){return i.push("/posts/".concat(e))}(o)},children:[Object(z.jsx)(P.a,{gutterBottom:!0,variant:"h6",children:n}),Object(z.jsx)(P.a,{gutterBottom:!0,variant:"subtitle2",children:a}),Object(z.jsx)(P.a,{gutterBottom:!0,variant:"subtitle2",children:r}),Object(z.jsxs)(P.a,{gutterBottom:!0,variant:"subtitle1",children:["Likes: ",c.length]}),Object(z.jsx)("img",{src:s,alt:t.title,width:"200px"})]},o)}))})]})]})},at=function(){var e=JSON.parse(localStorage.getItem("profile"));return Object(z.jsx)(N.a,{children:Object(z.jsxs)(S.a,{maxWidth:"xl",children:[Object(z.jsx)(J,{}),Object(z.jsxs)(I.d,{children:[Object(z.jsx)(I.b,{path:"/",exact:!0,component:function(){return Object(z.jsx)(I.a,{to:"/posts"})}}),Object(z.jsx)(I.b,{path:"/posts",exact:!0,component:We}),Object(z.jsx)(I.b,{path:"/posts/search",exact:!0,component:We}),Object(z.jsx)(I.b,{path:"/posts/:id",exact:!0,component:nt}),Object(z.jsx)(I.b,{path:"/auth",exact:!0,component:function(){return e?Object(z.jsx)(I.a,{to:"/posts"}):Object(z.jsx)($e,{})}})]})]})})},rt=(n(204),Object(o.d)(C,Object(o.c)(Object(o.a)(l.a))));i.a.render(Object(z.jsx)(s.a,{store:rt,children:Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(at,{})})}),document.getElementById("root"))}},[[205,1,2]]]);
//# sourceMappingURL=main.86e4dca6.chunk.js.map