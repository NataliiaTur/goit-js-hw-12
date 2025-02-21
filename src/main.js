'use strict';
import axios from 'axios';

import {searchImg} from './js/pixabay-api.js';
import {renderImages} from './js/render-functions.js'

import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';


const form = document.querySelector('.form');
const galleryList = document.querySelector('.galleryList');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

let page = 1;
const perPage = 40;
let totalHits = 0;
let currentQuery = '';

function scrollAfterLoading() {
    const firstCard = galleryList.querySelector("li");

    if (firstCard) {
        const cardHeight = firstCard.getBoundingClientRect().height;
        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
        });
    }
}


form.addEventListener('submit', async evt => {
    evt.preventDefault();

    galleryList.innerHTML = '';
    page = 1; 
    loadMoreBtn.style.display = 'none';

    currentQuery = form.elements.text.value.trim();

    if (currentQuery === "") {
        iziToast.error({
            title: 'Error',
            message: "Поле пошуку не може бути порожнім!",
            position: 'topCenter',
    });
        return;
    }

    loader.style.display = 'inline-block';

    totalHits = await searchImg(currentQuery, galleryList, page, perPage)

    loader.style.display = 'none';

    if (totalHits > perPage) {
        loadMoreBtn.style.display = 'block';
        loadMoreBtn.textContent = 'Load more';
        galleryList.after(loadMoreBtn);
    }

    form.reset();
});

loadMoreBtn.addEventListener('click', async () => {
    page += 1;

    loader.style.display = 'inline-block';

    await searchImg(currentQuery, galleryList, page, perPage);

    loader.style.display = 'none';
    scrollAfterLoading();

    if(page * perPage >= totalHits) {
        loadMoreBtn.style.display = 'none';
        iziToast.info({
            title: 'Info',
            message: 'We are sorry, but you have reached the end of search results.',
            position: 'topCenter',
        });
    }
});



