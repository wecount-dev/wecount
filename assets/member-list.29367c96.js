import{S as X,i as x,s as z,e as u,c as w,k as b,q as U,a as f,b as B,d as L,l as r,r as R,t as k,f as y,g as D,h as M,o as E,X as F,w as H}from"./vendor.c2ebf50b.js";import{U as I}from"./user-image.7da6f66b.js";import"./icons.79c13611.js";function J(n){let e,t,l,i,m,a;return t=new I({props:{src:n[1]}}),{c(){e=u("div"),w(t.$$.fragment),l=b(),i=u("p"),m=U(n[0]),f(i,"class","svelte-84o6hd"),f(e,"class","container svelte-84o6hd")},m(s,c){B(s,e,c),L(t,e,null),r(e,l),r(e,i),r(i,m),a=!0},p(s,[c]){const v={};c&2&&(v.src=s[1]),t.$set(v),(!a||c&1)&&R(m,s[0])},i(s){a||(k(t.$$.fragment,s),a=!0)},o(s){y(t.$$.fragment,s),a=!1},d(s){s&&D(e),M(t)}}}function K(n,e,t){let l;E(n,F,a=>t(2,l=a));let{name:i=l("unnamed")}=e,{imageURL:m}=e;return n.$$set=a=>{"name"in a&&t(0,i=a.name),"imageURL"in a&&t(1,m=a.imageURL)},[i,m]}class G extends X{constructor(e){super();x(this,e,K,J,z,{name:0,imageURL:1})}}function N(n){let e,t,l,i=n[0]("member")+"",m,a,s,c=n[0]("more")+"",v,q,$,C,d,_,S,g,p,j,A;return _=new G({props:{imageURL:"https://dooboolab.com/static/media/wecount.f91954d1.png"}}),g=new G({props:{imageURL:"https://avatars.githubusercontent.com/u/45788556?s=200&v=4"}}),{c(){e=u("div"),t=u("div"),l=u("div"),m=U(i),a=b(),s=u("div"),v=U(c),q=b(),$=u("i"),$.textContent="chevron_right",C=b(),d=u("div"),w(_.$$.fragment),S=b(),w(g.$$.fragment),f(l,"class","body1"),f($,"class","material-icons md-18"),f(s,"class","more body3 svelte-1jm4wrj"),f(t,"class","title svelte-1jm4wrj"),f(d,"class","member svelte-1jm4wrj"),f(e,"class","container svelte-1jm4wrj")},m(o,h){B(o,e,h),r(e,t),r(t,l),r(l,m),r(t,a),r(t,s),r(s,v),r(s,q),r(s,$),r(e,C),r(e,d),L(_,d,null),r(d,S),L(g,d,null),p=!0,j||(A=H(s,"click",n[1]),j=!0)},p(o,[h]){(!p||h&1)&&i!==(i=o[0]("member")+"")&&R(m,i),(!p||h&1)&&c!==(c=o[0]("more")+"")&&R(v,c)},i(o){p||(k(_.$$.fragment,o),k(g.$$.fragment,o),p=!0)},o(o){y(_.$$.fragment,o),y(g.$$.fragment,o),p=!1},d(o){o&&D(e),M(_),M(g),j=!1,A()}}}function O(n,e,t){let l;return E(n,F,m=>t(0,l=m)),[l,()=>{console.log("click more")}]}class V extends X{constructor(e){super();x(this,e,O,N,z,{})}}export{V as default};
