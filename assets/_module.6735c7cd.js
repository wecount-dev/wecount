import{S as z,i as B,s as U,a as P,e as f,b as x,o as S,d as u,f as y,g as h,p as d,t as _,h as b,j as k,k as w,q as $,r as N,u as T,X as G,v as D,x as E,y as F,n as I,z as K,A as O,B as Q,C as R,D as V,E as W,F as Y}from"./vendor.b98bd16b.js";import{u as H}from"./index.88170bfb.js";import{S as Z,a as ee,b as te}from"./icons.68ec2dd0.js";import{B as J}from"./button.ae34cc20.js";import{U as se}from"./user-image.be24a4b7.js";function ne(n){P(n,"svelte-1fe6e2t",".button{min-width:80px}.container.svelte-1fe6e2t{display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:center;align-items:center}")}function le(n){let e,s=n[2]("login")+"",t;return{c(){e=f("div"),t=D(s),u(e,"class","body3")},m(l,i){y(l,e,i),d(e,t)},p(l,i){i&4&&s!==(s=l[2]("login")+"")&&E(t,s)},d(l){l&&k(e)}}}function re(n){let e,s=n[2]("auth.sign-up.title")+"",t;return{c(){e=f("div"),t=D(s),u(e,"class","body3")},m(l,i){y(l,e,i),d(e,t)},p(l,i){i&4&&s!==(s=l[2]("auth.sign-up.title")+"")&&E(t,s)},d(l){l&&k(e)}}}function ie(n){let e,s,t,l,i;return s=new J({props:{style:"margin-right: 8px;",class:"button",$$slots:{default:[le]},$$scope:{ctx:n}}}),s.$on("click",n[3]),l=new J({props:{primary:!0,class:"button",$$slots:{default:[re]},$$scope:{ctx:n}}}),l.$on("click",n[4]),{c(){e=f("div"),x(s.$$.fragment),t=S(),x(l.$$.fragment),u(e,"class","container svelte-1fe6e2t")},m(c,o){y(c,e,o),h(s,e,null),d(e,t),h(l,e,null),i=!0},p(c,[o]){const r={};o&36&&(r.$$scope={dirty:o,ctx:c}),s.$set(r);const a={};o&36&&(a.$$scope={dirty:o,ctx:c}),l.$set(a)},i(c){i||(_(s.$$.fragment,c),_(l.$$.fragment,c),i=!0)},o(c){b(s.$$.fragment,c),b(l.$$.fragment,c),i=!1},d(c){c&&k(e),w(s),w(l)}}}function ae(n,e,s){let t,l,i;return $(n,N,r=>s(0,t=r)),$(n,T,r=>s(1,l=r)),$(n,G,r=>s(2,i=r)),[t,l,i,()=>{t(l("/auth/sign-in"))},()=>{t(l("/auth/sign-up"))}]}class oe extends z{constructor(e){super();B(this,e,ae,ie,U,{},ne)}}function ce(n){P(n,"svelte-1x74q3f",".profile-loayout.svelte-1x74q3f{display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center}.image.svelte-1x74q3f{margin-right:6px}p.svelte-1x74q3f{margin:0}")}function ue(n){let e,s,t,l,i,c,o;return t=new se({props:{src:n[1],style:"width: 42px; height: 42px;",alt:n[0].substring(0,1)}}),{c(){e=f("div"),s=f("div"),x(t.$$.fragment),l=S(),i=f("p"),c=D(n[0]),u(s,"class","image svelte-1x74q3f"),u(i,"class","svelte-1x74q3f"),u(e,"class","profile-loayout svelte-1x74q3f")},m(r,a){y(r,e,a),d(e,s),h(t,s,null),d(e,l),d(e,i),d(i,c),o=!0},p(r,[a]){const g={};a&2&&(g.src=r[1]),a&1&&(g.alt=r[0].substring(0,1)),t.$set(g),(!o||a&1)&&E(c,r[0])},i(r){o||(_(t.$$.fragment,r),o=!0)},o(r){b(t.$$.fragment,r),o=!1},d(r){r&&k(e),w(t)}}}function de(n,e,s){let{name:t=""}=e,{imageSrc:l}=e;return n.$$set=i=>{"name"in i&&s(0,t=i.name),"imageSrc"in i&&s(1,l=i.imageSrc)},[t,l]}class fe extends z{constructor(e){super();B(this,e,de,ue,U,{name:0,imageSrc:1},ce)}}function ge(n){P(n,"svelte-1swg2g5",`.search-layout.svelte-1swg2g5{display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;background-color:var(--paper);height:27px;border-radius:1000px;padding:8px 12px}input.svelte-1swg2g5{background-color:transparent;border:none;margin-bottom:0px;width:170px;font-size:14px;font-size:0.875rem;color:var(--gray60)
  }input.svelte-1swg2g5:focus{outline:none}.search-button.svelte-1swg2g5{cursor:pointer;padding:3px}`)}function pe(n){let e,s,t,l,i,c,o;return{c(){e=f("div"),s=f("input"),l=S(),i=f("div"),c=f("img"),u(s,"type","text"),u(s,"placeholder",t=n[0]("header.explore_community")),u(s,"class","svelte-1swg2g5"),F(c.src,o=Z)||u(c,"src",o),u(c,"alt","search"),u(i,"class","search-button svelte-1swg2g5"),u(e,"class","search-layout svelte-1swg2g5")},m(r,a){y(r,e,a),d(e,s),d(e,l),d(e,i),d(i,c)},p(r,[a]){a&1&&t!==(t=r[0]("header.explore_community"))&&u(s,"placeholder",t)},i:I,o:I,d(r){r&&k(e)}}}function me(n,e,s){let t;return $(n,G,l=>s(0,t=l)),[t]}class ve extends z{constructor(e){super();B(this,e,me,pe,U,{},ge)}}function _e(n){P(n,"svelte-8ru1i2",`.manipulation.svelte-8ru1i2{display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:end}.search.svelte-8ru1i2,.notification.svelte-8ru1i2{margin-right:25px}@media(max-width: 640px){.search.svelte-8ru1i2{display:none
  }}.profile.svelte-8ru1i2{cursor:pointer}`)}function be(n){var m,j;let e,s,t,l,i,c,o,r,a,g,q,v,A;return t=new ve({}),g=new fe({props:{name:((m=n[0])==null?void 0:m.displayName)||"",imageSrc:((j=n[0])==null?void 0:j.avatarUrl)||""}}),{c(){e=f("div"),s=f("div"),x(t.$$.fragment),l=S(),i=f("div"),c=f("img"),r=S(),a=f("div"),x(g.$$.fragment),u(s,"class","search svelte-8ru1i2"),F(c.src,o=ee)||u(c,"src",o),u(c,"alt","logo"),u(i,"class","notification svelte-8ru1i2"),u(a,"class","profile svelte-8ru1i2"),u(e,"class","manipulation svelte-8ru1i2")},m(p,C){y(p,e,C),d(e,s),h(t,s,null),d(e,l),d(e,i),d(i,c),d(e,r),d(e,a),h(g,a,null),q=!0,v||(A=K(a,"click",n[1]),v=!0)},p(p,[C]){var L,X;const M={};C&1&&(M.name=((L=p[0])==null?void 0:L.displayName)||""),C&1&&(M.imageSrc=((X=p[0])==null?void 0:X.avatarUrl)||""),g.$set(M)},i(p){q||(_(t.$$.fragment,p),_(g.$$.fragment,p),q=!0)},o(p){b(t.$$.fragment,p),b(g.$$.fragment,p),q=!1},d(p){p&&k(e),w(t),w(g),v=!1,A()}}}function $e(n,e,s){let t,l,i;return $(n,T,o=>s(2,t=o)),$(n,N,o=>s(3,l=o)),$(n,H,o=>s(0,i=o)),[i,()=>{if(i){l(t("/profile"));return}l(t("/auth/sign-in"))}]}class xe extends z{constructor(e){super();B(this,e,$e,be,U,{},_e)}}function ye(n){P(n,"svelte-gk9d34",`nav.svelte-gk9d34.svelte-gk9d34{background-color:var(--background-color);border-bottom:solid 1px;border-bottom-color:var(--primary-light);display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;align-items:center}.layout.svelte-gk9d34.svelte-gk9d34{width:1200px;padding:0px 13px;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:space-between
  }@media(max-width: 1200px){.layout.svelte-gk9d34.svelte-gk9d34{width:100%
  }}.layout.svelte-gk9d34 img.svelte-gk9d34{width:36px}.layout.svelte-gk9d34 .nav-menu.svelte-gk9d34{display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content:flex-end}`)}function he(n){let e,s;return e=new oe({}),{c(){x(e.$$.fragment)},m(t,l){h(e,t,l),s=!0},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function ke(n){let e,s;return e=new xe({}),{c(){x(e.$$.fragment)},m(t,l){h(e,t,l),s=!0},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){b(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function we(n){let e,s,t,l,i,c,o,r,a,g;const q=[ke,he],v=[];function A(m,j){return m[0]?0:1}return r=A(n),a=v[r]=q[r](n),{c(){e=f("nav"),s=f("div"),t=f("a"),l=f("img"),c=S(),o=f("div"),a.c(),F(l.src,i=te)||u(l,"src",i),u(l,"alt","logo"),u(l,"class","svelte-gk9d34"),u(t,"href","/"),u(o,"class","nav-menu svelte-gk9d34"),u(s,"class","layout svelte-gk9d34"),u(e,"class","svelte-gk9d34")},m(m,j){y(m,e,j),d(e,s),d(s,t),d(t,l),d(s,c),d(s,o),v[r].m(o,null),g=!0},p(m,[j]){let p=r;r=A(m),r!==p&&(O(),b(v[p],1,1,()=>{v[p]=null}),Q(),a=v[r],a||(a=v[r]=q[r](m),a.c()),_(a,1),a.m(o,null))},i(m){g||(_(a),g=!0)},o(m){b(a),g=!1},d(m){m&&k(e),v[r].d()}}}function qe(n,e,s){let t;return $(n,H,l=>s(0,t=l)),[t]}class Se extends z{constructor(e){super();B(this,e,qe,we,U,{},ye)}}function je(n){P(n,"svelte-y5m2qx",".container.svelte-y5m2qx.svelte-y5m2qx{display:grid;grid-template-rows:56px 1fr}.container.svelte-y5m2qx .header.svelte-y5m2qx{height:56px;position:sticky;position:-webkit-sticky;top:0;z-index:99;background-color:var(--background);display:grid}.container.svelte-y5m2qx .content.svelte-y5m2qx{display:grid;overflow:auto}")}function ze(n){let e,s,t,l,i,c;t=new Se({});const o=n[1].default,r=R(o,n,n[0],null);return{c(){e=f("div"),s=f("div"),x(t.$$.fragment),l=S(),i=f("div"),r&&r.c(),u(s,"class","header svelte-y5m2qx"),u(i,"class","content svelte-y5m2qx"),u(e,"class","container svelte-y5m2qx")},m(a,g){y(a,e,g),d(e,s),h(t,s,null),d(e,l),d(e,i),r&&r.m(i,null),c=!0},p(a,[g]){r&&r.p&&(!c||g&1)&&V(r,o,a,a[0],c?Y(o,a[0],g,null):W(a[0]),null)},i(a){c||(_(t.$$.fragment,a),_(r,a),c=!0)},o(a){b(t.$$.fragment,a),b(r,a),c=!1},d(a){a&&k(e),w(t),r&&r.d(a)}}}function Be(n,e,s){let t,l;$(n,T,o=>s(2,t=o)),$(n,N,o=>s(3,l=o));let{$$slots:i={},$$scope:c}=e;return H.subscribe(o=>{o&&l(t("/"))}),n.$$set=o=>{"$$scope"in o&&s(0,c=o.$$scope)},[c,i]}class Ne extends z{constructor(e){super();B(this,e,Be,ze,U,{},je)}}export{Ne as default};
