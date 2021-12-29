var I=Object.defineProperty;var h=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var p=(n,e,i)=>e in n?I(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i,f=(n,e)=>{for(var i in e||(e={}))P.call(e,i)&&p(n,i,e[i]);if(h)for(var i of h(e))L.call(e,i)&&p(n,i,e[i]);return n};import{m as b,$ as A,I as k,c as T,w as D,S as y,i as v,s as g,a as O,R,e as j,b as m,d as S,f as V,g as d,n as C,t as c,h as l,j as N,k as u,l as U,T as F}from"./vendor.85dcdc51.js";const mt={},q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}};q();const W="WeCount",B="loading",M="Email",G="Name",K="Display Name",X="Image",Y="Password",J="Login",H="Sign Out",z="Sign In",Q="Update",Z="Member",ee="Owner",te="Sponsor",se="Manage",ie="Remaining amount",ne="Recent history",oe="Usage history",ae="More",re="Unnamed",me="Statistics",de="Sponsors",ce="Total Raised",le="Balance",ue={"sign-in":{email_hint:"Write your email address",pw_hint:"Write your password",forgot_your_password:"Forgot your password",do_not_have_account:"Don't have an account",sign_in_with_google:"Sign In with Google",sign_in_with_facebook:"Sign In with Facebook",look_around:"Look around"},"sign-up":{title:"Sign Up",email_hint:"Write your email address",pw_hint:"Write your password",pw_confirm:"Confirm password",pw_confirm_hint:"Confirm your password",terms_and_agreement:'I agree with&nbsp;<a href="https://legacy.dooboolab.com/termsofservice">Terms for Agreement</a>&nbsp;and&nbsp;<a href="https://legacy.dooboolab.com/privacyandpolicy">Privacy and Policy</a>.',missing_inputs:"Some information is missing. Please fill all information."}},_e={hello:"Hello there. \u{1F64C}",welcome:"Welcome to WeCount.",create_community:"Create community",create_community_desc:"Create and manage account for community",see_communities:"See communities",see_communities_desc:"Explore the community and support it through sponsorship"},he={title:"Community",create_community:"Create a community",type:"Type",name:"Community name",introduction:"Introduction",name_hint:"Please write down the community name",introduction_hint:"Please introduce the community",currency:"Currency",create:"Create a community",public:"Public",private:"Private",sidebar:{dashboard:"Dashboard",feeds:"Feeds",settings:"Settings"},no_more:"No more community!",update:"\uC218\uC815",settings:"\uC124\uC815",manager_members:"\uBA64\uBC84\uAD00\uB9AC"},pe={community:"Community",members:"Members"},fe={write:"Write Feed"},be={explore_community:"Explore the community!"};var ye={app_name:W,loading:B,email:M,name:G,display_name:K,image:X,pw:Y,login:J,sign_out:H,sign_in:z,update:Q,member:Z,owner:ee,sponsor:te,manage:se,remaining_amount:ie,recent_history:ne,usage_history:oe,more:ae,unnamed:re,statistics:me,sponsors:de,total_raised:ce,balance:le,auth:ue,onboard:_e,community:he,settings:pe,feed:fe,header:be};const ve="WE\uCE74\uC6B4\uD2B8",ge="\uB85C\uB529\uC911",xe="\uC774\uBA54\uC77C",Ee="\uC774\uB984",we="\uBCC4\uCE6D",$e="\uC774\uBBF8\uC9C0",Ie="\uBE44\uBC00\uBC88\uD638",Pe="\uB85C\uADF8\uC544\uC6C3",Le="\uB85C\uADF8\uC778",Ae="\uB85C\uADF8\uC778\uD558\uAE30",ke="\uC218\uC815",Te="\uBA64\uBC84",De="\uC8FC\uC778",Oe="\uD6C4\uC6D0\uD558\uAE30",Re="\uAD00\uB9AC",je="\uB0A8\uC740 \uAE08\uC561",Se="\uCD5C\uADFC \uB0B4\uC5ED",Ve="\uC0AC\uC6A9 \uB0B4\uC5ED",Ce="\uB354\uBCF4\uAE30",Ne="\uC774\uB984\uC5C6\uC74C",Ue="\uC9C0\uCD9C \uD1B5\uACC4",Fe="\uC2A4\uD3F0\uC11C",qe="\uCD1D \uBAA8\uAE08",We="\uC794\uC561",Be={"sign-in":{email_hint:"\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694",pw_hint:"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694",forgot_your_password:"\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694",do_not_have_account:"\uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694",sign_in_with_google:"Google \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778",sign_in_with_facebook:"Facebook \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778",look_around:"\uB458\uB7EC\uBCF4\uAE30"},"sign-up":{title:"\uD68C\uC6D0\uAC00\uC785",email:"\uC774\uBA54\uC77C",email_hint:"\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694",pw:"\uBE44\uBC00\uBC88\uD638",pw_hint:"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694",pw_confirm:"\uBE44\uBC00\uBC88\uD638 \uD655\uC778",pw_confirm_hint:"\uBE44\uBC00\uBC88\uD638\uB97C \uD55C\uBC88 \uB354 \uC785\uB825\uD558\uC138\uC694",terms_and_agreement:'\uC704\uCE74\uC6B4\uD2B8&nbsp; <a href="https://legacy.dooboolab.com/termsofservice">\uC774\uC6A9\uC57D\uAD00</a> \uBC0F&nbsp; <a href="https://legacy.dooboolab.com/privacyandpolicy">\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68</a>\uC5D0 \uBAA8\uB450 \uB3D9\uC758\uD569\uB2C8\uB2E4.',missing_inputs:"\uBAA8\uB4E0 \uD56D\uBAA9\uC774 \uAE30\uC7AC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uD68C\uC6D0\uAC00\uC785\uC744 \uC704\uD574 \uBAA8\uB4E0 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."}},Me={hello:"\uC548\uB155\uD558\uC138\uC694. \u{1F64C}",welcome:"\uC704\uCE74\uC6B4\uD2B8\uC5D0 \uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4.",create_community:"\uCEE4\uBBA4\uB2C8\uD2F0 \uC0DD\uC131",create_community_desc:"\uCEE4\uBBA4\uB2C8\uD2F0\uB97C \uC0DD\uC131\uD558\uACE0 \uC790\uAE08\uC744 \uAD00\uB9AC\uD574\uBCF4\uC138\uC694.",see_communities:"\uCEE4\uBBA4\uB2C8\uD2F0 \uB458\uB7EC\uBCF4\uAE30",see_communities_desc:"\uCEE4\uBBA4\uB2C8\uD2F0\uB97C \uD0D0\uC0C9\uD558\uACE0, \uD6C4\uC6D0\uC744 \uD1B5\uD574 \uC9C0\uC9C0\uD574\uC8FC\uC138\uC694."},Ge={title:"\uCEE4\uBBA4\uB2C8\uD2F0",create_community:"\uCEE4\uBBA4\uB2C8\uD2F0\uB97C \uC0DD\uC131\uD574\uC694",type:"\uC885\uB958",name:"\uC774\uB984",name_hint:"\uCEE4\uBBA4\uB2C8\uD2F0 \uC774\uB984\uC744 \uC801\uC5B4\uC8FC\uC138\uC694",introduction:"\uC18C\uAC1C",introduction_hint:"\uCEE4\uBBA4\uB2C8\uD2F0\uB97C \uC18C\uAC1C \uD574\uC8FC\uC138\uC694",currency:"\uD1B5\uD654",create:"\uCEE4\uBBA4\uB2C8\uD2F0 \uC0DD\uC131\uD558\uAE30",public:"\uACF5\uAC1C",private:"\uBE44\uACF5\uAC1C",sidebar:{dashboard:"\uB300\uC2DC\uBCF4\uB4DC",feeds:"\uD53C\uB4DC",settings:"\uC124\uC815"},no_more:"\uB354\uC774\uC0C1 \uCEE4\uBBA4\uB2C8\uD2F0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4!",update:"\uC218\uC815",settings:"\uC124\uC815",manager_members:"\uBA64\uBC84\uAD00\uB9AC"},Ke="\uD53C\uB4DC \uC791\uC131\uD558\uAE30",Xe={explore_community:"\uCEE4\uBBA4\uB2C8\uD2F0\uB97C \uD0D0\uC0C9\uD574\uBCF4\uC138\uC694!"};var Ye={app_name:ve,loading:ge,email:xe,name:Ee,display_name:we,image:$e,pw:Ie,sign_out:Pe,login:Le,sign_in:Ae,update:ke,member:Te,owner:De,sponsor:Oe,manage:Re,remaining_amount:je,recent_history:Se,usage_history:Ve,more:Ce,unnamed:Ne,statistics:Ue,sponsors:Fe,total_raised:qe,balance:We,auth:Be,onboard:Me,community:Ge,write:Ke,header:Xe};b("en",ye);b("ko",Ye);A({fallbackLocale:"en",initialLocale:k()});const Je="modulepreload",x={},He="/",o=function(e,i){return!i||i.length===0?e():Promise.all(i.map(t=>{if(t=`${He}${t}`,t in x)return;x[t]=!0;const s=t.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${a}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":Je,s||(r.as="script",r.crossOrigin=""),r.href=t,document.head.appendChild(r),s)return new Promise((w,$)=>{r.addEventListener("load",w),r.addEventListener("error",$)})})).then(()=>e())};var ze={meta:{},id:"_default",module:()=>o(()=>import("./_module.39720d08.js"),["assets/_module.39720d08.js","assets/vendor.85dcdc51.js","assets/icons.ca554e64.js","assets/button.f2337e0b.js","assets/user-image.203813a6.js"]),file:{path:"src/routes/_module.svelte",dir:"src/routes",base:"_module.svelte",ext:".svelte",name:"_module"},rootName:"default",routifyDir:mt.url,children:[{meta:{fallback:!0},id:"_default__fallback_svelte",name:"_fallback",module:()=>o(()=>import("./_fallback.dc34b704.js"),["assets/_fallback.dc34b704.js","assets/vendor.85dcdc51.js"]),file:{path:"src/routes/_fallback.svelte",dir:"src/routes",base:"_fallback.svelte",ext:".svelte",name:"_fallback"},children:[]},{meta:{},id:"_default_auth",name:"auth",module:!1,file:{path:"src/routes/auth",dir:"src/routes",base:"auth",ext:"",name:"auth"},children:[{meta:{},id:"_default_auth_sign_in_svelte",name:"sign-in",module:()=>o(()=>import("./sign-in.edc2fad1.js"),["assets/sign-in.edc2fad1.js","assets/vendor.85dcdc51.js","assets/icons.ca554e64.js","assets/button.f2337e0b.js","assets/edit-text.6f9490a7.js"]),file:{path:"src/routes/auth/sign-in.svelte",dir:"src/routes/auth",base:"sign-in.svelte",ext:".svelte",name:"sign-in"},children:[]},{meta:{},id:"_default_auth_sign_up_svelte",name:"sign-up",module:()=>o(()=>import("./sign-up.41b02af1.js"),["assets/sign-up.41b02af1.js","assets/vendor.85dcdc51.js","assets/edit-text.6f9490a7.js","assets/icons.ca554e64.js","assets/button.f2337e0b.js"]),file:{path:"src/routes/auth/sign-up.svelte",dir:"src/routes/auth",base:"sign-up.svelte",ext:".svelte",name:"sign-up"},children:[]}]},{meta:{},id:"_default_community",name:"community",module:!1,file:{path:"src/routes/community",dir:"src/routes",base:"community",ext:"",name:"community"},children:[{meta:{},id:"_default_community__id_",name:"[id]",module:()=>o(()=>import("./_module.322bf9a1.js"),["assets/_module.322bf9a1.js","assets/vendor.85dcdc51.js","assets/index.9a95eee2.js","assets/icons.ca554e64.js","assets/menu.7a9a6b8c.js","assets/menu-add.c3a55ea7.js","assets/menu-list.7defafe6.js"]),file:{path:"src/routes/community/[id]/_module.svelte",dir:"src/routes/community/[id]",base:"_module.svelte",ext:".svelte",name:"_module"},children:[{meta:{},id:"_default_community__id__dashboard",name:"dashboard",module:!1,file:{path:"src/routes/community/[id]/dashboard",dir:"src/routes/community/[id]",base:"dashboard",ext:"",name:"dashboard"},children:[{meta:{},id:"_default_community__id__dashboard_history_svelte",name:"history",module:()=>o(()=>import("./history.d9ea1036.js"),["assets/history.d9ea1036.js","assets/vendor.85dcdc51.js"]),file:{path:"src/routes/community/[id]/dashboard/history.svelte",dir:"src/routes/community/[id]/dashboard",base:"history.svelte",ext:".svelte",name:"history"},children:[]},{meta:{},id:"_default_community__id__dashboard_index_svelte",name:"index",module:()=>o(()=>import("./index.174819ee.js"),["assets/index.174819ee.js","assets/vendor.85dcdc51.js","assets/summary.e7b211dd.js","assets/functions.b4f8bb22.js","assets/button.f2337e0b.js","assets/community-card.622245fc.js","assets/icons.ca554e64.js","assets/user-image.203813a6.js","assets/history.d9ea1036.js","assets/member-list.081d0328.js","assets/statistics.4b8c362d.js"]),file:{path:"src/routes/community/[id]/dashboard/index.svelte",dir:"src/routes/community/[id]/dashboard",base:"index.svelte",ext:".svelte",name:"index"},children:[]},{meta:{},id:"_default_community__id__dashboard_member_list_svelte",name:"member-list",module:()=>o(()=>import("./member-list.081d0328.js"),["assets/member-list.081d0328.js","assets/vendor.85dcdc51.js","assets/user-image.203813a6.js","assets/icons.ca554e64.js"]),file:{path:"src/routes/community/[id]/dashboard/member-list.svelte",dir:"src/routes/community/[id]/dashboard",base:"member-list.svelte",ext:".svelte",name:"member-list"},children:[]},{meta:{},id:"_default_community__id__dashboard_statistics_svelte",name:"statistics",module:()=>o(()=>import("./statistics.4b8c362d.js"),["assets/statistics.4b8c362d.js","assets/vendor.85dcdc51.js","assets/functions.b4f8bb22.js"]),file:{path:"src/routes/community/[id]/dashboard/statistics.svelte",dir:"src/routes/community/[id]/dashboard",base:"statistics.svelte",ext:".svelte",name:"statistics"},children:[]},{meta:{},id:"_default_community__id__dashboard_summary_svelte",name:"summary",module:()=>o(()=>import("./summary.e7b211dd.js"),["assets/summary.e7b211dd.js","assets/vendor.85dcdc51.js","assets/functions.b4f8bb22.js","assets/button.f2337e0b.js","assets/community-card.622245fc.js","assets/icons.ca554e64.js","assets/user-image.203813a6.js"]),file:{path:"src/routes/community/[id]/dashboard/summary.svelte",dir:"src/routes/community/[id]/dashboard",base:"summary.svelte",ext:".svelte",name:"summary"},children:[]}]},{meta:{},id:"_default_community__id__feeds_svelte",name:"feeds",module:()=>o(()=>import("./feeds.aa11d55e.js"),["assets/feeds.aa11d55e.js","assets/vendor.85dcdc51.js","assets/button.f2337e0b.js","assets/icons.ca554e64.js"]),file:{path:"src/routes/community/[id]/feeds.svelte",dir:"src/routes/community/[id]",base:"feeds.svelte",ext:".svelte",name:"feeds"},children:[]},{meta:{},id:"_default_community__id__index_svelte",name:"index",module:()=>o(()=>import("./index.9bfd693c.js"),["assets/index.9bfd693c.js","assets/vendor.85dcdc51.js","assets/index.174819ee.js","assets/summary.e7b211dd.js","assets/functions.b4f8bb22.js","assets/button.f2337e0b.js","assets/community-card.622245fc.js","assets/icons.ca554e64.js","assets/user-image.203813a6.js","assets/history.d9ea1036.js","assets/member-list.081d0328.js","assets/statistics.4b8c362d.js"]),file:{path:"src/routes/community/[id]/index.svelte",dir:"src/routes/community/[id]",base:"index.svelte",ext:".svelte",name:"index"},children:[]},{meta:{},id:"_default_community__id__members_svelte",name:"members",module:()=>o(()=>import("./members.c82a4ec8.js"),["assets/members.c82a4ec8.js","assets/vendor.85dcdc51.js"]),file:{path:"src/routes/community/[id]/members.svelte",dir:"src/routes/community/[id]",base:"members.svelte",ext:".svelte",name:"members"},children:[]},{meta:{},id:"_default_community__id__settings",name:"settings",module:()=>o(()=>import("./_module.6825ad58.js"),["assets/_module.6825ad58.js","assets/vendor.85dcdc51.js"]),file:{path:"src/routes/community/[id]/settings/_module.svelte",dir:"src/routes/community/[id]/settings",base:"_module.svelte",ext:".svelte",name:"_module"},children:[{meta:{},id:"_default_community__id__settings_index_svelte",name:"index",module:()=>o(()=>import("./index.e5217248.js"),["assets/index.e5217248.js","assets/vendor.85dcdc51.js","assets/button.f2337e0b.js","assets/input-box.d56b1dbf.js","assets/icons.ca554e64.js","assets/community-card.622245fc.js","assets/functions.b4f8bb22.js","assets/user-image.203813a6.js","assets/communityService.b9103e12.js"]),file:{path:"src/routes/community/[id]/settings/index.svelte",dir:"src/routes/community/[id]/settings",base:"index.svelte",ext:".svelte",name:"index"},children:[]},{meta:{},id:"_default_community__id__settings_members_svelte",name:"members",module:()=>o(()=>import("./members.7a7921e9.js"),["assets/members.7a7921e9.js","assets/vendor.85dcdc51.js"]),file:{path:"src/routes/community/[id]/settings/members.svelte",dir:"src/routes/community/[id]/settings",base:"members.svelte",ext:".svelte",name:"members"},children:[]}]},{meta:{},id:"_default_community__id__sidebar",name:"sidebar",module:!1,file:{path:"src/routes/community/[id]/sidebar",dir:"src/routes/community/[id]",base:"sidebar",ext:"",name:"sidebar"},children:[{meta:{},id:"_default_community__id__sidebar_index_svelte",name:"index",module:()=>o(()=>import("./index.9a95eee2.js"),["assets/index.9a95eee2.js","assets/vendor.85dcdc51.js","assets/icons.ca554e64.js","assets/menu.7a9a6b8c.js","assets/menu-add.c3a55ea7.js","assets/menu-list.7defafe6.js"]),file:{path:"src/routes/community/[id]/sidebar/index.svelte",dir:"src/routes/community/[id]/sidebar",base:"index.svelte",ext:".svelte",name:"index"},children:[]},{meta:{},id:"_default_community__id__sidebar_menu_add_svelte",name:"menu-add",module:()=>o(()=>import("./menu-add.c3a55ea7.js"),["assets/menu-add.c3a55ea7.js","assets/vendor.85dcdc51.js","assets/icons.ca554e64.js"]),file:{path:"src/routes/community/[id]/sidebar/menu-add.svelte",dir:"src/routes/community/[id]/sidebar",base:"menu-add.svelte",ext:".svelte",name:"menu-add"},children:[]},{meta:{},id:"_default_community__id__sidebar_menu_list_svelte",name:"menu-list",module:()=>o(()=>import("./menu-list.7defafe6.js"),["assets/menu-list.7defafe6.js","assets/vendor.85dcdc51.js"]),file:{path:"src/routes/community/[id]/sidebar/menu-list.svelte",dir:"src/routes/community/[id]/sidebar",base:"menu-list.svelte",ext:".svelte",name:"menu-list"},children:[]},{meta:{},id:"_default_community__id__sidebar_menu_svelte",name:"menu",module:()=>o(()=>import("./menu.7a9a6b8c.js"),["assets/menu.7a9a6b8c.js","assets/vendor.85dcdc51.js"]),file:{path:"src/routes/community/[id]/sidebar/menu.svelte",dir:"src/routes/community/[id]/sidebar",base:"menu.svelte",ext:".svelte",name:"menu"},children:[]}]}]},{meta:{},id:"_default_community_create_svelte",name:"create",module:()=>o(()=>import("./create.37ad3d6b.js"),["assets/create.37ad3d6b.js","assets/vendor.85dcdc51.js","assets/button.f2337e0b.js","assets/input-box.d56b1dbf.js","assets/icons.ca554e64.js","assets/community-card.622245fc.js","assets/functions.b4f8bb22.js","assets/user-image.203813a6.js","assets/communityService.b9103e12.js"]),file:{path:"src/routes/community/create.svelte",dir:"src/routes/community",base:"create.svelte",ext:".svelte",name:"create"},children:[]},{meta:{},id:"_default_community_index_svelte",name:"index",module:()=>o(()=>import("./index.6cd69b0d.js"),["assets/index.6cd69b0d.js","assets/vendor.85dcdc51.js","assets/communityService.b9103e12.js","assets/button.f2337e0b.js"]),file:{path:"src/routes/community/index.svelte",dir:"src/routes/community",base:"index.svelte",ext:".svelte",name:"index"},children:[]}]},{meta:{},id:"_default_index_svelte",name:"index",module:()=>o(()=>import("./index.0849e0c5.js"),["assets/index.0849e0c5.js","assets/vendor.85dcdc51.js","assets/icons.ca554e64.js"]),file:{path:"src/routes/index.svelte",dir:"src/routes",base:"index.svelte",ext:".svelte",name:"index"},children:[]},{meta:{},id:"_default_profile_svelte",name:"profile",module:()=>o(()=>import("./profile.4e86aed3.js"),["assets/profile.4e86aed3.js","assets/vendor.85dcdc51.js","assets/button.f2337e0b.js"]),file:{path:"src/routes/profile.svelte",dir:"src/routes",base:"profile.svelte",ext:".svelte",name:"profile"},children:[]},{meta:{},id:"_default_temp_svelte",name:"temp",module:()=>o(()=>import("./temp.909d71b9.js"),["assets/temp.909d71b9.js","assets/vendor.85dcdc51.js"]),file:{path:"src/routes/temp.svelte",dir:"src/routes",base:"temp.svelte",ext:".svelte",name:"temp"},children:[]}]};const _=T("https://bagkmjbbwtdjwrsrcdgd.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDYxMTI5MSwiZXhwIjoxOTU2MTg3MjkxfQ.Xmf8oAUl1uPrFNjX7o6a-AAA8v4Hc-_XKffoOhtuB4I"),E=D(null),Qe=async n=>{if(!n||!n.id)return null;const e={aud:n.aud,confirmation_sent_at:n.confirmation_sent_at,confirmed_at:n.confirmed_at,created_at:n.created_at,email:n.email,email_confirmed_at:n.email_confirmed_at,id:n.id,last_sign_in_at:n.last_sign_in_at,phone:n.phone,phone_confirmed_at:n.phone_confirmed_at,recovery_sent_at:n.recovery_sent_at,role:n.role,updated_at:n.updated_at};try{const{data:i,error:t}=await _.from("User").upsert([f({},e)]).single();if(t)throw t;return i}catch(i){return console.error(i),null}};function Ze(n){O(n,"svelte-yuqfrl","@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);main.svelte-yuqfrl{background-color:var(--background);color:var(--text);text-align:center;display:grid;grid-template-columns:1fr;grid-template-rows:1fr}@media(min-width: 640px){main.svelte-yuqfrl{max-width:none}}")}function et(n){let e,i,t;return i=new R({props:{routes:ze}}),{c(){e=j("main"),m(i.$$.fragment),S(e,"class","svelte-yuqfrl")},m(s,a){V(s,e,a),d(i,e,null),t=!0},p:C,i(s){t||(c(i.$$.fragment,s),t=!0)},o(s){l(i.$$.fragment,s),t=!1},d(s){s&&N(e),u(i)}}}function tt(n){const{changeThemeType:e}=U("svelte-theme"),i=()=>{document.addEventListener("keydown",t=>{t.ctrlKey&&t.key==="."&&e()})};return _.auth.onAuthStateChange((t,s)=>{t==="SIGNED_OUT"&&E.set(null),t==="SIGNED_IN"&&s&&(async()=>{var a;await Qe(s.user);let{data:r}=await _.from("User").select("displayName, name, avatarUrl").eq("id",(a=s.user)===null||a===void 0?void 0:a.id).single();E.set(Object.assign(Object.assign({},s.user),{avatarUrl:(r==null?void 0:r.avatarUrl)||"",displayName:(r==null?void 0:r.displayName)||"",name:(r==null?void 0:r.name)||""}))})().catch(a=>console.log(a))}),i(),[]}class st extends y{constructor(e){super();v(this,e,tt,et,g,{},Ze)}}const lt="#FF728D",ut="#28DB98",_t="#72E6FF",ht="#3A74E7",pt="#834FF3",ft="#2A2A2C",it={boxShadow02:"rgba(0, 0, 0, 0.02)",boxShadow12:"rgba(0, 0, 0, 0.12)",authBackgroundLight:"#17b87c",authBackgroundDark:"#01886f",logo:"invert(0)",text:"black",background:"white",textContrast:"white"},nt={boxShadow02:"rgba(255, 255, 255, 0.02)",boxShadow12:"rgba(255, 255, 255, 0.06)",authBackgroundLight:"#4C4D53",authBackgroundDark:"#2A2A2A",logo:"invert(1)",text:"white",background:"black",textContrast:"black"};function ot(n){let e,i;return e=new st({}),{c(){m(e.$$.fragment)},m(t,s){d(e,t,s),i=!0},i(t){i||(c(e.$$.fragment,t),i=!0)},o(t){l(e.$$.fragment,t),i=!1},d(t){u(e,t)}}}function at(n){let e,i;return e=new F({props:{customTheme:{light:it,dark:nt},$$slots:{default:[ot]},$$scope:{ctx:n}}}),{c(){m(e.$$.fragment)},m(t,s){d(e,t,s),i=!0},p(t,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){i||(c(e.$$.fragment,t),i=!0)},o(t){l(e.$$.fragment,t),i=!1},d(t){u(e,t)}}}class rt extends y{constructor(e){super();v(this,e,null,at,g,{})}}new rt({target:document.body});export{ft as B,ut as G,ht as N,pt as P,lt as R,_t as S,_ as s,E as u};
