import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery-o');
const formElem = document.querySelector('.search-form');

const options = {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  animation: 250,
};

const lightbox = new SimpleLightbox('.gallery-o a', options);

export function renderImages(array) {
  const markup = array
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <div class="gallery">
            <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" title="${tags}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${likes}</span></li>
                <li class="info-cards-elements">views<span>${views}</span></li>
                <li class="info-cards-elements">comments<span>${comments}</span></li>
                <li class="info-cards-elements">downloads<span>${downloads}</span></li>
            </ul>
            </a>
        </div>
        `;
      }
    )
    .join('');
  galleryEl.innerHTML = markup;

  lightbox.refresh();
  formElem.reset();
}

export function renderMoreImages(images) {
  const hitsArray = images['hits'];
  const markup = hitsArray
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <div class="gallery">
            <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" title="${tags}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${likes}</span></li>
                <li class="info-cards-elements">views<span>${views}</span></li>
                <li class="info-cards-elements">comments<span>${comments}</span></li>
                <li class="info-cards-elements">downloads<span>${downloads}</span></li>
            </ul>
            </a>
        </div>
        `;
      }
    )
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
  formElem.reset();

  const height = galleryEl.firstElementChild.getBoundingClientRect().height;
  scrollBy({
    behavior: 'smooth',
    top: height * 2,
  });
}
