var a=Object.defineProperty;var i=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e};import{s as o}from"./index.88170bfb.js";const f=async(e,t)=>{if(!e||!t)return console.error("no userId or community"),null;try{const{data:r,error:n}=await o.from("Community").insert([s({},t)]).single();if(n)throw n;return r&&await o.from("Permission").insert([{communityId:r.id,type:"owner",userId:e}]),r}catch(r){return console.error(r),null}},d=async(e,t)=>{try{const{data:r,error:n}=await o.from("Community").select().match({isPublic:!0}).lt("createdAt",e||new Date().toISOString()).order("createdAt",{ascending:!1}).limit(t||10);if(n)throw n;return r}catch(r){return console.error(r),null}},w=async e=>{if(!e)return[];try{const{data:t,error:r}=await o.from("Permission").select(`
        Community (
          id,
          isPublic,
          name,
          description,
          currency,
          color
        )
      `).match({userId:e}).order("createdAt",{ascending:!1});if(r)throw r;return t==null?void 0:t.map(n=>n.Community)}catch(t){return console.error(t),null}};export{d as a,f as c,w as g};
