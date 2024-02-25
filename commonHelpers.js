import{S as p,a as g,i as x}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m=document.querySelector(".gallery-o"),w=document.querySelector(".search-form");new p(".gallery-o");const L={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250};function P(o){const s=o.map(({largeImageURL:n,webformatURL:t,tags:r,likes:a,views:c,comments:l,downloads:d})=>`
        <div class="gallery">
            <a href="${n}">
            <img src="${t}" alt="${r}" title="${r}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${a}</span></li>
                <li class="info-cards-elements">views<span>${c}</span></li>
                <li class="info-cards-elements">comments<span>${l}</span></li>
                <li class="info-cards-elements">downloads<span>${d}</span></li>
            </ul>
            </a>
        </div>
        `).join("");m.innerHTML=s;const e=new p(".gallery-o a",L);e.on("show.simplelightbox"),e.refresh(),w.reset()}function B(o){const e=o.hits.map(({largeImageURL:r,webformatURL:a,tags:c,likes:l,views:d,comments:M,downloads:q})=>`
        <div class="gallery">
            <a href="${r}">
            <img src="${a}" alt="${c}" title="${c}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${l}</span></li>
                <li class="info-cards-elements">views<span>${d}</span></li>
                <li class="info-cards-elements">comments<span>${M}</span></li>
                <li class="info-cards-elements">downloads<span>${q}</span></li>
            </ul>
            </a>
        </div>
        `).join("");m.insertAdjacentHTML("beforeend",e);const n=new p(".gallery-o a",L);n.on("show.simplelightbox"),n.refresh(),w.reset();const t=m.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:t*2})}async function O(o,s){try{const e="42516413-5d4d39fc32c8318bac1e6503b",n=await g.get("https://pixabay.com/app/",{params:{key:e,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:"15"}});if(n.data.total===0)throw new Error("Found no images");return n.data}catch(e){throw e}}async function T(o,s){try{const e=new URLSearchParams({key:"42516413-5d4d39fc32c8318bac1e6503b",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:s});let n=await g.get(`https://pixabay.com/app/?${e}`);if(n.data.total===0)throw new Error("Found no images");return n.data}catch(e){throw e}}const f=document.querySelector(".search-form"),b=document.querySelector(".gallery-o"),$=document.querySelector(".loader"),v=document.querySelector(".loader2"),h=document.querySelector(".more-btn");let u,i,S;document.addEventListener("DOMContentLoaded",()=>{y(),f.addEventListener("submit",o);async function o(s){s.preventDefault(),k(),b.innerHTML="",i=1,u=f.querySelector(".input-search").value;try{const e=await O(u,i);P(e.hits),S=Math.ceil(e.totalHits/15)}catch(e){H(e)}finally{y(),E()}}});function H(o){b.innerHTML="",x.show({message:`❌ "${o}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}function k(){$.style.display="block"}function y(){$.style.display="none"}function A(){v.classList.remove("hidden")}function I(){v.classList.add("hidden")}h.addEventListener("click",async()=>{A();try{const o=await T(u,i);B(o),i+=1,i>1&&(I(),E())}catch(o){console.log(o)}});function _(){h.classList.remove("hidden")}function j(){h.classList.add("hidden")}function E(){i>=S?j():_()}
//# sourceMappingURL=commonHelpers.js.map
