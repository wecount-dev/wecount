import{S as R,i as S,s as C,a as E,e as d,o as x,v as U,y as A,d as c,f as D,p as l,z as y,x as k,n as z,j as I,U as J,q as L,X as P,J as T}from"./vendor.85dcdc51.js";import{c as N}from"./icons.f77e6065.js";function X(t){E(t,"svelte-11q6cni",`.register-item.svelte-11q6cni.svelte-11q6cni{display:grid;grid-auto-flow:column;height:48px;text-overflow:ellipsis;text-align:left}.register-item.svelte-11q6cni .user.svelte-11q6cni{padding-left:24px;padding-right:12px;justify-self:left;display:grid;grid-auto-flow:column;align-items:center}.register-item.svelte-11q6cni .user img.svelte-11q6cni{width:48px;height:48px;border-radius:24px;background-color:var(--disabled)}.register-item.svelte-11q6cni .user p.svelte-11q6cni{text-align:left;overflow:hidden;padding:0 16px}.register-item.svelte-11q6cni .user.svelte-11q6cni:hover{cursor:pointer;opacity:0.7}.register-item.svelte-11q6cni div.svelte-11q6cni:nth-child(2){display:grid;justify-self:right;grid-auto-flow:column}.register-item.svelte-11q6cni div:nth-child(2) p.svelte-11q6cni{display:grid;font-size:14px;font-size:0.875rem;align-items:center;text-align:center;font-weight:bold
      }.register-item.svelte-11q6cni div:nth-child(2) p.svelte-11q6cni:nth-child(1){color:var(--info)}.register-item.svelte-11q6cni div:nth-child(2) p.svelte-11q6cni:nth-child(2){color:var(--placeholder);margin-left:8px;margin-right:20px}.register-item.svelte-11q6cni div:nth-child(2) p.svelte-11q6cni:hover{cursor:pointer;opacity:0.7}`)}function B(t){let i,r,s,e,f,v,g,a,o,p=t[0]("settings.accept")+"",n,j,u,h=t[0]("settings.reject")+"",_,b,w;return{c(){i=d("div"),r=d("div"),s=d("img"),f=x(),v=d("p"),v.textContent=`${t[2]}`,g=x(),a=d("div"),o=d("p"),n=U(p),j=x(),u=d("p"),_=U(h),A(s.src,e=t[1])||c(s,"src",e),c(s,"alt",""),c(s,"class","svelte-11q6cni"),c(v,"class","svelte-11q6cni"),c(r,"class","user svelte-11q6cni"),c(o,"class","svelte-11q6cni"),c(u,"class","svelte-11q6cni"),c(a,"class","svelte-11q6cni"),c(i,"class","register-item svelte-11q6cni")},m(m,q){D(m,i,q),l(i,r),l(r,s),l(r,f),l(r,v),l(i,g),l(i,a),l(a,o),l(o,n),l(a,j),l(a,u),l(u,_),b||(w=[y(s,"error",t[3]),y(o,"click",t[4]),y(u,"click",t[5])],b=!0)},p(m,[q]){q&1&&p!==(p=m[0]("settings.accept")+"")&&k(n,p),q&1&&h!==(h=m[0]("settings.reject")+"")&&k(_,h)},i:z,o:z,d(m){m&&I(i),b=!1,J(w)}}}function F(t,i,r){let s;L(t,P,n=>r(0,s=n));let{member:e}=i;const f=(e==null?void 0:e.avatarUrlThumb)||(e==null?void 0:e.avatarUrl)||N,v=(e==null?void 0:e.displayName)||(e==null?void 0:e.name)||s("unnamed"),g=T(),a=n=>{n.target.src=N};function o(){g("accept")}function p(){g("reject")}return t.$$set=n=>{"member"in n&&r(6,e=n.member)},[s,f,v,a,o,p,e]}class K extends R{constructor(i){super();S(this,i,F,B,C,{member:6},X)}}export{K as default};
