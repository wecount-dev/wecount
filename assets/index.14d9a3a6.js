import{S as R,i as Y,s as Z,a as $,e as M,b as I,d as h,f as L,g as N,t as g,h as j,j as O,k as P,n as ee,M as te,o as z,p as k,A as U,B as V,Q,y as T,H,z as W,U as ne,q as A,X as le,u as se,r as ie,V as oe,O as ae,W as re}from"./vendor.b98bd16b.js";import{h as ce,i as ue}from"./icons.68ec2dd0.js";import me from"./menu.7370a545.js";import fe from"./menu-add.868ad0cf.js";import pe from"./menu-list.05bf84da.js";import{u as de}from"./index.00e0840c.js";import{i as he}from"./communityService.0c020587.js";function _e(t){$(t,"svelte-jp932t",`a.svelte-jp932t{text-decoration:none;color:inherit
  }a.svelte-jp932t:hover{opacity:0.7}.container.svelte-jp932t{height:100%;position:-webkit-sticky;position:sticky;overflow:auto;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;background-color:var(--background)}aside.svelte-jp932t{min-width:56px;padding-left:8px;z-index:2;box-shadow:2px 8px 12px var(--box-shadow12)}section.svelte-jp932t{position:fixed;left:70px;position:100;overflow:auto;background-color:var(--card);width:144px;box-shadow:2px 12px 12px var(--box-shadow02);transition:width 0.15s;transition-timing-function:ease-in-out;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column
  }@media(max-width: 640px){section.svelte-jp932t{width:124px
  }}.close.svelte-jp932t{visibility:hidden;width:0px}.close-arr.svelte-jp932t{align-self:flex-end;padding:7px 12px;cursor:pointer}.menu-btn.svelte-jp932t{height:33px;margin-top:5px;margin-right:8px;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;align-items:center}.hidden.svelte-jp932t{visibility:hidden}`)}function X(t,l,e){const o=t.slice();return o[22]=l[e],o}function D(t,l,e){const o=t.slice();return o[25]=l[e],o}function F(t){let l,e,o,i;function _(){return t[15](t[25])}return e=new me({props:{community:t[25],selected:t[25].id===t[5]}}),e.$on("click",_),{c(){l=M("a"),I(e.$$.fragment),h(l,"href",o=t[9]("/community/[id]",{id:t[25].id})),h(l,"class","svelte-jp932t")},m(n,r){L(n,l,r),N(e,l,null),i=!0},p(n,r){t=n;const a={};r&1&&(a.community=t[25]),r&33&&(a.selected=t[25].id===t[5]),e.$set(a),(!i||r&513&&o!==(o=t[9]("/community/[id]",{id:t[25].id})))&&h(l,"href",o)},i(n){i||(g(e.$$.fragment,n),i=!0)},o(n){j(e.$$.fragment,n),i=!1},d(n){n&&O(l),P(e)}}}function G(t){let l,e;return l=new fe({}),l.$on("click",t[13]),{c(){I(l.$$.fragment)},m(o,i){N(l,o,i),e=!0},p:ee,i(o){e||(g(l.$$.fragment,o),e=!0)},o(o){j(l.$$.fragment,o),e=!1},d(o){P(l,o)}}}function J(t){let l,e,o=t[6],i=[];for(let n=0;n<o.length;n+=1)i[n]=K(X(t,o,n));const _=n=>j(i[n],1,1,()=>{i[n]=null});return{c(){for(let n=0;n<i.length;n+=1)i[n].c();l=te()},m(n,r){for(let a=0;a<i.length;a+=1)i[a].m(n,r);L(n,l,r),e=!0},p(n,r){if(r&2240){o=n[6];let a;for(a=0;a<o.length;a+=1){const d=X(n,o,a);i[a]?(i[a].p(d,r),g(i[a],1)):(i[a]=K(d),i[a].c(),g(i[a],1),i[a].m(l.parentNode,l))}for(U(),a=o.length;a<i.length;a+=1)_(a);V()}},i(n){if(!e){for(let r=0;r<o.length;r+=1)g(i[r]);e=!0}},o(n){i=i.filter(Boolean);for(let r=0;r<i.length;r+=1)j(i[r]);e=!1},d(n){Q(i,n),n&&O(l)}}}function K(t){let l,e,o,i,_;return e=new pe({props:{menu:t[22],selectMenu:t[11],selected:t[22].path===t[7]}}),{c(){l=M("a"),I(e.$$.fragment),o=z(),h(l,"href",i=t[22].path),h(l,"class","svelte-jp932t")},m(n,r){L(n,l,r),N(e,l,null),k(l,o),_=!0},p(n,r){const a={};r&64&&(a.menu=n[22]),r&192&&(a.selected=n[22].path===n[7]),e.$set(a),(!_||r&64&&i!==(i=n[22].path))&&h(l,"href",i)},i(n){_||(g(e.$$.fragment,n),_=!0)},o(n){j(e.$$.fragment,n),_=!1},d(n){n&&O(l),P(e)}}}function ge(t){let l,e,o,i,_,n,r,a,d,S,v,q,x,y,b,C,w=t[0],u=[];for(let c=0;c<w.length;c+=1)u[c]=F(D(t,w,c));const E=c=>j(u[c],1,1,()=>{u[c]=null});let f=t[8]&&G(t),p=t[3]&&J(t);return{c(){l=M("div"),e=M("aside"),o=M("div"),i=M("img"),n=z();for(let c=0;c<u.length;c+=1)u[c].c();r=z(),f&&f.c(),a=z(),d=M("section"),S=M("div"),v=M("img"),x=z(),p&&p.c(),T(i.src,_=ce)||h(i,"src",_),h(i,"alt","menu"),h(o,"class","menu-btn svelte-jp932t"),H(o,"hidden",t[2]),h(e,"class","svelte-jp932t"),T(v.src,q=ue)||h(v,"src",q),h(v,"alt","menu"),h(S,"class","close-arr svelte-jp932t"),h(d,"style",t[1]),h(d,"class","svelte-jp932t"),H(d,"close",!t[2]),h(l,"class","container svelte-jp932t")},m(c,m){L(c,l,m),k(l,e),k(e,o),k(o,i),k(e,n);for(let s=0;s<u.length;s+=1)u[s].m(e,null);k(e,r),f&&f.m(e,null),k(l,a),k(l,d),k(d,S),k(S,v),k(d,x),p&&p.m(d,null),t[16](d),y=!0,b||(C=[W(o,"click",t[10]),W(S,"click",t[10])],b=!0)},p(c,[m]){if(m&4&&H(o,"hidden",c[2]),m&4641){w=c[0];let s;for(s=0;s<w.length;s+=1){const B=D(c,w,s);u[s]?(u[s].p(B,m),g(u[s],1)):(u[s]=F(B),u[s].c(),g(u[s],1),u[s].m(e,r))}for(U(),s=w.length;s<u.length;s+=1)E(s);V()}c[8]?f?(f.p(c,m),m&256&&g(f,1)):(f=G(c),f.c(),g(f,1),f.m(e,null)):f&&(U(),j(f,1,1,()=>{f=null}),V()),c[3]?p?(p.p(c,m),m&8&&g(p,1)):(p=J(c),p.c(),g(p,1),p.m(d,null)):p&&(U(),j(p,1,1,()=>{p=null}),V()),(!y||m&2)&&h(d,"style",c[1]),m&4&&H(d,"close",!c[2])},i(c){if(!y){for(let m=0;m<w.length;m+=1)g(u[m]);g(f),g(p),y=!0}},o(c){u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)j(u[m]);j(f),j(p),y=!1},d(c){c&&O(l),Q(u,c),f&&f.d(),p&&p.d(),t[16](null),b=!1,ne(C)}}}function be(t,l,e){let o,i,_,n,r;A(t,le,s=>e(17,o=s)),A(t,de,s=>e(8,i=s)),A(t,se,s=>e(9,_=s)),A(t,ie,s=>e(18,n=s)),A(t,oe,s=>e(19,r=s));let{communities:a}=l,{menuStyle:d=void 0}=l,{context:S}=l,v=!1,q=v,x,y=r.id;const b=[{name:o("community.sidebar.dashboard"),path:`/community/${y}`},{name:o("community.sidebar.feeds"),path:`/community/${y}/feeds`}];let C=b[0].path;const w=()=>e(2,v=!v),u=s=>{e(7,C=s)},E=s=>{const B=e(6,b[0].path=`/community/${s}`,b);e(6,b[1].path=`/community/${s}/feeds`,b),e(6,b[2].path=`/community/${s}/settings`,b),e(5,y=s),e(7,C=B),u(B)},f=()=>n(_("/community/create")),p=()=>{x.addEventListener("transitionend",()=>{e(3,q=v)})};ae(async()=>{await he(y,(i==null?void 0:i.id)||"")&&b.push({name:o("community.sidebar.settings"),path:`/community/${y}/settings`}),p()});const c=s=>E(s.id);function m(s){re[s?"unshift":"push"](()=>{x=s,e(4,x)})}return t.$$set=s=>{"communities"in s&&e(0,a=s.communities),"menuStyle"in s&&e(1,d=s.menuStyle),"context"in s&&e(14,S=s.context)},[a,d,v,q,x,y,b,C,i,_,w,u,E,f,S,c,m]}class xe extends R{constructor(l){super();Y(this,l,be,ge,Z,{communities:0,menuStyle:1,context:14},_e)}}export{xe as default};
