import{S as x,i as z,s as A,c as D,d as F,t as h,f as q,h as H,e as p,q as C,k as w,a as f,b as y,l as m,r as B,x as I,y as J,g as k,V as K,o as P,u as L,p as M,X as N,v as E,n as G}from"./vendor.c2ebf50b.js";import{p as Q,q as R}from"./icons.79c13611.js";import T from"./card.d567efd7.js";function O(l,e,o){const t=l.slice();return t[4]=e[o].title,t[5]=e[o].body,t[6]=e[o].onPress,t[8]=o,t}function U(l){let e,o;return{c(){e=p("img"),E(e.src,o=Q)||f(e,"src",o),f(e,"alt","logo")},m(t,s){y(t,e,s)},p:G,d(t){t&&k(e)}}}function W(l){let e,o;return{c(){e=p("img"),E(e.src,o=R)||f(e,"src",o),f(e,"alt","logo")},m(t,s){y(t,e,s)},p:G,d(t){t&&k(e)}}}function Y(l){let e;function o(n,u){return n[8]===0?W:U}let s=o(l)(l);return{c(){s.c(),e=w()},m(n,u){s.m(n,u),y(n,e,u)},p(n,u){s.p(n,u)},d(n){s.d(n),n&&k(e)}}}function V(l){let e,o;return e=new T({props:{title:l[4],body:l[5],$$slots:{icon:[Y]},$$scope:{ctx:l}}}),e.$on("click",l[6]),{c(){D(e.$$.fragment)},m(t,s){F(e,t,s),o=!0},p(t,s){const n={};s&512&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){o||(h(e.$$.fragment,t),o=!0)},o(t){q(e.$$.fragment,t),o=!1},d(t){H(e,t)}}}function Z(l){let e,o,t,s=l[0]("onboard.hello")+"",n,u,_,v=l[0]("onboard.welcome")+"",$,S,b,g,d=l[1],c=[];for(let r=0;r<d.length;r+=1)c[r]=V(O(l,d,r));const X=r=>q(c[r],1,1,()=>{c[r]=null});return{c(){e=p("div"),o=p("div"),t=p("div"),n=C(s),u=w(),_=p("div"),$=C(v),S=w(),b=p("div");for(let r=0;r<c.length;r+=1)c[r].c();f(t,"class","heading3"),f(_,"class","heading3"),f(o,"class","greeting svelte-1e4sfqc"),f(b,"class","card-wrapper svelte-1e4sfqc"),f(e,"class","container svelte-1e4sfqc")},m(r,i){y(r,e,i),m(e,o),m(o,t),m(t,n),m(o,u),m(o,_),m(_,$),m(e,S),m(e,b);for(let a=0;a<c.length;a+=1)c[a].m(b,null);g=!0},p(r,[i]){if((!g||i&1)&&s!==(s=r[0]("onboard.hello")+"")&&B(n,s),(!g||i&1)&&v!==(v=r[0]("onboard.welcome")+"")&&B($,v),i&2){d=r[1];let a;for(a=0;a<d.length;a+=1){const j=O(r,d,a);c[a]?(c[a].p(j,i),h(c[a],1)):(c[a]=V(j),c[a].c(),h(c[a],1),c[a].m(b,null))}for(I(),a=d.length;a<c.length;a+=1)X(a);J()}},i(r){if(!g){for(let i=0;i<d.length;i+=1)h(c[i]);g=!0}},o(r){c=c.filter(Boolean);for(let i=0;i<c.length;i+=1)q(c[i]);g=!1},d(r){r&&k(e),K(c,r)}}}function ee(l,e,o){let t,s,n;P(l,L,_=>o(2,t=_)),P(l,M,_=>o(3,s=_)),P(l,N,_=>o(0,n=_));const u=[{title:n("onboard.create_community"),body:n("onboard.create_community_desc"),onPress:()=>s(t("/community-create"))},{title:n("onboard.see_communities"),body:n("onboard.see_communities_desc"),onPress:()=>s(t("/communities"))}];return[n,u]}class re extends x{constructor(e){super();z(this,e,ee,Z,A,{})}}export{re as default};
