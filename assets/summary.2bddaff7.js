import{S as xe,i as he,s as $e,a as ke,e as o,d as p,N as W,f as m,p as r,n as Y,j as f,v as $,o as w,b as Z,g as ee,z as Se,x as q,t as D,h as z,k as te,Q as Be,A as De,B as Ke,q as Ne,X as We,O as qe}from"./vendor.b98bd16b.js";import{R as ze}from"./index.0b6e20ed.js";import{d as ne}from"./functions.b4f8bb22.js";import{B as Le}from"./button.ae34cc20.js";import{C as Me}from"./community-card.93dc606e.js";import{b as Oe}from"./communityService.1ed1528a.js";import"./icons.68ec2dd0.js";import"./user-image.be24a4b7.js";function Pe(l){ke(l,"svelte-1644i2x",".container.svelte-1644i2x{width:100%;height:10px;background-color:var(--disabled);border-radius:8px}.bar.svelte-1644i2x{background-color:var(--primary);height:10px;border-radius:8px;width:var(--percentage);transition:width 1s ease}")}function Te(l){let n,a;return{c(){n=o("div"),a=o("div"),p(a,"class","bar svelte-1644i2x"),W(a,"--percentage",l[0]+"%"),p(n,"class","container svelte-1644i2x")},m(t,s){m(t,n,s),r(n,a)},p(t,[s]){s&1&&W(a,"--percentage",t[0]+"%")},i:Y,o:Y,d(t){t&&f(n)}}}function Ae(l,n,a){let{percentage:t=0}=n;return l.$$set=s=>{"percentage"in s&&a(0,t=s.percentage)},[t]}class Ee extends xe{constructor(n){super();he(this,n,Ae,Te,$e,{percentage:0},Pe)}}function Qe(l){ke(l,"svelte-2pwn59",`.container.svelte-2pwn59.svelte-2pwn59{grid-area:summary;background-color:var(--card);padding:0 20px 12px 20px;border-radius:16px;display:grid;align-items:stretch;grid-auto-flow:row;grid-column-gap:40px;-moz-column-gap:40px;-webkit-column-gap:40px;grid-column-gap:40px;column-gap:40px;grid-template-columns:330px 1fr;grid-template-rows:repeat(5, 1fr);grid-template-areas:'title title'
      'card usage'
      'card usage'
      'card usage'
      'amount sponsor'
  }@media(max-width: 640px){.container.svelte-2pwn59.svelte-2pwn59{display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;flex-direction:column;padding:12px 20px 28px 20px
  }}.container.svelte-2pwn59 div.svelte-2pwn59{display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;color:var(--text)}.container.svelte-2pwn59 .title.svelte-2pwn59{grid-area:title;padding-top:8px;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-between;flex-wrap:wrap}.container.svelte-2pwn59 .title .manage.svelte-2pwn59{cursor:pointer;color:var(--text-light)
      }.container.svelte-2pwn59 .title .manage.svelte-2pwn59:hover{color:var(--text)}@media(max-width: 640px){.container.svelte-2pwn59 .title.svelte-2pwn59{padding-bottom:8px
    }}.container.svelte-2pwn59 .usage.svelte-2pwn59{grid-area:usage;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start
    }@media(max-width: 640px){.container.svelte-2pwn59 .usage.svelte-2pwn59{margin-top:8px
    }}.container.svelte-2pwn59 .usage .head.svelte-2pwn59{align-self:stretch;border-width:3px;border-color:white;color:var(--placeholder)}.container.svelte-2pwn59 .usage hr.svelte-2pwn59{border:1px solid var(--placeholder);width:100%}.container.svelte-2pwn59 .usage .price.svelte-2pwn59{margin:6px 0;align-self:flex-end;color:var(--price)}.container.svelte-2pwn59 .amount.svelte-2pwn59{grid-area:amount;padding-top:16px;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;flex-direction:column}.container.svelte-2pwn59 .amount .placeholder.svelte-2pwn59{color:var(--placeholder)}.container.svelte-2pwn59 .amount .current.svelte-2pwn59{align-self:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:space-between}.container.svelte-2pwn59 .sponsor.svelte-2pwn59{grid-area:sponsor}.container.svelte-2pwn59 .sponsor .body3.svelte-2pwn59{color:white;font-weight:bold}`)}function je(l,n,a){const t=l.slice();return t[7]=n[a],t}function Re(l){var ce,de,ue,me;let n,a,t=l[0].name+"",s,c,u,g=l[3]("manage")+"",K,L,y,Q,k,j,M,X,b,O,P=l[3]("recent_history")+"",F,le,G,se,H,R,C,ae,U,T,A=l[3]("remaining_amount")+"",I,re,S,E,ie,Ue=ne({price:4e5,currency:"KRW",currencyDisplay:null,style:null})+"",oe,J,N,x,h,V,pe;k=new Me({props:{style:"grid-area: card;",name:((ce=l[1])==null?void 0:ce.name)||((de=l[1])==null?void 0:de.displayName)||"",currency:l[0].currency,description:l[0].description,balance:1e5,profileURL:((ue=l[1])==null?void 0:ue.avatarUrlThumb)||((me=l[1])==null?void 0:me.avatarUrl)||""}});let B=l[4],d=[];for(let e=0;e<B.length;e+=1)d[e]=Ce(je(l,B,e));return C=new Ee({props:{percentage:l[2]}}),x=new Le({props:{primary:!0,type:"submit",style:"flex: 1;",$$slots:{default:[Xe]},$$scope:{ctx:l}}}),x.$on("click",l[6]),{c(){n=o("div"),a=o("div"),s=$(t),c=w(),u=o("div"),K=$(g),L=w(),y=o("i"),y.textContent="chevron_right",Q=w(),j=o("div"),Z(k.$$.fragment),X=w(),b=o("div"),O=o("div"),F=$(P),le=w(),G=o("hr"),se=w();for(let e=0;e<d.length;e+=1)d[e].c();H=w(),R=o("div"),Z(C.$$.fragment),ae=w(),U=o("div"),T=o("div"),I=$(A),re=w(),S=o("div"),E=o("pre"),E.textContent=`${ne({price:1e5,currency:"KRW",currencyDisplay:null,style:null})}`,ie=$(`
          \xA0/\xA0
          `),oe=$(Ue),J=w(),N=o("div"),Z(x.$$.fragment),p(a,"class","body1 svelte-2pwn59"),p(y,"class","material-icons md-18"),p(u,"class","manage body3 svelte-2pwn59"),p(n,"class","title svelte-2pwn59"),W(j,"display","contents"),W(j,"--color",M=l[0].color),p(O,"class","head body3 svelte-2pwn59"),p(G,"class","svelte-2pwn59"),p(b,"class","usage svelte-2pwn59"),p(T,"class","body3 placeholder svelte-2pwn59"),p(E,"class","placeholder svelte-2pwn59"),p(S,"class","body3 svelte-2pwn59"),p(U,"class","current svelte-2pwn59"),p(R,"class","amount svelte-2pwn59"),p(N,"class","sponsor svelte-2pwn59")},m(e,i){m(e,n,i),r(n,a),r(a,s),r(n,c),r(n,u),r(u,K),r(u,L),r(u,y),m(e,Q,i),m(e,j,i),ee(k,j,null),m(e,X,i),m(e,b,i),r(b,O),r(O,F),r(b,le),r(b,G),r(b,se);for(let _=0;_<d.length;_+=1)d[_].m(b,null);m(e,H,i),m(e,R,i),ee(C,R,null),r(R,ae),r(R,U),r(U,T),r(T,I),r(U,re),r(U,S),r(S,E),r(S,ie),r(S,oe),m(e,J,i),m(e,N,i),ee(x,N,null),h=!0,V||(pe=Se(u,"click",l[5]),V=!0)},p(e,i){var we,ge,be,ye;(!h||i&1)&&t!==(t=e[0].name+"")&&q(s,t),(!h||i&8)&&g!==(g=e[3]("manage")+"")&&q(K,g),i&1&&M!==(M=e[0].color)&&W(j,"--color",M);const _={};if(i&2&&(_.name=((we=e[1])==null?void 0:we.name)||((ge=e[1])==null?void 0:ge.displayName)||""),i&1&&(_.currency=e[0].currency),i&1&&(_.description=e[0].description),i&2&&(_.profileURL=((be=e[1])==null?void 0:be.avatarUrlThumb)||((ye=e[1])==null?void 0:ye.avatarUrl)||""),k.$set(_),(!h||i&8)&&P!==(P=e[3]("recent_history")+"")&&q(F,P),i&16){B=e[4];let v;for(v=0;v<B.length;v+=1){const _e=je(e,B,v);d[v]?d[v].p(_e,i):(d[v]=Ce(_e),d[v].c(),d[v].m(b,null))}for(;v<d.length;v+=1)d[v].d(1);d.length=B.length}const fe={};i&4&&(fe.percentage=e[2]),C.$set(fe),(!h||i&8)&&A!==(A=e[3]("remaining_amount")+"")&&q(I,A);const ve={};i&1032&&(ve.$$scope={dirty:i,ctx:e}),x.$set(ve)},i(e){h||(D(k.$$.fragment,e),D(C.$$.fragment,e),D(x.$$.fragment,e),h=!0)},o(e){z(k.$$.fragment,e),z(C.$$.fragment,e),z(x.$$.fragment,e),h=!1},d(e){e&&f(n),e&&f(Q),e&&f(j),te(k,e),e&&f(X),e&&f(b),Be(d,e),e&&f(H),e&&f(R),te(C),e&&f(J),e&&f(N),te(x),V=!1,pe()}}}function Ce(l){let n,a=ne({price:l[7],currency:"KRW"})+"",t,s,c;return{c(){n=o("div"),t=$(a),s=w(),p(n,"class","body3 price svelte-2pwn59"),p(n,"style",c=`--price: ${l[7]<0?ze:""};`)},m(u,g){m(u,n,g),r(n,t),r(n,s)},p:Y,d(u){u&&f(n)}}}function Xe(l){let n,a=l[3]("sponsor")+"",t;return{c(){n=o("div"),t=$(a),p(n,"class","body3 svelte-2pwn59")},m(s,c){m(s,n,c),r(n,t)},p(s,c){c&8&&a!==(a=s[3]("sponsor")+"")&&q(t,a)},d(s){s&&f(n)}}}function Fe(l){let n,a,t=l[0]&&Re(l);return{c(){n=o("div"),t&&t.c(),p(n,"class","container svelte-2pwn59")},m(s,c){m(s,n,c),t&&t.m(n,null),a=!0},p(s,[c]){s[0]?t?(t.p(s,c),c&1&&D(t,1)):(t=Re(s),t.c(),D(t,1),t.m(n,null)):t&&(De(),z(t,1,1,()=>{t=null}),Ke())},i(s){a||(D(t),a=!0)},o(s){z(t),a=!1},d(s){s&&f(n),t&&t.d()}}}function Ge(l,n,a){let t;Ne(l,We,y=>a(3,t=y));let{community:s=null}=n,c;const u=[4e5,-3e5,4e5,14e5,14e5];let g=20;const K=()=>{console.log("click manage")},L=()=>{g>=100||a(2,g+=10)};return qe(async()=>{s&&a(1,c=await Oe(s.id))}),l.$$set=y=>{"community"in y&&a(0,s=y.community)},[s,c,g,t,u,K,L]}class nt extends xe{constructor(n){super();he(this,n,Ge,Fe,$e,{community:0},Qe)}}export{nt as default};
