import{S as q,i as F,s as K,a as O,C as b,e as v,o as j,v as A,d as o,O as B,f as G,p as f,z as H,D as w,E,F as S,x as I,t as z,h as T,j as J,K as L}from"./vendor.6c99d5e3.js";function M(t){O(t,"svelte-1jukyxp",`.container.svelte-1jukyxp.svelte-1jukyxp{display:grid;grid-template-rows:1fr -webkit-min-content;grid-template-rows:1fr min-content;grid-row-gap:10px;grid-row-gap:10px;row-gap:10px
  }.container.svelte-1jukyxp.svelte-1jukyxp:focus-within{border:1px solid var(--input-focus)}.container.svelte-1jukyxp .input-wrapper.svelte-1jukyxp{border:1px solid var(--border) !important;box-sizing:border-box;border-radius:4px;grid-auto-flow:column;display:grid;align-items:center}.container.svelte-1jukyxp input.svelte-1jukyxp{background-color:var(--background-color);color:var(--text);caret-color:var(--text);text-transform:none;font-size:14px;font-size:14px;padding:12px 16px;font-family:inherit;border:none
    }.container.svelte-1jukyxp input.svelte-1jukyxp:focus{outline:none}.container.svelte-1jukyxp input.svelte-1jukyxp:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--paper) inset !important;-webkit-text-fill-color:var(--text) !important}.container.svelte-1jukyxp .errorText.svelte-1jukyxp{color:red;font-size:14px;font-size:14px;display:grid;justify-self:start}`)}const N=t=>({}),C=t=>({}),P=t=>({}),D=t=>({});function Q(t){let l,i,x,r,g,y,c,d,_,s,m,k;const n=t[8].leftElement,a=b(n,t,t[7],D),h=t[8].rightElement,u=b(h,t,t[7],C);return{c(){l=v("div"),i=v("div"),a&&a.c(),x=j(),r=v("input"),g=j(),u&&u.c(),y=j(),c=v("div"),d=v("span"),_=A(t[4]),o(r,"style",t[3]),o(r,"type",t[1]),o(r,"placeholder",t[0]),o(r,"class","svelte-1jukyxp"),o(i,"class","input-wrapper svelte-1jukyxp"),B(d,"margin-left","15px"),o(c,"class","errorText svelte-1jukyxp"),o(l,"class","container svelte-1jukyxp"),o(l,"style",t[2])},m(e,p){G(e,l,p),f(l,i),a&&a.m(i,null),f(i,x),f(i,r),f(i,g),u&&u.m(i,null),f(l,y),f(l,c),f(c,d),f(d,_),s=!0,m||(k=H(r,"input",t[5]),m=!0)},p(e,[p]){a&&a.p&&(!s||p&128)&&w(a,n,e,e[7],s?S(n,e[7],p,P):E(e[7]),D),(!s||p&8)&&o(r,"style",e[3]),(!s||p&2)&&o(r,"type",e[1]),(!s||p&1)&&o(r,"placeholder",e[0]),u&&u.p&&(!s||p&128)&&w(u,h,e,e[7],s?S(h,e[7],p,N):E(e[7]),C),(!s||p&16)&&I(_,e[4]),(!s||p&4)&&o(l,"style",e[2])},i(e){s||(z(a,e),z(u,e),s=!0)},o(e){T(a,e),T(u,e),s=!1},d(e){e&&J(l),a&&a.d(e),u&&u.d(e),m=!1,k()}}}function R(t,l,i){let{$$slots:x={},$$scope:r}=l,{placeholder:g=""}=l,{type:y="text"}=l,{containerStyle:c=""}=l,{inputStyle:d=""}=l,{errorText:_=""}=l,{value:s=""}=l;const m=L(),k=n=>{i(6,s=/^(number|range)$/.exec(y)?+n.target.value:n.target.value),m("changed",s)};return t.$$set=n=>{"placeholder"in n&&i(0,g=n.placeholder),"type"in n&&i(1,y=n.type),"containerStyle"in n&&i(2,c=n.containerStyle),"inputStyle"in n&&i(3,d=n.inputStyle),"errorText"in n&&i(4,_=n.errorText),"value"in n&&i(6,s=n.value),"$$scope"in n&&i(7,r=n.$$scope)},[g,y,c,d,_,k,s,r,x]}class V extends q{constructor(l){super();F(this,l,R,Q,K,{placeholder:0,type:1,containerStyle:2,inputStyle:3,errorText:4,value:6},M)}}export{V as E};
