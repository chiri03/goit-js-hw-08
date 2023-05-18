// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
// Additional styles import
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryIMG = document.querySelector('.gallery');
galleryItems.forEach(element => {
  galleryIMG.innerHTML += `<li class="gallery__item">
      <a class="gallery__link" href="${element.original}">
        <img
          class="gallery__image"
          src="${element.preview}"
          data-source="${element.original}"
          alt="${element.description}"
          title="${element.description}"
        />
      </a>
    </li>`;
});

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', () => {
  gallery.defaultOptions.captionDelay = 250;
});
