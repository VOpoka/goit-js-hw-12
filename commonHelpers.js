import{S as f,a as x,i as P}from"./assets/vendor-5401a4b0.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=document.querySelector(".gallery-o"),g=document.querySelector(".search-form");new f(".gallery-o");const L={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250};function B(s){const n=s.map(({largeImageURL:r,webformatURL:e,tags:t,likes:i,views:l,comments:c,downloads:d})=>`
        <div class="gallery">
            <a href="${r}">
            <img src="${e}" alt="${t}" title="${t}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${i}</span></li>
                <li class="info-cards-elements">views<span>${l}</span></li>
                <li class="info-cards-elements">comments<span>${c}</span></li>
                <li class="info-cards-elements">downloads<span>${d}</span></li>
            </ul>
            </a>
        </div>
        `).join("");u.innerHTML=n;const o=new f(".gallery-o a",L);o.on("show.simplelightbox"),o.refresh(),g.reset()}function O(s){const o=s.hits.map(({largeImageURL:t,webformatURL:i,tags:l,likes:c,views:d,comments:M,downloads:q})=>`
        <div class="gallery">
            <a href="${t}">
            <img src="${i}" alt="${l}" title="${l}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${c}</span></li>
                <li class="info-cards-elements">views<span>${d}</span></li>
                <li class="info-cards-elements">comments<span>${M}</span></li>
                <li class="info-cards-elements">downloads<span>${q}</span></li>
            </ul>
            </a>
        </div>
        `).join("");u.insertAdjacentHTML("beforeend",o);const r=new f(".gallery-o a",L);r.on("show.simplelightbox"),r.refresh(),g.reset();const e=u.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:e*2})}async function w(s,n){try{const o="42516413-5d4d39fc32c8318bac1e6503b",r=await x.get("https://pixabay.com/api/",{params:{key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:"15"}});if(r.data.total===0)throw new Error("No images found");return r.data}catch(o){throw o}}const h=document.querySelector(".search-form"),b=document.querySelector(".gallery-o"),$=document.querySelector(".loader"),v=document.querySelector(".loader2"),p=document.querySelector(".more-btn");let m,a,S;document.addEventListener("DOMContentLoaded",()=>{y(),h.addEventListener("submit",s);async function s(n){n.preventDefault(),H(),b.innerHTML="",a=1,m=h.querySelector(".input-search").value;try{const o=await w(m,a);B(o.hits),S=Math.ceil(o.totalHits/15)}catch(o){T(o)}finally{y(),E()}}});function T(s){b.innerHTML="",P.show({message:`❌ "${s}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}function H(){$.style.display="block"}function y(){$.style.display="none"}function A(){v.classList.remove("hidden")}function N(){v.classList.add("hidden")}p.addEventListener("click",async()=>{a+=1,A();try{const s=await w(m,a);O(s),a>1&&(N(),E())}catch(s){console.log(s)}});function j(){p.classList.remove("hidden")}function k(){p.classList.add("hidden")}function E(){a>=S?k():j()}
//# sourceMappingURL=commonHelpers.js.map
