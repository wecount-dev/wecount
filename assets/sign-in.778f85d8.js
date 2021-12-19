import{S as oe,i as ae,s as ie,e as u,k as $,q as j,c as M,v as x,a as r,M as h,b as S,l,d as P,r as C,t as W,f as A,g as E,h as K,o as le,X as re,N as fe,n as ee}from"./vendor.c2ebf50b.js";import{s as te}from"./db.27304657.js";import{d as ce,e as ge,f as ue,b as me}from"./icons.79c13611.js";import{B as ne}from"./button.57f2a66c.js";import{E as se}from"./edit-text.ea854458.js";import{u as pe}from"./sessionStore.568fac6c.js";function _e(n){let e,t;return{c(){e=u("img"),r(e,"slot","leftElement"),h(e,"margin","0 16px"),x(e.src,t=ce)||r(e,"src",t),r(e,"alt","mail")},m(a,s){S(a,e,s)},p:ee,d(a){a&&E(e)}}}function he(n){let e,t;return{c(){e=u("img"),r(e,"slot","leftElement"),x(e.src,t=ge)||r(e,"src",t),r(e,"alt","mail"),h(e,"margin","0 16px")},m(a,s){S(a,e,s)},p:ee,d(a){a&&E(e)}}}function de(n){let e,t=n[1]("sign_in")+"",a;return{c(){e=u("div"),a=j(t),r(e,"class","text body3"),h(e,"font-weight","500"),h(e,"color","white")},m(s,g){S(s,e,g),l(e,a)},p(s,g){g&2&&t!==(t=s[1]("sign_in")+"")&&C(a,t)},d(s){s&&E(e)}}}function $e(n){let e,t,a,s,g=n[1]("auth.sign-in.sign_in_with_facebook")+"",m;return{c(){e=u("img"),a=$(),s=u("div"),m=j(g),h(e,"margin-right","15px"),x(e.src,t=ue)||r(e,"src",t),r(e,"alt","facebook"),r(s,"class","text body3"),h(s,"font-weight","500"),h(s,"color","white")},m(c,p){S(c,e,p),S(c,a,p),S(c,s,p),l(s,m)},p(c,p){p&2&&g!==(g=c[1]("auth.sign-in.sign_in_with_facebook")+"")&&C(m,g)},d(c){c&&E(e),c&&E(a),c&&E(s)}}}function ve(n){let e,t,a,s,g,m,c=n[1]("login")+"",p,N,d,X,i,I,_,v,L=n[1]("auth.sign-in.do_not_have_account")+"",D,Q,R,z,q=n[1]("auth.sign-in.forgot_your_password")+"",G,T,U,b,V,w,Y,y,B=n[1]("auth.sign-in.look_around")+"",H,k;return d=new se({props:{containerStyle:"width: 80%; margin-bottom: 8px",inputStyle:"font-size: 14px;",type:"email",placeholder:n[1]("auth.sign-in.email_hint"),$$slots:{leftElement:[_e]},$$scope:{ctx:n}}}),d.$on("changed",n[3]),i=new se({props:{containerStyle:"width: 80%;",inputStyle:"font-size: 14px;",type:"password",placeholder:n[1]("auth.sign-in.pw_hint"),$$slots:{leftElement:[he]},$$scope:{ctx:n}}}),i.$on("changed",n[4]),b=new ne({props:{primary:!0,style:"align-self: stretch; margin: 40px 10% 10px 10%",disabled:n[0],loading:n[0],$$slots:{default:[de]},$$scope:{ctx:n}}}),b.$on("click",n[5]),w=new ne({props:{style:n[2],$$slots:{default:[$e]},$$scope:{ctx:n}}}),w.$on("click",n[6]),{c(){e=u("div"),t=u("form"),a=u("img"),g=$(),m=u("h1"),p=j(c),N=$(),M(d.$$.fragment),X=$(),M(i.$$.fragment),I=$(),_=u("div"),v=u("a"),D=j(L),Q=j("?"),R=$(),z=u("a"),G=j(q),T=j("?"),U=$(),M(b.$$.fragment),V=$(),M(w.$$.fragment),Y=$(),y=u("a"),H=j(B),x(a.src,s=me)||r(a,"src",s),r(a,"alt","logo"),h(m,"margin-bottom","60px"),r(v,"class","link svelte-kj7rz2"),r(v,"href","/auth/sign-up"),r(z,"class","link svelte-kj7rz2"),r(z,"href","/auth/find-pw"),r(_,"class","container-options svelte-kj7rz2"),r(y,"class","link svelte-kj7rz2"),r(y,"href","/#"),h(y,"margin-top","14px"),h(y,"text-decoration","underline",1),r(t,"class","svelte-kj7rz2"),r(e,"class","container svelte-kj7rz2")},m(o,f){S(o,e,f),l(e,t),l(t,a),l(t,g),l(t,m),l(m,p),l(t,N),P(d,t,null),l(t,X),P(i,t,null),l(t,I),l(t,_),l(_,v),l(v,D),l(v,Q),l(_,R),l(_,z),l(z,G),l(z,T),l(t,U),P(b,t,null),l(t,V),P(w,t,null),l(t,Y),l(t,y),l(y,H),k=!0},p(o,[f]){(!k||f&2)&&c!==(c=o[1]("login")+"")&&C(p,c);const J={};f&2&&(J.placeholder=o[1]("auth.sign-in.email_hint")),f&512&&(J.$$scope={dirty:f,ctx:o}),d.$set(J);const O={};f&2&&(O.placeholder=o[1]("auth.sign-in.pw_hint")),f&512&&(O.$$scope={dirty:f,ctx:o}),i.$set(O),(!k||f&2)&&L!==(L=o[1]("auth.sign-in.do_not_have_account")+"")&&C(D,L),(!k||f&2)&&q!==(q=o[1]("auth.sign-in.forgot_your_password")+"")&&C(G,q);const F={};f&1&&(F.disabled=o[0]),f&1&&(F.loading=o[0]),f&514&&(F.$$scope={dirty:f,ctx:o}),b.$set(F);const Z={};f&514&&(Z.$$scope={dirty:f,ctx:o}),w.$set(Z),(!k||f&2)&&B!==(B=o[1]("auth.sign-in.look_around")+"")&&C(H,B)},i(o){k||(W(d.$$.fragment,o),W(i.$$.fragment,o),W(b.$$.fragment,o),W(w.$$.fragment,o),k=!0)},o(o){A(d.$$.fragment,o),A(i.$$.fragment,o),A(b.$$.fragment,o),A(w.$$.fragment,o),k=!1},d(o){o&&E(e),K(d),K(i),K(b),K(w)}}}function be(n,e,t){let a;le(n,re,i=>t(1,a=i)),pe.subscribe(i=>{});let s=!1,g,m;const c=`
    align-self: stretch;
    border-radius: 4px;
    background-color: #375A93;
    color: var(--textContrast);
    margin-bottom: 12px;
    margin: 0 10%;

    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
  `;return fe(async()=>{}),[s,a,c,i=>{g=i.detail},i=>{m=i.detail},async()=>{try{t(0,s=!0);const{error:i}=await te.auth.signIn({email:g,password:m});if(i)throw i}catch(i){console.log(i)}finally{t(0,s=!1)}},async()=>{try{t(0,s=!0);const{user:i,session:I,error:_,url:v}=await te.auth.signIn({provider:"facebook"});//! Caveat: Run below code when supabase does not work as intended.
if(!i&&!_&&!I&&(window.open(v),window.close()),_)throw _}catch(i){console.log(i)}finally{t(0,s=!1)}}]}class ze extends oe{constructor(e){super();ae(this,e,be,ve,ie,{})}}export{ze as default};
