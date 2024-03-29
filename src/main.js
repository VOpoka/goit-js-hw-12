import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { renderImages } from './js/render-functions.js';
import { getPhotoBySearch } from './js/pixabay-api.js';
import { renderMoreImages } from './js/render-functions.js';

const formElem = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery-o');
const loaderElem = document.querySelector('.loader');
const loaderElem2 = document.querySelector('.loader2');
const loadMoreBtn = document.querySelector('.more-btn');
export let value;
export let page;
let maxPage;

document.addEventListener('DOMContentLoaded', () => {
  hideLoader();

  formElem.addEventListener('submit', onSubmit);

  async function onSubmit(e) {
    e.preventDefault();
    showLoader();
    hideMoreLoadBtn();
    galleryEl.innerHTML = '';
    page = 1;
    value = formElem.querySelector('.input-search').value;

    try {
      const data = await getPhotoBySearch(value, page);
      renderImages(data.hits);
      maxPage = Math.ceil(data.totalHits / 15);
      checkBtnVisibleStatus();
    } catch (error) {
      renderError(error);
    } finally {
      hideLoader();
    }
  }
});

function renderError(error) {
  galleryEl.innerHTML = '';
  iziToast.show({
    message: `❌ "${error}" Please try again!`,
    color: 'red',
    position: 'topRight',
    maxWidth: '400px',
  });
}

function showLoader() {
  loaderElem.style.display = 'block';
}

function hideLoader() {
  loaderElem.style.display = 'none';
}
function showLoader2() {
  loaderElem2.classList.remove('hidden');
}

function hideLoader2() {
  loaderElem2.classList.add('hidden');
}

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader2();
  try {
    const images = await getPhotoBySearch(value, page);

    renderMoreImages(images);

    if (page > 1) {
      hideLoader2();
      checkBtnVisibleStatus();
    }
  } catch (error) {
    console.log(error);
  }
});

function endOfCollection() {
  if (page === maxPage) {
    hideLoader2();
    checkBtnVisibleStatus();
    iziToast.show({
      message: `❌ "Sorry, you have reached the end of your search results."`,
      color: 'red',
      position: 'bottomRight',
      maxWidth: '320px',
    });
  }
}
loadMoreBtn.addEventListener('click', endOfCollection);

function showMoreLoadBtn() {
  loadMoreBtn.classList.remove('hidden');
}
function hideMoreLoadBtn() {
  loadMoreBtn.classList.add('hidden');
}

function checkBtnVisibleStatus() {
  if (page >= maxPage) {
    hideMoreLoadBtn();
  } else {
    showMoreLoadBtn();
  }
}
