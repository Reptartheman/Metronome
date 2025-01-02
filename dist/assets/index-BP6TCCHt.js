(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))x(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const v of r.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&x(v)}).observe(document,{childList:!0,subtree:!0});function S(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function x(o){if(o.ep)return;o.ep=!0;const r=S(o);fetch(o.href,r)}})();const E=document.querySelector(".decrease-tempo"),C=document.querySelector(".increase-tempo"),p=document.querySelector(".slider"),b=document.querySelector(".start-stop"),O=document.querySelector(".subtract-beats"),B=document.querySelector(".add-beats"),T=document.querySelector(".beat-count"),D=document.querySelector("#addNote"),M=document.querySelector("#removeNote"),w=document.querySelector("#default"),P=document.querySelector("#sonic"),A=document.querySelector("#zelda"),L=document.querySelector("link[href='./assets/styles/default.css']");let a,y,i=1,d,e=120,m=60/e,q=m/4,s,u,l=4,f=!1,c="Mid",N;function I(t,n,S){s=a.createOscillator(),s.connect(d),d.gain.value=S,d.connect(a.destination),i===1?s.frequency.value=440:s.frequency.value=220,s.start(t),s.stop(t+.1)}function Y(){m=60/e,q=m/1,i+=1,y+=q,i>l&&(i=1);const t=p.value/100;q=m/1*t}function h(){y<a.currentTime+.1&&(I(y,!0,1),Y()),f&&(N=window.requestAnimationFrame(h))}b.addEventListener("click",()=>{f?(f=!1,b.textContent="START",clearTimeout(N),s.stop()):(f=!0,b.textContent="STOP",a=new AudioContext,y=a.currentTime,s=a.createOscillator(),d=a.createGain(),i=1,h())});const k=()=>{const t=document.querySelector(".tempo"),n=document.querySelector(".tempo-text");switch(t.textContent=e+" BPM",p.value=e,!0){case e<=40:c=" Bowser tempo";break;case(e>40&&e<80):c=" Donkey kong tempo";break;case(e>80&&e<120):c=" Yoshi tempo";break;case(e>120&&e<180):c=" Tetris tempo";break;case(e>180&&e<220):c=" Cowabunga!";break;case(e>220&&e<240):c=" Sonic tempo!";break;case(e>240&&e<260):c="Mario's fireball tempo!";break;case(e>260&&e<280):c="Megaman tempo!";break;case(e>280&&e<300):c="Slow Down!";break;default:c="Ok, chill out"}n.textContent=c};function z(){const t=document.querySelector("#date");let n=dayjs().format("M/DD/YYYY");return t.textContent=`Today is: ${n}`,n}z();E.addEventListener("click",()=>{e--,k()});C.addEventListener("click",()=>{e++,k()});p.addEventListener("input",()=>{e=p.value,k()});O.addEventListener("click",()=>{l<=2||(l--,T.textContent=l,i=0)});B.addEventListener("click",()=>{l>=12||(l++,T.textContent=l,i=0)});function F(t){let n;t.preventDefault(),u=document.querySelector(".note-textarea"),n=u.value.trim(),localStorage.setItem("Note",JSON.stringify(n))}function V(t){t.preventDefault(),localStorage.removeItem("Note"),u=document.querySelector(".note-textarea"),u&&(u.value="")}function J(){let t=JSON.parse(localStorage.getItem("Note"));t&&(document.querySelector(".note-textarea").textContent=t)}function g(t){L?L.setAttribute("href",t):console.error("Link element not found!")}D.addEventListener("click",F);M.addEventListener("click",V);w.addEventListener("click",()=>{g("./assets/styles/default.css")});P.addEventListener("click",()=>{g("./assets/styles/sonic.css")});A.addEventListener("click",()=>{g("./assets/styles/zelda.css")});J();