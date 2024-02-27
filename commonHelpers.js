import{S as O,a as P,i as g}from"./assets/vendor-5401a4b0.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=document.querySelector(".gallery-o"),L=document.querySelector(".search-form"),B={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250},v=new O(".gallery-o a",B);function T(o){const n=o.map(({largeImageURL:s,webformatURL:r,tags:e,likes:t,views:i,comments:l,downloads:d})=>`
        <div class="gallery">
            <a href="${s}">
            <img src="${r}" alt="${e}" title="${e}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${t}</span></li>
                <li class="info-cards-elements">views<span>${i}</span></li>
                <li class="info-cards-elements">comments<span>${l}</span></li>
                <li class="info-cards-elements">downloads<span>${d}</span></li>
            </ul>
            </a>
        </div>
        `).join("");u.innerHTML=n,v.refresh(),L.reset()}function H(o){const s=o.hits.map(({largeImageURL:e,webformatURL:t,tags:i,likes:l,views:d,comments:q,downloads:x})=>`
        <div class="gallery">
            <a href="${e}">
            <img src="${t}" alt="${i}" title="${i}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${l}</span></li>
                <li class="info-cards-elements">views<span>${d}</span></li>
                <li class="info-cards-elements">comments<span>${q}</span></li>
                <li class="info-cards-elements">downloads<span>${x}</span></li>
            </ul>
            </a>
        </div>
        `).join("");u.insertAdjacentHTML("beforeend",s),v.refresh(),L.reset();const r=u.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:r*2})}async function w(o,n){try{const s="42516413-5d4d39fc32c8318bac1e6503b",r=await P.get("https://pixabay.com/api/",{params:{key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:"15"}});if(r.data.total===0)throw new Error("No images found");return r.data}catch(s){throw s}}const p=document.querySelector(".search-form"),$=document.querySelector(".gallery-o"),b=document.querySelector(".loader"),S=document.querySelector(".loader2"),c=document.querySelector(".more-btn");let m,a,f;document.addEventListener("DOMContentLoaded",()=>{y(),p.addEventListener("submit",o);async function o(n){n.preventDefault(),A(),M(),$.innerHTML="",a=1,m=p.querySelector(".input-search").value;try{const s=await w(m,a);T(s.hits),f=Math.ceil(s.totalHits/15),h()}catch(s){k(s)}finally{y()}}});function k(o){$.innerHTML="",g.show({message:`❌ "${o}" Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}function A(){b.style.display="block"}function y(){b.style.display="none"}function C(){S.classList.remove("hidden")}function E(){S.classList.add("hidden")}c.addEventListener("click",async()=>{a+=1,C();try{const o=await w(m,a);H(o),a>1&&(E(),h())}catch(o){console.log(o)}});function N(){a===f&&(E(),h(),g.show({message:'❌ "Sorry, you have reached the end of your search results."',color:"red",position:"bottomRight",maxWidth:"320px"}))}c.addEventListener("click",N);function j(){c.classList.remove("hidden")}function M(){c.classList.add("hidden")}function h(){a>=f?M():j()}
//# sourceMappingURL=commonHelpers.js.map
