'use strict';

import axios from 'axios';
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    enableKeyboard: true, 
    closeOnClick: true,   
    swipeClose: true  
});

export function renderImages(images, galleryList) {
    const markup = images.map(img => 
        `<li>
            <div class="gallery">
                <a href="${img.largeImageURL}">
                    <img src="${img.largeImageURL}" alt="${img.tags}" title="${img.tags}"/>
                </a>
            </div>
            <div class="info">
                <p><b>Likes:</b> ${img.likes}</p>
                <p><b>Views:</b> ${img.views}</p>
                <p><b>Comments:</b> ${img.comments}</p>
                <p><b>Downloads:</b> ${img.downloads}</p>
            </div>
        </li>`
    ). join('');
    
    galleryList.insertAdjacentHTML('beforeend', markup);

    lightbox.refresh();
}



