'use strict';
import axios from 'axios';

import {searchImg} from './js/pixabay-api.js';
import {renderImages} from './js/render-functions.js'

import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';


const form = document.querySelector('.form');
const galleryList = document.querySelector('.galleryList');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async evt => {
    evt.preventDefault();

    galleryList.innerHTML = '';

    const input = form.elements.text;
    const value = input.value.trim();

    if (value === "") {
        iziToast.error({
            title: 'Error',
            message: "Поле пошуку не може бути порожнім!",
            position: 'topCenter',
    });
        return;
    }

    loader.style.display = 'inline-block';

    await searchImg(value, galleryList);

    loader.style.display = 'none';

    form.reset();
});



