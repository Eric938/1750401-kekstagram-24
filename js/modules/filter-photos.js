import {addPhotos} from '../modules/gallery.js';
import  {debounce, removeElements} from'../modules/utils.js';
import {getRandomPhotos} from '../modules/get-random-photos.js';

const CLASS_BUTTON_ACTIVE = 'img-filters__button--active';
const PHOTOS_QUANTITY = 10;

const imgFilters = document.querySelector('.img-filters');
const filterDefault = imgFilters.querySelector('#filter-default');
const filterRandom = imgFilters.querySelector('#filter-random');
const filterDiscussed = imgFilters.querySelector('#filter-discussed');

const removeClassActive = (button) => {
  button.classList.remove(CLASS_BUTTON_ACTIVE);
};

const addImages = (images, clickedButton, button, knob) => {
  const pictures = document.querySelectorAll('.picture');
  removeElements(pictures);

  addPhotos(images);

  clickedButton.classList.add(CLASS_BUTTON_ACTIVE);
  removeClassActive(button);
  removeClassActive(knob);
};

const filterPhotos = (photos) => {
  addPhotos(photos);
  imgFilters.classList.remove('img-filters--inactive');

  const onFilterDefaultClick = () => {
    addImages(photos,filterDefault, filterRandom, filterDiscussed);
  };

  const onFilterRandomClick = () => {
    const receivedPhotos = photos.slice();

    const filteredPhotos = getRandomPhotos(receivedPhotos,PHOTOS_QUANTITY);

    addImages(filteredPhotos,filterRandom, filterDiscussed, filterDefault);
  };

  const onFilterDiscussedClick = () => {
    const filteredPhotos = photos.slice().sort((firstPhoto, secondPhoto) => secondPhoto.comments.length - firstPhoto.comments.length);

    addImages(filteredPhotos, filterDiscussed, filterDefault, filterRandom);
  };

  const onImgFiltersClick = (evt) => {
    const target = evt.target;

    if (target.matches('#filter-default')) {
      onFilterDefaultClick();
    }

    if (target.matches('#filter-random') ) {
      onFilterRandomClick();
    }

    if (target.matches('#filter-discussed') ) {
      onFilterDiscussedClick();
    }
  };

  imgFilters.addEventListener('click', debounce(onImgFiltersClick));
};

export {filterPhotos};
