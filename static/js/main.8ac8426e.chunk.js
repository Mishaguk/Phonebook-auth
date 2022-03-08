(this.webpackJsonp1=this.webpackJsonp1||[]).push([[0],{169:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var c,a,o,r,i,u=n(27),s=n.n(u),b=(n(124),n(13)),j=n(9),l=n(0),d=n.n(l),O=n(16),h=n(69),f=n.n(h),m=n(42),x=n.n(m),p=function(e){return e.phoneBookReducer.filter},g=function(e){return e.phoneBookReducer.loading},v=n(15),y=Object(v.b)("contacts/addRequest"),_=Object(v.b)("contacts/addSucces"),k=Object(v.b)("contacts/addError"),E=Object(v.b)("contacts/deleteRequest"),S=Object(v.b)("contacts/deleteSucces"),C=Object(v.b)("contacts/deleteError"),w=Object(v.b)("contacts/fetchRequest"),A=Object(v.b)("contacts/fetchSucces"),N=Object(v.b)("contacts/fetchError"),R=(Object(v.b)("DELETE_CONTACT"),Object(v.b)("FILTER_CONTACT")),T=n(92),P=n.n(T),q=Object(v.b)("auth/addRequest"),B=Object(v.b)("auth/addSucces"),D=Object(v.b)("auth/addError"),W=Object(v.b)("auth/loginRequest"),F=Object(v.b)("auth/loginSucces"),L=Object(v.b)("auth/loginError"),z=Object(v.b)("auth/logoutRequest"),I=Object(v.b)("auth/logoutSucces"),U=Object(v.b)("auth/logoutError"),H=Object(v.b)("auth/getCurrentUserRequest"),J=Object(v.b)("auth/getCurrentUserSucces"),M=Object(v.b)("auth/getCurrentUserError"),Z=P.a.create({baseURL:"https://connections-api.herokuapp.com",timeout:1e3}),G=function(e){Z.defaults.headers.common.Authorization="Bearer ".concat(e)},V=function(){Z.defaults.headers.common.Authorization=""},Y=function(){return function(e,t){var n=t().authReducer.token;n&&(G(n),e(H()),Z.get("/users/current").then((function(t){return e(J(t.data))})).catch((function(t){return e(M(t))})))}},K=n(1),Q=function(){var e=Object(O.b)(),t=Object(l.useState)(""),n=Object(j.a)(t,2),c=n[0],a=n[1],o=Object(l.useState)(""),r=Object(j.a)(o,2),i=r[0],u=r[1],s=Object(O.c)(function(e){return function(t){return!!t.phoneBookReducer.items.find((function(t){return t.name===e}))}}(c));return Object(K.jsx)("div",{children:Object(K.jsxs)("form",{className:f.a.PhonebookEditor,onSubmit:function(t){var n;(t.preventDefault(),s)?x.a.warning("Contact ".concat(c," is already exists")):(e((n={name:c,number:i},function(e){e(y()),Z.post("/contacts",n).then((function(t){e(_(t.data))})).catch((function(t){return e(k(t))}))})),a(""),u(""))},children:[Object(K.jsx)("h2",{children:"Name"}),Object(K.jsx)("input",{type:"text",name:"name",value:c,onChange:function(e){return a(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(K.jsx)("h2",{children:"Number"}),Object(K.jsx)("input",{type:"tel",name:"number",value:i,onChange:function(e){return u(e.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(K.jsx)("button",{className:f.a.PhonebookEditorButton,type:"submit",children:"Add contact"})]})})},$=n(70),X=n.n($),ee=function(){var e=Object(O.b)(),t=Object(O.c)(p);return Object(K.jsxs)("label",{className:X.a.filter,children:[Object(K.jsx)("span",{children:"filter"}),Object(K.jsx)("input",{className:X.a.input,type:"text",placeholder:"Type to filter contacts",value:t,onChange:function(t){e(R(t.target.value))}})]})},te=n(71),ne=n.n(te),ce=d.a.memo((function(e){var t=e.contact,n=t.name,c=t.number,a=t.id,o=e.onDelete;return console.log("render",a)||n&&Object(K.jsx)("li",{children:Object(K.jsxs)("p",{className:ne.a.PhonebookText,children:[n," ",c,Object(K.jsx)("button",{type:"button",className:ne.a.button,onClick:function(){return o(a)},children:"Delete"})]})})})),ae=n(221),oe=n(219),re=n(93),ie=n.n(re),ue=function(){var e=Object(O.b)(),t=Object(O.c)(p),n=Object(O.c)(function(e){return function(t){return e?t.phoneBookReducer.items.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):t.phoneBookReducer.items}}(t)),c=Object(l.useCallback)((function(t){return e(function(e){return function(t){t(E()),Z.delete("/contacts/".concat(e)).then((function(){return t(S(e))})).catch((function(e){return t(C(e))}))}}(t))}),[e]);return Object(K.jsx)(ae.a,{component:"ul",children:n.map((function(e){return Object(K.jsx)(oe.a,{timeout:500,unmountOnExit:!0,classNames:ie.a,children:Object(K.jsx)(ce,{contact:e,onDelete:c},e.id)},e.id)}))})},se=n(94),be=n.n(se),je=function(e){return e.authReducer.token},le=function(e){return e.authReducer.user.name},de=n(43),Oe=n.n(de),he=function(){var e=Object(O.c)(g),t=Object(O.b)(),n=Object(O.c)(je),c=Object(b.f)(),a=Object(l.useState)(!1),o=Object(j.a)(a,2),r=o[0],i=o[1];return Object(l.useEffect)((function(){t(Y()),i(!0)}),[t]),Object(l.useEffect)((function(){if(!n)return c("/login"),void x.a.warning("Please, sign in to your account");t((function(e){e(w()),Z.get("/contacts").then((function(t){var n=t.data;return e(A(n))})).catch((function(t){return e(N(t))}))}))}),[]),Object(l.useEffect)((function(){n||c("/login")})),Object(K.jsxs)("div",{children:[Object(K.jsx)(oe.a,{in:r,timeout:500,classNames:Oe.a,unmountOnExit:!0,children:Object(K.jsx)("h1",{children:"Phonebook"})}),Object(K.jsx)(Q,{}),Object(K.jsx)(ee,{}),e&&Object(K.jsx)(be.a,{type:"Circles",color:"#00BFFF",height:100,width:100,timeout:3e3}),Object(K.jsx)(ue,{})]})},fe=(n(169),n(218)),me=n(222),xe=n(61),pe=n.n(xe),ge=n(227),ve=n(226),ye=n(223),_e=n(217),ke=n(225),Ee=n(228),Se=n(213),Ce=n(98),we=n(224),Ae=function(){var e=Object(O.b)(),t=Object(l.useState)(""),n=Object(j.a)(t,2),c=n[0],a=n[1],o=Object(l.useState)(""),r=Object(j.a)(o,2),i=r[0],u=r[1],s=Object(l.useState)(""),d=Object(j.a)(s,2),h=d[0],f=d[1],m=Object(l.useState)(!1),x=Object(j.a)(m,2),p=x[0],g=x[1],v=Object(O.c)(je),y=Object(b.f)();Object(l.useEffect)((function(){v&&y("/contacts")})),Object(l.useEffect)((function(){g(!0)}),[]);var _=Object(Ce.a)();return Object(K.jsx)(we.a,{theme:_,children:Object(K.jsx)(oe.a,{in:p,timeout:500,classNames:Oe.a,unmountOnExit:!0,children:Object(K.jsxs)(ke.a,{component:"main",maxWidth:"xs",children:[Object(K.jsx)(Se.a,{}),Object(K.jsxs)(ve.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(K.jsx)(me.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(K.jsx)(pe.a,{})}),Object(K.jsx)(ge.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(K.jsxs)(ve.a,{component:"form",noValidate:!0,onSubmit:function(t){var n;t.preventDefault(),e((n={name:c,email:i,password:h},function(e){e(q()),Z.post("/users/signup",n).then((function(t){console.log(t),G(t.data.token),e(B(t.data))})).catch((function(t){return e(D(t))}))})),a(""),u(""),f("")},sx:{mt:3},children:[Object(K.jsxs)(ye.a,{container:!0,spacing:2,children:[Object(K.jsx)(ye.a,{item:!0,xs:12,sm:12,children:Object(K.jsx)(_e.a,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"Login",autoFocus:!0,value:c,onChange:function(e){return a(e.target.value)}})}),Object(K.jsx)(ye.a,{item:!0,xs:12,children:Object(K.jsx)(_e.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",value:h,onChange:function(e){return f(e.target.value)}})}),Object(K.jsx)(ye.a,{item:!0,xs:12,children:Object(K.jsx)(_e.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:i,onChange:function(e){return u(e.target.value)}})})]}),Object(K.jsx)(fe.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(K.jsx)(ye.a,{container:!0,justifyContent:"flex-end",children:Object(K.jsx)(ye.a,{item:!0,children:Object(K.jsx)(Ee.a,{href:"#/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})})})},Ne=(n(173),function(){var e=Object(O.b)();return Object(l.useEffect)((function(){e(Y())}),[e]),Object(K.jsx)("div",{children:Object(K.jsx)("h1",{className:"welcome",children:"Welcome!"})})}),Re=(n(174),function(){var e=Object(O.b)(),t=Object(l.useState)(""),n=Object(j.a)(t,2),c=n[0],a=n[1],o=Object(l.useState)(""),r=Object(j.a)(o,2),i=r[0],u=r[1],s=Object(l.useState)(!1),d=Object(j.a)(s,2),h=d[0],f=d[1],m=Object(O.c)(je),x=Object(b.f)();Object(l.useEffect)((function(){m&&x("/contacts")})),Object(l.useEffect)((function(){f(!0)}),[]);var p=Object(Ce.a)();return Object(K.jsx)(we.a,{theme:p,children:Object(K.jsx)(oe.a,{in:h,timeout:500,classNames:Oe.a,unmountOnExit:!0,children:Object(K.jsxs)(ke.a,{component:"main",maxWidth:"xs",children:[Object(K.jsx)(Se.a,{}),Object(K.jsxs)(ve.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(K.jsx)(me.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(K.jsx)(pe.a,{})}),Object(K.jsx)(ge.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(K.jsxs)(ve.a,{component:"form",onSubmit:function(t){var n;t.preventDefault(),e((n={email:c,password:i},function(e){e(W()),Z.post("/users/login",n).then((function(t){console.log(t),G(t.data.token),e(F(t.data))})).catch((function(t){return e(L(t))}))})),a(""),u("")},noValidate:!0,sx:{mt:1},children:[Object(K.jsx)(_e.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:c,onChange:function(e){return a(e.target.value)}}),Object(K.jsx)(_e.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:i,onChange:function(e){return u(e.target.value)}}),Object(K.jsx)(fe.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(K.jsxs)(ye.a,{container:!0,children:[Object(K.jsx)(ye.a,{item:!0,xs:!0}),Object(K.jsx)(ye.a,{item:!0,children:Object(K.jsx)(Ee.a,{href:"#/register",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})]})})})}),Te=n(31),Pe=(n(89),function(){var e=Object(O.c)(je);return Object(K.jsxs)("div",{className:"div-styles",children:[Object(K.jsx)(Te.b,{to:"/Home",className:"Tab-styles",style:function(e){return{color:e.isActive?"red":""}},children:"Home"}),e&&Object(K.jsx)(Te.b,{to:"/contacts",className:"Tab-styles",style:function(e){return{color:e.isActive?"red":""}},children:"Phonebook"})]})}),qe=function(){var e=Object(O.b)(),t=Object(O.c)(le);return Object(K.jsxs)("div",{s:!0,children:[Object(K.jsxs)("h2",{children:["Welcome , ",t]}),Object(K.jsx)("button",{type:"button",onClick:function(){return e((function(e){e(z()),Z.post("/users/logout").then((function(){V(),e(I())})).catch((function(t){return e(U(t))}))}))},children:"Logout"})]})},Be=function(){return Object(K.jsxs)("div",{children:[Object(K.jsx)(Te.b,{to:"/register",className:"Tab-styles",style:function(e){return{color:e.isActive?"red":""}},children:"Register"}),Object(K.jsx)(Te.b,{to:"/login",className:"Tab-styles",style:function(e){return{color:e.isActive?"red":""}},children:"Login"})]})},De={header:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"60px"}},We=function(){var e=Object(O.c)(je);return Object(K.jsxs)("header",{style:De.header,children:[Object(K.jsx)(Pe,{}),e?Object(K.jsx)(qe,{}):Object(K.jsx)(Be,{})]})},Fe=function(){return Object(K.jsxs)("div",{children:[Object(K.jsx)(We,{}),Object(K.jsxs)(b.c,{children:[Object(K.jsx)(b.a,{path:"/login",exact:!0,element:Object(K.jsx)(Re,{})}),Object(K.jsx)(b.a,{path:"/Home",exact:!0,element:Object(K.jsx)(Ne,{})}),Object(K.jsx)(b.a,{path:"/contacts",exact:!0,element:Object(K.jsx)(he,{})}),Object(K.jsx)(b.a,{path:"/register",exact:!0,element:Object(K.jsx)(Ae,{})})]})]})},Le=n(4),ze=n(17),Ie=n(21),Ue=[],He="",Je=!1,Me=Object(v.c)(Ue,(c={},Object(Le.a)(c,_,(function(e,t){return[].concat(Object(ze.a)(e),[t.payload])})),Object(Le.a)(c,S,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),Object(Le.a)(c,A,(function(e,t){return t.payload})),c)),Ze=Object(v.c)(He,Object(Le.a)({},R,(function(e,t){return t.payload}))),Ge=Object(v.c)(Je,(a={},Object(Le.a)(a,y,(function(){return!0})),Object(Le.a)(a,_,(function(){return!1})),Object(Le.a)(a,k,(function(){return!1})),Object(Le.a)(a,E,(function(){return!0})),Object(Le.a)(a,S,(function(){return!1})),Object(Le.a)(a,C,(function(){return!1})),Object(Le.a)(a,w,(function(){return!0})),Object(Le.a)(a,A,(function(){return!1})),Object(Le.a)(a,N,(function(){return!1})),a)),Ve=Object(Ie.b)({items:Me,filter:Ze,loading:Ge}),Ye={name:null,email:null},Ke=Object(v.c)(Ye,(o={},Object(Le.a)(o,B,(function(e,t){return t.payload.user})),Object(Le.a)(o,F,(function(e,t){return t.payload.user})),Object(Le.a)(o,I,(function(){return Ye})),Object(Le.a)(o,J,(function(e,t){return t.payload})),o)),Qe=Object(v.c)(null,(r={},Object(Le.a)(r,B,(function(e,t){return t.payload.token})),Object(Le.a)(r,F,(function(e,t){return t.payload.token})),Object(Le.a)(r,I,(function(){return null})),r)),$e=Object(v.c)(null,(i={},Object(Le.a)(i,D,(function(e,t){return t.payload})),Object(Le.a)(i,L,(function(e,t){return t.payload})),Object(Le.a)(i,U,(function(e,t){return t.payload})),Object(Le.a)(i,M,(function(e,t){return t.payload})),i)),Xe=Object(Ie.b)({user:Ke,token:Qe,error:$e}),et=n(96),tt=n.n(et),nt=n(32),ct={key:"root",storage:tt.a,whitelist:["token"]},at=Object(v.a)({reducer:{phoneBookReducer:Ve,authReducer:Object(nt.g)(ct,Xe)},middleware:Object(v.d)({serializableCheck:{ignoredActions:[nt.a,nt.f,nt.b,nt.c,nt.d,nt.e]}})}),ot=Object(nt.h)(at),rt=(n(177),n(97));x.a.options={closeButton:!1,debug:!1,newestOnTop:!1,progressBar:!1,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"},s.a.render(Object(K.jsx)(Te.a,{children:Object(K.jsx)(O.a,{store:at,children:Object(K.jsx)(rt.a,{loading:null,persistor:ot,children:Object(K.jsx)(Fe,{})})})}),document.getElementById("root"))},43:function(e,t,n){e.exports={enter:"Slides_enter__LBdv5",enterActive:"Slides_enterActive__32G8s",exit:"Slides_exit__YmlOs",exitActive:"Slides_exitActive__2hiHY"}},69:function(e,t,n){e.exports={PhonebookEditor:"PhonebookEditor_PhonebookEditor__22oTt",PhonebookEditorButton:"PhonebookEditor_PhonebookEditorButton__1rcqe"}},70:function(e,t,n){e.exports={filter:"Filter_filter__3bmqf",input:"Filter_input__12Sh9"}},71:function(e,t,n){e.exports={button:"Phonebook_button__3Ks78",PhonebookText:"Phonebook_PhonebookText__1GQCr"}},89:function(e,t,n){},93:function(e,t,n){e.exports={enter:"Slides2_enter__pqjlF",enterActive:"Slides2_enterActive__1h_A9",exit:"Slides2_exit__3etto",exitActive:"Slides2_exitActive__1bjpg"}}},[[178,1,2]]]);
//# sourceMappingURL=main.8ac8426e.chunk.js.map