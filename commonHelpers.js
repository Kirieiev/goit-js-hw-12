import{a as P,i as d,S as h}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const B="42516548-e76607dce4d0f5a31ac9147e6",S="https://pixabay.com/api/",q=15;function m(e,r=1){return P.get(S,{params:{key:B,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:q,page:r}}).then(i=>i.data)}function y(e,r){const i=e.map(({webformatURL:s,tags:t,likes:o,views:l,comments:L,downloads:x,largeImageURL:E})=>`<a href="${E}" class= "picture-link">
    <img src = "${s}" alt="${t}">
    <div class= "picture-content">
        <div class= "picture-text">
            <span class= "picture-title">Likes</span>
            <span class= "picture-sub-title">${o}</span>
        </div>
        <div class= "picture-text">
            <span class= "picture-title">Views</span>
            <span class= "picture-sub-title">${l}</span>
        </div>
        <div class= "picture-text">
            <span class= "picture-title">Comments</span>
            <span class= "picture-sub-title">${L}</span>
        </div>
        <div class= "picture-text">
            <span class= "picture-title">Downloads</span>
            <span class= "picture-sub-title">${x}</span>
        </div>
    </div>
</a>`).join("");r.insertAdjacentHTML("beforeend",i)}const w=document.querySelector(".form-inline"),c=document.querySelector(".card-container"),a=document.querySelector(".label"),f=document.getElementById("preloader"),n={q:"",page:1,maxPage:0,per_page:20};let v="";const g="is-hidden";function p(e){e.classList.add(g)}function b(e){e.classList.remove(g)}function k(e,r){r.classList.add(g),e.disabled=!1}function M(e,r){r.classList.remove(g),e.disabled=!0}function $(){c.innerHTML='<div class="loader"></div>'}function C(){const e=c.querySelector(".loader");e&&e.remove()}w.addEventListener("submit",H);async function H(e){e.preventDefault(),c.innerHTML="";const r=e.currentTarget,i=r.elements.picture.value.trim();if(v=i,n.page=1,i===""||i===null){d.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please, try again!",maxWidth:300,progressBar:!0,progressBarEasing:!1,position:"topRight",backgroundColor:"#ff6d60"}),c.innerHTML="",p(a);return}$();try{const{hits:s,totalHits:t}=await m(i);console.log(s),console.log(t),s.length<maxElementPage&&d.error({title:"Error",message:`"We're sorry, but you've reached the end of search results."`,maxWidth:300,progressBar:!0,progressBarEasing:!1,position:"topRight",backgroundColor:"#ff6d60"}),s&&s.length>0?(n.maxPage=Math.ceil(t/n.per_page),y(s,c),new h(".card-container a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh(),s&&s.length>0&&s.length!==t?(b(a),a.removeEventListener("click",u),a.addEventListener("click",u)):p(a)):(c.innerHTML="",d.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please, try again!",maxWidth:300,progressBar:!0,progressBarEasing:!1,position:"topRight",backgroundColor:"#ff6d60"}),p(a))}catch(s){console.log(s)}finally{C(),r.reset()}}async function u(){n.page+=1,M(a,f);try{const{hits:e}=await m(v,n.page);y(e,c);const r=c.querySelector(".picture-link").getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"}),new h(".card-container a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}catch(e){console.log(e)}finally{k(a,f),console.log(n.page),console.log(n.maxPage),n.page>=n.maxPage?(p(a),d.error({title:"Error",message:`"We're sorry, but you've reached the end of search results."`,maxWidth:300,progressBar:!0,progressBarEasing:!1,position:"topRight",backgroundColor:"#ff6d60"}),a.removeEventListener("click",u)):(b(a),a.removeEventListener("click",u),a.addEventListener("click",u))}}
//# sourceMappingURL=commonHelpers.js.map
