import{S as ee,i as te,s as se,a as ne,e as y,b as Q,d as b,f as O,g as T,t as p,h as k,j as U,k as W,n as le,M as oe,o as z,p as g,A as V,B as H,Q as D,y as F,H as I,N as ie,z as G,U as re,q as L,X as ae,u as ce,r as ue,V as me,O as fe,W as de}from"./vendor.b98bd16b.js";import{h as he,i as be}from"./icons.68ec2dd0.js";import ve from"./menu.7370a545.js";import pe from"./menu-add.868ad0cf.js";import ge from"./menu-list.05bf84da.js";import{u as _e}from"./index.6017dacd.js";import{i as ye}from"./communityService.ef169de3.js";function ke(t){ne(t,"svelte-1b8vosr",`a.svelte-1b8vosr.svelte-1b8vosr{text-decoration:none;color:inherit
  }a.svelte-1b8vosr.svelte-1b8vosr:hover{opacity:0.7}.container.svelte-1b8vosr.svelte-1b8vosr{min-height:100%;position:-webkit-sticky;position:sticky;overflow:auto;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;background-color:var(--background)}aside.svelte-1b8vosr.svelte-1b8vosr{min-width:56px;padding-left:8px;z-index:2;box-shadow:2px 8px 12px var(--box-shadow12)}section.svelte-1b8vosr.svelte-1b8vosr{left:64px;z-index:100;background-color:var(--card);width:144px;box-shadow:2px 12px 12px var(--box-shadow02);transition:width 0.15s;transition-timing-function:ease-in-out}section.svelte-1b8vosr .footer.svelte-1b8vosr{height:8px;background-color:var(--background)}section.svelte-1b8vosr.svelte-1b8vosr{display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column
}@media(max-width: 640px){section.svelte-1b8vosr.svelte-1b8vosr{width:124px
  }}.close.svelte-1b8vosr.svelte-1b8vosr{visibility:hidden;width:0px}.close-arr.svelte-1b8vosr.svelte-1b8vosr{align-self:flex-end;padding:7px 12px;cursor:pointer}.menu-btn.svelte-1b8vosr.svelte-1b8vosr{height:33px;margin-top:5px;margin-right:8px;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;align-items:center}.hidden.svelte-1b8vosr.svelte-1b8vosr{visibility:hidden}`)}function J(t,n,e){const i=t.slice();return i[22]=n[e],i}function K(t,n,e){const i=t.slice();return i[25]=n[e],i}function R(t){let n,e,i,o;function v(){return t[15](t[25])}return e=new ve({props:{community:t[25],selected:t[25].id===t[5]}}),e.$on("click",v),{c(){n=y("a"),Q(e.$$.fragment),b(n,"href",i=t[9]("/community/[id]",{id:t[25].id})),b(n,"class","svelte-1b8vosr")},m(s,a){O(s,n,a),T(e,n,null),o=!0},p(s,a){t=s;const r={};a&1&&(r.community=t[25]),a&33&&(r.selected=t[25].id===t[5]),e.$set(r),(!o||a&513&&i!==(i=t[9]("/community/[id]",{id:t[25].id})))&&b(n,"href",i)},i(s){o||(p(e.$$.fragment,s),o=!0)},o(s){k(e.$$.fragment,s),o=!1},d(s){s&&U(n),W(e)}}}function Y(t){let n,e;return n=new pe({}),n.$on("click",t[13]),{c(){Q(n.$$.fragment)},m(i,o){T(n,i,o),e=!0},p:le,i(i){e||(p(n.$$.fragment,i),e=!0)},o(i){k(n.$$.fragment,i),e=!1},d(i){W(n,i)}}}function Z(t){let n,e,i=t[6],o=[];for(let s=0;s<i.length;s+=1)o[s]=$(J(t,i,s));const v=s=>k(o[s],1,1,()=>{o[s]=null});return{c(){for(let s=0;s<o.length;s+=1)o[s].c();n=oe()},m(s,a){for(let r=0;r<o.length;r+=1)o[r].m(s,a);O(s,n,a),e=!0},p(s,a){if(a&2240){i=s[6];let r;for(r=0;r<i.length;r+=1){const x=J(s,i,r);o[r]?(o[r].p(x,a),p(o[r],1)):(o[r]=$(x),o[r].c(),p(o[r],1),o[r].m(n.parentNode,n))}for(V(),r=i.length;r<o.length;r+=1)v(r);H()}},i(s){if(!e){for(let a=0;a<i.length;a+=1)p(o[a]);e=!0}},o(s){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)k(o[a]);e=!1},d(s){D(o,s),s&&U(n)}}}function $(t){let n,e,i,o,v;return e=new ge({props:{menu:t[22],selectMenu:t[11],selected:t[22].path===t[7]}}),{c(){n=y("a"),Q(e.$$.fragment),i=z(),b(n,"href",o=t[22].path),b(n,"class","svelte-1b8vosr")},m(s,a){O(s,n,a),T(e,n,null),g(n,i),v=!0},p(s,a){const r={};a&64&&(r.menu=s[22]),a&192&&(r.selected=s[22].path===s[7]),e.$set(r),(!v||a&64&&o!==(o=s[22].path))&&b(n,"href",o)},i(s){v||(p(e.$$.fragment,s),v=!0)},o(s){k(e.$$.fragment,s),v=!1},d(s){s&&U(n),W(e)}}}function we(t){let n,e,i,o,v,s,a,r,x,A,f,j,w,M,_,q,E,C,B,N,S=t[0],u=[];for(let c=0;c<S.length;c+=1)u[c]=R(K(t,S,c));const P=c=>k(u[c],1,1,()=>{u[c]=null});let l=t[8]&&Y(t),m=t[3]&&Z(t);return{c(){n=y("div"),e=y("aside"),i=y("div"),o=y("img"),s=z();for(let c=0;c<u.length;c+=1)u[c].c();a=z(),l&&l.c(),r=z(),x=y("div"),A=z(),f=y("section"),j=y("div"),w=y("img"),_=z(),m&&m.c(),q=z(),E=y("div"),F(o.src,v=he)||b(o,"src",v),b(o,"alt","menu"),b(i,"class","menu-btn svelte-1b8vosr"),I(i,"hidden",t[2]),ie(x,"height","8px"),b(e,"class","svelte-1b8vosr"),F(w.src,M=be)||b(w,"src",M),b(w,"alt","menu"),b(j,"class","close-arr svelte-1b8vosr"),b(E,"class","footer svelte-1b8vosr"),b(f,"style",t[1]),b(f,"class","svelte-1b8vosr"),I(f,"close",!t[2]),b(n,"class","container svelte-1b8vosr")},m(c,d){O(c,n,d),g(n,e),g(e,i),g(i,o),g(e,s);for(let h=0;h<u.length;h+=1)u[h].m(e,null);g(e,a),l&&l.m(e,null),g(e,r),g(e,x),g(n,A),g(n,f),g(f,j),g(j,w),g(f,_),m&&m.m(f,null),g(f,q),g(f,E),t[16](f),C=!0,B||(N=[G(i,"click",t[10]),G(j,"click",t[10])],B=!0)},p(c,[d]){if(d&4&&I(i,"hidden",c[2]),d&4641){S=c[0];let h;for(h=0;h<S.length;h+=1){const X=K(c,S,h);u[h]?(u[h].p(X,d),p(u[h],1)):(u[h]=R(X),u[h].c(),p(u[h],1),u[h].m(e,a))}for(V(),h=S.length;h<u.length;h+=1)P(h);H()}c[8]?l?(l.p(c,d),d&256&&p(l,1)):(l=Y(c),l.c(),p(l,1),l.m(e,r)):l&&(V(),k(l,1,1,()=>{l=null}),H()),c[3]?m?(m.p(c,d),d&8&&p(m,1)):(m=Z(c),m.c(),p(m,1),m.m(f,q)):m&&(V(),k(m,1,1,()=>{m=null}),H()),(!C||d&2)&&b(f,"style",c[1]),d&4&&I(f,"close",!c[2])},i(c){if(!C){for(let d=0;d<S.length;d+=1)p(u[d]);p(l),p(m),C=!0}},o(c){u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)k(u[d]);k(l),k(m),C=!1},d(c){c&&U(n),D(u,c),l&&l.d(),m&&m.d(),t[16](null),B=!1,re(N)}}}function xe(t,n,e){let i,o,v,s,a;L(t,ae,l=>e(17,i=l)),L(t,_e,l=>e(8,o=l)),L(t,ce,l=>e(9,v=l)),L(t,ue,l=>e(18,s=l)),L(t,me,l=>e(19,a=l));let{communities:r}=n,{menuStyle:x=void 0}=n,{context:A}=n,f=!1,j=f,w,M=a.id;const _=[{name:i("community.sidebar.dashboard"),path:`/community/${M}`},{name:i("community.sidebar.feeds"),path:`/community/${M}/feeds`}];let q=_[0].path;const E=()=>e(2,f=!f),C=l=>{e(7,q=l)},B=l=>{const m=e(6,_[0].path=`/community/${l}`,_);e(6,_[1].path=`/community/${l}/feeds`,_),e(6,_[2].path=`/community/${l}/settings`,_),e(5,M=l),e(7,q=m),C(m)},N=()=>s(v("/community/create")),S=()=>{w.addEventListener("transitionend",()=>{e(3,j=f)})};fe(async()=>{await ye(M,(o==null?void 0:o.id)||"")&&_.push({name:i("community.sidebar.settings"),path:`/community/${M}/settings`}),S()});const u=l=>B(l.id);function P(l){de[l?"unshift":"push"](()=>{w=l,e(4,w)})}return t.$$set=l=>{"communities"in l&&e(0,r=l.communities),"menuStyle"in l&&e(1,x=l.menuStyle),"context"in l&&e(14,A=l.context)},[r,x,f,j,w,M,_,q,o,v,E,C,B,N,A,u,P]}class Ae extends ee{constructor(n){super();te(this,n,xe,we,se,{communities:0,menuStyle:1,context:14},ke)}}export{Ae as default};
