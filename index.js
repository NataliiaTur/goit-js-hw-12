import{S as d,a as p,i as u}from"./assets/vendor-Fd3mU3Z4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();let f=new d(".gallery a",{captionsData:"alt",captionDelay:250,enableKeyboard:!0,closeOnClick:!0,swipeClose:!0});function m(n,o){const s=n.map(t=>`<li>
            <div class="gallery">
                <a href="${t.largeImageURL}">
                    <img src="${t.largeImageURL}" alt="${t.tags}" title="${t.tags}"/>
                </a>
            </div>
            <div class="info">
                <p><b>Likes:</b> ${t.likes}</p>
                <p><b>Views:</b> ${t.views}</p>
                <p><b>Comments:</b> ${t.comments}</p>
                <p><b>Downloads:</b> ${t.downloads}</p>
            </div>
        </li>`).join("");o.insertAdjacentHTML("beforeend",s),f.refresh()}async function y(n,o){const s="48820744-2d2f423ba9a206b8d884159e3",t="https://pixabay.com/api/";try{const e=await p.get(t,{params:{key:s,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}});if(console.log("Результати пошуку:",e.data.hits),o.innerHTML="",e.data.hits.length===0){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"});return}m(e.data.hits,o)}catch(e){console.log("Помилка при запиті:",e)}}const i=document.querySelector(".form"),l=document.querySelector(".galleryList"),c=document.querySelector(".loader");i.addEventListener("submit",async n=>{n.preventDefault(),l.innerHTML="";const s=i.elements.text.value.trim();if(s===""){u.error({title:"Error",message:"Поле пошуку не може бути порожнім!",position:"topCenter"});return}c.style.display="inline-block",await y(s,l),c.style.display="none",i.reset()});
//# sourceMappingURL=index.js.map
