import{S as N,i as A,s as F,a as G,C as H,e as v,o as P,v as q,d as p,N as E,f as x,p as m,z as I,D as K,E as L,F as T,x as z,t as w,h as C,j,J as U,M as V,A as J,B as M,Q as W,q as B,u as Y,r as Z,X as $,b as ee,g as te,k as le,n as S,y as O}from"./vendor.d55b4b00.js";import{u as oe}from"./index.88559a47.js";import{s as se,t as ne}from"./icons.68ec2dd0.js";function ce(o){G(o,"svelte-1evgec0",".container.svelte-1evgec0{width:250px;cursor:pointer}.card.svelte-1evgec0{width:100%;height:100%;background-color:var(--card);border:1px solid var(--gray20);box-sizing:border-box;border-radius:16px;box-shadow:0px 24px 42px rgba(0, 0, 0, .08);padding:54px 26px}.card-content.svelte-1evgec0{width:100%;height:100%;align-items:center;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;justify-content:center}")}const ie=o=>({}),Q=o=>({});function re(o){let e,t,l,n,i,r,g,c,u,f,b,k,y;const a=o[5].icon,h=H(a,o,o[4],Q);return{c(){e=v("div"),t=v("div"),l=v("div"),n=v("div"),h&&h.c(),i=P(),r=v("div"),g=q(o[1]),c=P(),u=v("div"),f=q(o[2]),p(n,"class","icon"),E(n,"margin-bottom","30px"),p(r,"class","body1"),E(r,"font-weight","bold"),p(u,"class","body3"),E(u,"margin-top","10px"),E(u,"padding","0 8px"),p(l,"class","card-content svelte-1evgec0"),p(t,"class","card svelte-1evgec0"),p(e,"class","container svelte-1evgec0"),p(e,"style",o[0])},m(s,d){x(s,e,d),m(e,t),m(t,l),m(l,n),h&&h.m(n,null),m(l,i),m(l,r),m(r,g),m(l,c),m(l,u),m(u,f),b=!0,k||(y=I(t,"click",o[3]),k=!0)},p(s,[d]){h&&h.p&&(!b||d&16)&&K(h,a,s,s[4],b?T(a,s[4],d,ie):L(s[4]),Q),(!b||d&2)&&z(g,s[1]),(!b||d&4)&&z(f,s[2]),(!b||d&1)&&p(e,"style",s[0])},i(s){b||(w(h,s),b=!0)},o(s){C(h,s),b=!1},d(s){s&&j(e),h&&h.d(s),k=!1,y()}}}function ae(o,e,t){let{$$slots:l={},$$scope:n}=e,{style:i=""}=e,{title:r=""}=e,{body:g=""}=e;const c=U();function u(){c("click")}return o.$$set=f=>{"style"in f&&t(0,i=f.style),"title"in f&&t(1,r=f.title),"body"in f&&t(2,g=f.body),"$$scope"in f&&t(4,n=f.$$scope)},[i,r,g,u,n,l]}class de extends N{constructor(e){super();A(this,e,ae,re,F,{style:0,title:1,body:2},ce)}}function ue(o){G(o,"svelte-ucvkhk",".container.svelte-ucvkhk{padding-bottom:20px;grid-column:1fr;grid-row:1fr;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;justify-content:center;align-items:center}.greeting.svelte-ucvkhk{padding:40px 0;text-align:center;margin-bottom:70px}.card-wrapper.svelte-ucvkhk{flex-wrap:wrap;gap:24px;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center}")}function R(o,e,t){const l=o.slice();return l[5]=e[t].title,l[6]=e[t].body,l[7]=e[t].onPress,l[9]=t,l}function fe(o){let e,t;return e=new de({props:{title:o[5],body:o[6],$$slots:{icon:[ge]},$$scope:{ctx:o}}}),e.$on("click",o[7]),{c(){ee(e.$$.fragment)},m(l,n){te(e,l,n),t=!0},p(l,n){const i={};n&1024&&(i.$$scope={dirty:n,ctx:l}),e.$set(i)},i(l){t||(w(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){le(e,l)}}}function _e(o){let e;return{c(){e=v("div")},m(t,l){x(t,e,l)},p:S,i:S,o:S,d(t){t&&j(e)}}}function pe(o){let e,t;return{c(){e=v("img"),O(e.src,t=se)||p(e,"src",t),p(e,"alt","logo")},m(l,n){x(l,e,n)},p:S,d(l){l&&j(e)}}}function me(o){let e,t;return{c(){e=v("img"),O(e.src,t=ne)||p(e,"src",t),p(e,"alt","logo")},m(l,n){x(l,e,n)},p:S,d(l){l&&j(e)}}}function ge(o){let e;function t(i,r){return i[9]===0?me:pe}let n=t(o)(o);return{c(){n.c(),e=P()},m(i,r){n.m(i,r),x(i,e,r)},p(i,r){n.p(i,r)},d(i){n.d(i),i&&j(e)}}}function X(o){let e,t,l,n;const i=[_e,fe],r=[];function g(c,u){return!c[1]&&c[9]===0?0:1}return e=g(o),t=r[e]=i[e](o),{c(){t.c(),l=V()},m(c,u){r[e].m(c,u),x(c,l,u),n=!0},p(c,u){let f=e;e=g(c),e===f?r[e].p(c,u):(J(),C(r[f],1,1,()=>{r[f]=null}),M(),t=r[e],t?t.p(c,u):(t=r[e]=i[e](c),t.c()),w(t,1),t.m(l.parentNode,l))},i(c){n||(w(t),n=!0)},o(c){C(t),n=!1},d(c){r[e].d(c),c&&j(l)}}}function be(o){let e,t,l,n=o[0]("onboard.hello")+"",i,r,g,c=o[0]("onboard.welcome")+"",u,f,b,k,y=o[2],a=[];for(let s=0;s<y.length;s+=1)a[s]=X(R(o,y,s));const h=s=>C(a[s],1,1,()=>{a[s]=null});return{c(){e=v("div"),t=v("div"),l=v("div"),i=q(n),r=P(),g=v("div"),u=q(c),f=P(),b=v("div");for(let s=0;s<a.length;s+=1)a[s].c();p(l,"class","heading3"),p(g,"class","heading3"),p(t,"class","greeting svelte-ucvkhk"),p(b,"class","card-wrapper svelte-ucvkhk"),p(e,"class","container svelte-ucvkhk")},m(s,d){x(s,e,d),m(e,t),m(t,l),m(l,i),m(t,r),m(t,g),m(g,u),m(e,f),m(e,b);for(let _=0;_<a.length;_+=1)a[_].m(b,null);k=!0},p(s,[d]){if((!k||d&1)&&n!==(n=s[0]("onboard.hello")+"")&&z(i,n),(!k||d&1)&&c!==(c=s[0]("onboard.welcome")+"")&&z(u,c),d&6){y=s[2];let _;for(_=0;_<y.length;_+=1){const D=R(s,y,_);a[_]?(a[_].p(D,d),w(a[_],1)):(a[_]=X(D),a[_].c(),w(a[_],1),a[_].m(b,null))}for(J(),_=y.length;_<a.length;_+=1)h(_);M()}},i(s){if(!k){for(let d=0;d<y.length;d+=1)w(a[d]);k=!0}},o(s){a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)C(a[d]);k=!1},d(s){s&&j(e),W(a,s)}}}function ve(o,e,t){let l,n,i,r;B(o,Y,c=>t(3,l=c)),B(o,Z,c=>t(4,n=c)),B(o,$,c=>t(0,i=c)),B(o,oe,c=>t(1,r=c));const g=[{title:i("onboard.create_community"),body:i("onboard.create_community_desc"),onPress:()=>n(l("/community/create"))},{title:i("onboard.see_communities"),body:i("onboard.see_communities_desc"),onPress:()=>n(l("/community"))}];return[i,r,g]}class xe extends N{constructor(e){super();A(this,e,ve,be,F,{},ue)}}export{xe as default};
