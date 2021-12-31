var c=Object.defineProperty;var i=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var s=(t,e,r)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,a=(t,e)=>{for(var r in e||(e={}))m.call(e,r)&&s(t,r,e[r]);if(i)for(var r of i(e))u.call(e,r)&&s(t,r,e[r]);return t};import{s as n}from"./index.b00d0e43.js";const f=async(t,e)=>{if(!t||!e)return console.error("no userId or community"),null;try{const{data:r,error:o}=await n.from("Community").insert([a({},e)]).single();if(o)throw o;return r&&await n.from("Permission").insert([{communityId:r.id,type:"owner",userId:t}]),r}catch(r){return console.error(r),null}},d=async(t,e)=>{try{const{data:r,error:o}=await n.from("Community").select().match({isPublic:!0}).lt("createdAt",t||new Date().toISOString()).order("createdAt",{ascending:!1}).limit(e||10);if(o)throw o;return r}catch(r){return console.error(r),null}},w=async t=>{if(!t)return[];try{const{data:e,error:r}=await n.from("Permission").select(`
        Community (
          id,
          isPublic,
          name,
          description,
          currency,
          color
        )
      `).match({userId:t}).order("createdAt",{ascending:!1});if(r)throw r;return e==null?void 0:e.map(o=>o.Community)}catch(e){return console.error(e),null}},h=async(t,e)=>{try{const{data:r,error:o}=await n.from("Permission").select().match({userId:e,communityId:t}).or("type.eq.owner,type.eq.admin");if(o)throw o;return console.log("data",r),!!r}catch(r){return console.error(r),!1}};export{d as a,f as c,w as g,h as i};
