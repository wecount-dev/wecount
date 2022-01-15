import{S as oe,i as ae,s as ie,a as le,e as g,o as v,v as k,b as L,y as M,d as r,N as h,f as y,p as l,g as P,x as C,t as W,h as A,j as S,k as K,q as re,X as ce,O as pe,n as ee}from"./vendor.d55b4b00.js";import{s as te}from"./index.88559a47.js";import{d as fe,e as ge,f as ue,b as me}from"./icons.68ec2dd0.js";import{B as ne}from"./button.918d979a.js";import{E as se}from"./edit-text.38939d0f.js";function de(n){le(n,"svelte-14p3jvc",`.social-button{font-size:14px;align-self:stretch;background-color:var(--paper) !important}.container.svelte-14p3jvc.svelte-14p3jvc{background:linear-gradient(
      136.71deg,
      var(--auth-background-light) 21.32%,
      var(--auth-background-dark) 96.51%
    );grid-template-columns:1fr;grid-template-rows:1fr;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center}.container.svelte-14p3jvc .link.svelte-14p3jvc{font-size:14px;text-decoration:underline;color:var(--link);display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center}.container.svelte-14p3jvc form.svelte-14p3jvc{padding:60px 70px;width:60%;height:654px;background-color:var(--background);box-shadow:0px 24px 42px rgba(0, 0, 0, .08);border-radius:16px;max-height:654px;max-width:640px;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;justify-content:center;align-items:center}.container.svelte-14p3jvc form .container-options.svelte-14p3jvc{align-self:stretch;margin:0 10%;margin-top:8px;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:space-between}.container.svelte-14p3jvc form .container-options a.svelte-14p3jvc:first-child{text-align:left}.container.svelte-14p3jvc form.svelte-14p3jvc .input-wrapper{grid-template-columns:-webkit-min-content 1fr;grid-template-columns:min-content 1fr}`)}function he(n){let e,t;return{c(){e=g("img"),r(e,"slot","leftElement"),h(e,"margin","0 16px"),M(e.src,t=fe)||r(e,"src",t),r(e,"alt","mail")},m(a,s){y(a,e,s)},p:ee,d(a){a&&S(e)}}}function _e(n){let e,t;return{c(){e=g("img"),r(e,"slot","leftElement"),M(e.src,t=ge)||r(e,"src",t),r(e,"alt","mail"),h(e,"margin","0 16px")},m(a,s){y(a,e,s)},p:ee,d(a){a&&S(e)}}}function ve(n){let e,t=n[1]("sign_in")+"",a;return{c(){e=g("div"),a=k(t),r(e,"class","text body3"),h(e,"font-weight","500"),h(e,"color","white")},m(s,f){y(s,e,f),l(e,a)},p(s,f){f&2&&t!==(t=s[1]("sign_in")+"")&&C(a,t)},d(s){s&&S(e)}}}function be(n){let e,t,a,s,f=n[1]("auth.sign-in.sign_in_with_facebook")+"",u;return{c(){e=g("img"),a=v(),s=g("div"),u=k(f),h(e,"margin-right","15px"),M(e.src,t=ue)||r(e,"src",t),r(e,"alt","facebook"),r(s,"class","text body3"),h(s,"font-weight","500"),h(s,"color","white")},m(p,m){y(p,e,m),y(p,a,m),y(p,s,m),l(s,u)},p(p,m){m&2&&f!==(f=p[1]("auth.sign-in.sign_in_with_facebook")+"")&&C(u,f)},d(p){p&&S(e),p&&S(a),p&&S(s)}}}function $e(n){let e,t,a,s,f,u,p=n[1]("login")+"",m,N,_,O,i,z,d,b,I=n[1]("auth.sign-in.do_not_have_account")+"",X,Q,R,E,q=n[1]("auth.sign-in.forgot_your_password")+"",D,T,U,$,V,w,Y,j,B=n[1]("auth.sign-in.look_around")+"",G,x;return _=new se({props:{containerStyle:"width: 80%; margin-bottom: 8px",inputStyle:"font-size: 14px;",type:"email",placeholder:n[1]("auth.sign-in.email_hint"),$$slots:{leftElement:[he]},$$scope:{ctx:n}}}),_.$on("changed",n[3]),i=new se({props:{containerStyle:"width: 80%;",inputStyle:"font-size: 14px;",type:"password",placeholder:n[1]("auth.sign-in.pw_hint"),$$slots:{leftElement:[_e]},$$scope:{ctx:n}}}),i.$on("changed",n[4]),$=new ne({props:{primary:!0,style:"align-self: stretch; margin: 40px 10% 10px 10%",disabled:n[0],loading:n[0],$$slots:{default:[ve]},$$scope:{ctx:n}}}),$.$on("click",n[5]),w=new ne({props:{style:n[2],$$slots:{default:[be]},$$scope:{ctx:n}}}),w.$on("click",n[6]),{c(){e=g("div"),t=g("form"),a=g("img"),f=v(),u=g("h1"),m=k(p),N=v(),L(_.$$.fragment),O=v(),L(i.$$.fragment),z=v(),d=g("div"),b=g("a"),X=k(I),Q=k("?"),R=v(),E=g("a"),D=k(q),T=k("?"),U=v(),L($.$$.fragment),V=v(),L(w.$$.fragment),Y=v(),j=g("a"),G=k(B),M(a.src,s=me)||r(a,"src",s),r(a,"alt","logo"),h(u,"margin-bottom","60px"),r(b,"class","link svelte-14p3jvc"),r(b,"href","/auth/sign-up"),r(E,"class","link svelte-14p3jvc"),r(E,"href","/auth/find-pw"),r(d,"class","container-options svelte-14p3jvc"),r(j,"class","link svelte-14p3jvc"),r(j,"href","/#"),h(j,"margin-top","14px"),h(j,"text-decoration","underline",1),r(t,"class","svelte-14p3jvc"),r(e,"class","container svelte-14p3jvc")},m(o,c){y(o,e,c),l(e,t),l(t,a),l(t,f),l(t,u),l(u,m),l(t,N),P(_,t,null),l(t,O),P(i,t,null),l(t,z),l(t,d),l(d,b),l(b,X),l(b,Q),l(d,R),l(d,E),l(E,D),l(E,T),l(t,U),P($,t,null),l(t,V),P(w,t,null),l(t,Y),l(t,j),l(j,G),x=!0},p(o,[c]){(!x||c&2)&&p!==(p=o[1]("login")+"")&&C(m,p);const H={};c&2&&(H.placeholder=o[1]("auth.sign-in.email_hint")),c&512&&(H.$$scope={dirty:c,ctx:o}),_.$set(H);const J={};c&2&&(J.placeholder=o[1]("auth.sign-in.pw_hint")),c&512&&(J.$$scope={dirty:c,ctx:o}),i.$set(J),(!x||c&2)&&I!==(I=o[1]("auth.sign-in.do_not_have_account")+"")&&C(X,I),(!x||c&2)&&q!==(q=o[1]("auth.sign-in.forgot_your_password")+"")&&C(D,q);const F={};c&1&&(F.disabled=o[0]),c&1&&(F.loading=o[0]),c&514&&(F.$$scope={dirty:c,ctx:o}),$.$set(F);const Z={};c&514&&(Z.$$scope={dirty:c,ctx:o}),w.$set(Z),(!x||c&2)&&B!==(B=o[1]("auth.sign-in.look_around")+"")&&C(G,B)},i(o){x||(W(_.$$.fragment,o),W(i.$$.fragment,o),W($.$$.fragment,o),W(w.$$.fragment,o),x=!0)},o(o){A(_.$$.fragment,o),A(i.$$.fragment,o),A($.$$.fragment,o),A(w.$$.fragment,o),x=!1},d(o){o&&S(e),K(_),K(i),K($),K(w)}}}function we(n,e,t){let a;re(n,ce,i=>t(1,a=i));let s=!1,f,u;const p=`
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
  `;return pe(async()=>{}),[s,a,p,i=>{f=i.detail},i=>{u=i.detail},async()=>{try{t(0,s=!0);const{error:i}=await te.auth.signIn({email:f,password:u});if(i)throw i}catch(i){console.log(i)}finally{t(0,s=!1)}},async()=>{try{t(0,s=!0);const{user:i,session:z,error:d,url:b}=await te.auth.signIn({provider:"facebook"});//! Caveat: Run below code when supabase does not work as intended.
if(!i&&!d&&!z&&(window.open(b),window.close()),d)throw d}catch(i){console.log(i)}finally{t(0,s=!1)}}]}class Ee extends oe{constructor(e){super();ae(this,e,we,$e,ie,{},de)}}export{Ee as default};
