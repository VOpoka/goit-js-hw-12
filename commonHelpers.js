import{S as f,a as B,i as w}from"./assets/vendor-5401a4b0.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=document.querySelector(".gallery-o"),b=document.querySelector(".search-form");new f(".gallery-o");const v={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250};function T(s){const n=s.map(({largeImageURL:r,webformatURL:e,tags:t,likes:i,views:l,comments:d,downloads:u})=>`
        <div class="gallery">
            <a href="${r}">
            <img src="${e}" alt="${t}" title="${t}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${i}</span></li>
                <li class="info-cards-elements">views<span>${l}</span></li>
                <li class="info-cards-elements">comments<span>${d}</span></li>
                <li class="info-cards-elements">downloads<span>${u}</span></li>
            </ul>
            </a>
        </div>
        `).join("");m.innerHTML=n;const o=new f(".gallery-o a",v);o.on("show.simplelightbox"),o.refresh(),b.reset()}function H(s){const o=s.hits.map(({largeImageURL:t,webformatURL:i,tags:l,likes:d,views:u,comments:O,downloads:P})=>`
        <div class="gallery">
            <a href="${t}">
            <img src="${i}" alt="${l}" title="${l}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${d}</span></li>
                <li class="info-cards-elements">views<span>${u}</span></li>
                <li class="info-cards-elements">comments<span>${O}</span></li>
                <li class="info-cards-elements">downloads<span>${P}</span></li>
            </ul>
            </a>
        </div>
        `).join("");m.insertAdjacentHTML("beforeend",o);const r=new f(".gallery-o a",v);r.on("show.simplelightbox"),r.refresh(),b.reset();const e=m.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:e*2})}async function $(s,n){try{const o="42516413-5d4d39fc32c8318bac1e6503b",r=await B.get("https://pixabay.com/api/",{params:{key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:"15"}});if(r.data.total===0)throw new Error("No images found");return r.data}catch(o){throw o}}const g=document.querySelector(".search-form"),S=document.querySelector(".gallery-o"),E=document.querySelector(".loader"),x=document.querySelector(".loader2"),c=document.querySelector(".more-btn");let h,a,p;document.addEventListener("DOMContentLoaded",()=>{L(),g.addEventListener("submit",s);async function s(n){n.preventDefault(),A(),q(),S.innerHTML="",a=1,h=g.querySelector(".input-search").value;try{const o=await $(h,a);T(o.hits),p=Math.ceil(o.totalHits/15),y()}catch(o){k(o)}finally{L()}}});function k(s){S.innerHTML="",w.show({message:`❌ "${s}" Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}function A(){E.style.display="block"}function L(){E.style.display="none"}function C(){x.classList.remove("hidden")}function M(){x.classList.add("hidden")}c.addEventListener("click",async()=>{a+=1,C();try{const s=await $(h,a);H(s),a>1&&(M(),y())}catch(s){console.log(s)}});function N(){a===p&&(M(),y(),w.show({message:'❌ "Sorry, you have reached the end of your search results."',color:"red",position:"topRight",maxWidth:"400px"}))}c.addEventListener("click",N);function j(){c.classList.remove("hidden")}function q(){c.classList.add("hidden")}function y(){a>=p?q():j()}
//# sourceMappingURL=commonHelpers.js.map
