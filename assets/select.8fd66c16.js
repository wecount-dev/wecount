import{S as K,i as N,s as P,a as R,C as T,e as w,d,f as E,t as p,o as D,v as j,p as v,z as q,a0 as A,b as U,g as V,h as b,k as W,A as B,B as O,x as L,j as z,Q as X,D as Y,E as Z,F as x,J as $,O as ee,a1 as te,y as le,n as ne}from"./vendor.85dcdc51.js";import{g as oe,n as ie}from"./icons.f77e6065.js";function se(o){R(o,"svelte-63ksk7",`.container.svelte-63ksk7{position:relative}.selector.svelte-63ksk7{display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:row;align-items:center;minwidth:120px;height:36px;padding:0 12px;border:1px solid;border-color:var(--border);box-sizing:border-box;border-radius:4px;background-color:var(--background)
  }.selector.svelte-63ksk7:hover{cursor:pointer}.title.svelte-63ksk7{flex:1;font-size:14px;margin-right:20px;overflow:hidden}.options-container.svelte-63ksk7{top:0;left:0;background-color:var(--paper);width:100%;position:absolute;box-shadow:0px 4px 10px 0px rgba(196, 196, 196, .5);border-radius:4px;overflow:hidden;z-index:99}.option.svelte-63ksk7{height:36px;display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;padding-left:12px;font-size:14px
  }.option.svelte-63ksk7:hover{cursor:pointer;background-color:var(--paper)}`)}function F(o,e,l){const s=o.slice();return s[17]=e[l],s}const ae=o=>({}),J=o=>({});function re(o){let e,l;return{c(){e=w("img"),le(e.src,l=ie)||d(e,"src",l),d(e,"alt","arrow-down")},m(s,t){E(s,e,t)},p:ne,d(s){s&&z(e)}}}function M(o){let e,l,s=o[2],t=[];for(let n=0;n<s.length;n+=1)t[n]=G(F(o,s,n));const h=n=>b(t[n],1,1,()=>{t[n]=null});return{c(){e=w("div");for(let n=0;n<t.length;n+=1)t[n].c();d(e,"style",o[7]),d(e,"class","options-container svelte-63ksk7")},m(n,c){E(n,e,c);for(let i=0;i<t.length;i+=1)t[i].m(e,null);l=!0},p(n,c){if(c&1294){s=n[2];let i;for(i=0;i<s.length;i+=1){const a=F(n,s,i);t[i]?(t[i].p(a,c),p(t[i],1)):(t[i]=G(a),t[i].c(),p(t[i],1),t[i].m(e,null))}for(B(),i=s.length;i<t.length;i+=1)h(i);O()}(!l||c&128)&&d(e,"style",n[7])},i(n){if(!l){for(let c=0;c<s.length;c+=1)p(t[c]);l=!0}},o(n){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)b(t[c]);l=!1},d(n){n&&z(e),X(t,n)}}}function Q(o){var s;let e,l;return e=new oe({props:{width:34,fill:((s=o[1])==null?void 0:s.includes(o[17]))?"#0DB293":"none"}}),{c(){U(e.$$.fragment)},m(t,h){V(e,t,h),l=!0},p(t,h){var c;const n={};h&6&&(n.fill=((c=t[1])==null?void 0:c.includes(t[17]))?"#0DB293":"none"),e.$set(n)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){b(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function G(o){let e,l,s=o[17]+"",t,h,n,c,i,a=o[3]&&Q(o);function y(){return o[14](o[17])}return{c(){e=w("div"),a&&a.c(),l=D(),t=j(s),h=D(),d(e,"style",o[8]),d(e,"class","option svelte-63ksk7")},m(_,g){E(_,e,g),a&&a.m(e,null),v(e,l),v(e,t),v(e,h),n=!0,c||(i=q(e,"click",A(y)),c=!0)},p(_,g){o=_,o[3]?a?(a.p(o,g),g&8&&p(a,1)):(a=Q(o),a.c(),p(a,1),a.m(e,l)):a&&(B(),b(a,1,1,()=>{a=null}),O()),(!n||g&4)&&s!==(s=o[17]+"")&&L(t,s),(!n||g&256)&&d(e,"style",o[8])},i(_){n||(p(a),n=!0)},o(_){b(a),n=!1},d(_){_&&z(e),a&&a.d(),c=!1,i()}}}function ce(o){var S;let e,l,s,t=(((S=o[1])==null?void 0:S.length)?o[1]:o[0])+"",h,n,c,i,a,y;const _=o[13].rightElement,g=T(_,o,o[12],J),m=g||re();let u=o[9]&&M(o);return{c(){e=w("div"),l=w("div"),s=w("div"),h=j(t),n=D(),m&&m.c(),c=D(),u&&u.c(),d(s,"style",o[6]),d(s,"class","title svelte-63ksk7"),d(l,"style",o[5]),d(l,"class","selector svelte-63ksk7"),d(e,"class","container svelte-63ksk7"),d(e,"style",o[4])},m(f,k){E(f,e,k),v(e,l),v(l,s),v(s,h),v(l,n),m&&m.m(l,null),v(e,c),u&&u.m(e,null),i=!0,a||(y=q(l,"click",A(o[11])),a=!0)},p(f,[k]){var C;(!i||k&3)&&t!==(t=(((C=f[1])==null?void 0:C.length)?f[1]:f[0])+"")&&L(h,t),(!i||k&64)&&d(s,"style",f[6]),g&&g.p&&(!i||k&4096)&&Y(g,_,f,f[12],i?x(_,f[12],k,ae):Z(f[12]),J),(!i||k&32)&&d(l,"style",f[5]),f[9]?u?(u.p(f,k),k&512&&p(u,1)):(u=M(f),u.c(),p(u,1),u.m(e,null)):u&&(B(),b(u,1,1,()=>{u=null}),O()),(!i||k&16)&&d(e,"style",f[4])},i(f){i||(p(m,f),p(u),i=!0)},o(f){b(m,f),b(u),i=!1},d(f){f&&z(e),m&&m.d(f),u&&u.d(),a=!1,y()}}}function fe(o,e,l){let{$$slots:s={},$$scope:t}=e,{placeholder:h=""}=e,{value:n}=e,{options:c}=e,{multiple:i=!1}=e,{style:a=""}=e,{titleContainerStyle:y=""}=e,{titleStyle:_=""}=e,{optionContainerStyle:g=""}=e,{optionStyle:m=""}=e,u=!1;const S=$(),f=()=>{l(9,u=!1)};ee(()=>{document.addEventListener("click",f)}),te(()=>{document.removeEventListener("click",f)});const k=r=>{i?(n==null?void 0:n.includes(r))?S("change",n.filter(I=>I!==r)):S("change",[...n,r]):S("change",r),l(9,u=i)},C=()=>{l(9,u=!0)},H=r=>k(r);return o.$$set=r=>{"placeholder"in r&&l(0,h=r.placeholder),"value"in r&&l(1,n=r.value),"options"in r&&l(2,c=r.options),"multiple"in r&&l(3,i=r.multiple),"style"in r&&l(4,a=r.style),"titleContainerStyle"in r&&l(5,y=r.titleContainerStyle),"titleStyle"in r&&l(6,_=r.titleStyle),"optionContainerStyle"in r&&l(7,g=r.optionContainerStyle),"optionStyle"in r&&l(8,m=r.optionStyle),"$$scope"in r&&l(12,t=r.$$scope)},[h,n,c,i,a,y,_,g,m,u,k,C,t,s,H]}class he extends K{constructor(e){super();N(this,e,fe,ce,P,{placeholder:0,value:1,options:2,multiple:3,style:4,titleContainerStyle:5,titleStyle:6,optionContainerStyle:7,optionStyle:8},se)}}export{he as S};
