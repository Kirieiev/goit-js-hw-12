import{a as E,i as g,S as h}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const P="42516548-e76607dce4d0f5a31ac9147e6",S="https://pixabay.com/api/";function m(e,r=1){return E.get(S,{params:{key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}}).then(o=>o.data)}function y(e,r){const o=e.map(({webformatURL:i,likes:t,views:s,comments:l,downloads:L,largeImageURL:x})=>`<a href="${x}" class= "picture-link">
    <img src = "${i}">
    <div class= "picture-content">
        <div class= "picture-text">
            <span class= "picture-title">Likes</span>
            <span class= "picture-sub-title">${t}</span>
        </div>
        <div class= "picture-text">
            <span class= "picture-title">Views</span>
            <span class= "picture-sub-title">${s}</span>
        </div>
        <div class= "picture-text">
            <span class= "picture-title">Comments</span>
            <span class= "picture-sub-title">${l}</span>
        </div>
        <div class= "picture-text">
            <span class= "picture-title">Downloads</span>
            <span class= "picture-sub-title">${L}</span>
        </div>
    </div>
</a>`).join("");r.insertAdjacentHTML("beforeend",o)}const q=document.querySelector(".form-inline"),n=document.querySelector(".card-container"),a=document.querySelector(".label"),f=document.getElementById("preloader"),c={q:"",page:1,maxPage:0,per_page:20};let v="";const p="is-hidden";function d(e){e.classList.add(p)}function b(e){e.classList.remove(p)}function w(e,r){r.classList.add(p),e.disabled=!1}function B(e,r){r.classList.remove(p),e.disabled=!0}function M(){n.innerHTML='<div class="loader"></div>'}function k(){const e=n.querySelector(".loader");e&&e.remove()}q.addEventListener("submit",H);async function H(e){e.preventDefault(),n.innerHTML="";const r=e.currentTarget,o=r.elements.picture.value.trim();if(v=o,c.page=1,o===""||o==null){g.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please, try again!",maxWidth:300,progressBar:!0,progressBarEasing:!1,position:"topRight",backgroundColor:"#ff6d60"}),n.innerHTML="",d(a);return}M();try{const{hits:i,totalHits:t}=await m(o);i&&i.length>0?(c.maxPage=Math.ceil(t/c.per_page),y(i,n),new h(".card-container a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh(),i&&i.length>0&&i.length!==t?(b(a),a.removeEventListener("click",u),a.addEventListener("click",u)):d(a)):(n.innerHTML="",g.error({title:"Error",message:"❌ Sorry, there are no images matching your search query. Please, try again!",maxWidth:300,progressBar:!0,progressBarEasing:!1,position:"topRight",backgroundColor:"#ff6d60"}),d(a))}catch(i){console.log(i)}finally{k(),r.reset()}}async function u(){c.page+=1,B(a,f);try{const{hits:e}=await m(v,c.page);y(e,n);const r=n.querySelector(".picture-link").getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"}),new h(".card-container a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}catch(e){console.log(e)}finally{w(a,f),c.page>=c.maxPage?(d(a),g.error({title:"Error",message:`"We're sorry, but you've reached the end of search results."`,maxWidth:300,progressBar:!0,progressBarEasing:!1,position:"topRight",backgroundColor:"#ff6d60"}),a.removeEventListener("click",u)):(b(a),a.removeEventListener("click",u),a.addEventListener("click",u))}}
//# sourceMappingURL=commonHelpers.js.map
