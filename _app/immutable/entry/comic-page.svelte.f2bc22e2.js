import{S,i as V,s as q,k as g,a as w,q as x,l as v,m as y,c as E,r as k,h as f,n,K as z,b as B,C as o,D as _,o as C}from"../chunks/index.bca108b2.js";function P(D){let t,l,p,u,s,r,e,i,a,d;return{c(){t=g("div"),l=g("img"),u=w(),s=g("div"),r=g("div"),e=x("Title:"),i=w(),a=g("div"),d=x("Date:"),this.h()},l(c){t=v(c,"DIV",{id:!0,class:!0});var m=y(t);l=v(m,"IMG",{id:!0,src:!0,alt:!0,class:!0}),u=E(m),s=v(m,"DIV",{id:!0,class:!0});var h=y(s);r=v(h,"DIV",{id:!0});var I=y(r);e=k(I,"Title:"),I.forEach(f),i=E(h),a=v(h,"DIV",{id:!0});var T=y(a);d=k(T,"Date:"),T.forEach(f),h.forEach(f),m.forEach(f),this.h()},h(){n(l,"id","image"),z(l.src,p="")||n(l,"src",p),n(l,"alt",""),n(l,"class","svelte-1yvgazl"),n(r,"id","img-title"),n(a,"id","img-date"),n(s,"id","img-info"),n(s,"class","svelte-1yvgazl"),n(t,"id","comic"),n(t,"class","svelte-1yvgazl")},m(c,m){B(c,t,m),o(t,l),o(t,u),o(t,s),o(s,r),o(r,e),o(s,i),o(s,a),o(a,d)},p:_,i:_,o:_,d(c){c&&f(t)}}}function H(D){return C(async()=>{const t=document.getElementById("image"),l=document.getElementById("img-title"),p=document.getElementById("img-date");async function u(e){let i=await fetch(e);if(i.ok)return await i.text();alert("Error HTTP: "+i.status)}async function s(){let e=await u("https://fwd.innopolis.app/api/hw2?email=k.khaysadykov@innopolis.university"),i="https://getxkcd.vercel.app/api/comic?num=";if(typeof e>"u")return;i+=e;let a=await fetch(i);if(a.ok)return await a.json();alert("Error HTTP: "+a.status)}async function r(){let e=await s();if(e){t.src=e.img,t.alt=e.alt,l.innerText="Title: "+e.title;let a=e.day,d=e.month,c=e.year;var i=new Date(Date.UTC(+c,+d-1,+a));p.innerText="Date: "+i.toLocaleDateString("en-US"),console.log(e)}}r()}),[]}class U extends S{constructor(t){super(),V(this,t,H,P,q,{})}}export{U as default};
