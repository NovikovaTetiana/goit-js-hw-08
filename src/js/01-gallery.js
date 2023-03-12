// Add imports above this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line


const galleryElem = document.querySelector(".gallery");

function createMarkupItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__item" 
      href="${original}">
      <img 
      class="gallery__image" 
      src="${preview}"
      alt="${description}" />
      </a>
    </div>`;
    })
    .join("");
}
const markup = createMarkupItems(galleryItems);
galleryElem.insertAdjacentHTML("beforeend", markup);

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });