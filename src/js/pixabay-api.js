'use strict';

import axios from 'axios';

import { renderImages } from './render-functions.js';

import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

export async function searchImg(query, galleryList) { 
    const API_KEY = '48820744-2d2f423ba9a206b8d884159e3';
    const BASE_URL = 'https://pixabay.com/api/';

    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true
            }
        });

        console.log("Результати пошуку:", response.data.hits);

        galleryList.innerHTML = '';

        if(response.data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topCenter'
            });
            return;
        }
        renderImages(response.data.hits, galleryList);

    } catch (error) {
        console.log("Помилка при запиті:", error);
    }
}