import {addPhotos} from '../modules/gallery.js';
import  {debounce, removeElements} from'../modules/utils.js';
import {getPhotos} from '../modules/get-random-photos.js';

const CLASS_BUTTON_ACTIVE = 'img-filters__button--active';
const PHOTOS_QUANTITY = 10;
const RERENDER_DELAY = 500;

const imgFilters = document.querySelector('.img-filters');
const filterDefault = imgFilters.querySelector('#filter-default');
const filterRandom = imgFilters.querySelector('#filter-random');
const filterDiscussed = imgFilters.querySelector('#filter-discussed');

const filterPhotos = (photos) => {
  addPhotos(photos);
  imgFilters.classList.remove('img-filters--inactive');

  const onFilterDefaultClick = () => {
    const pictures = document.querySelectorAll('.picture');
    removeElements(pictures);

    addPhotos(photos);

    filterDefault.classList.add(CLASS_BUTTON_ACTIVE);
    filterRandom.classList.remove(CLASS_BUTTON_ACTIVE);
    filterDiscussed.classList.remove(CLASS_BUTTON_ACTIVE);
  };

  const onFilterRandomClick = () => {
    const receivedPhotos = photos.slice();

    const filteredPhotos = getPhotos(receivedPhotos,PHOTOS_QUANTITY);

    const pictures = document.querySelectorAll('.picture');
    removeElements(pictures);

    addPhotos(filteredPhotos);

    filterRandom.classList.add(CLASS_BUTTON_ACTIVE);
    filterDefault.classList.remove(CLASS_BUTTON_ACTIVE);
    filterDiscussed.classList.remove(CLASS_BUTTON_ACTIVE);
  };

  const onFilterDiscussedClick = () => {
    const filteredPhotos = photos.slice().sort((firstPhoto, secondPhoto) => secondPhoto.likes - firstPhoto.likes);

    const pictures = document.querySelectorAll('.picture');
    removeElements(pictures);

    addPhotos(filteredPhotos);

    filterDiscussed.classList.add(CLASS_BUTTON_ACTIVE);
    filterRandom.classList.remove(CLASS_BUTTON_ACTIVE);
    filterDefault.classList.remove(CLASS_BUTTON_ACTIVE);
  };

  filterDefault.addEventListener('click', debounce(onFilterDefaultClick, RERENDER_DELAY));

  filterRandom.addEventListener('click', debounce(onFilterRandomClick, RERENDER_DELAY));

  filterDiscussed.addEventListener('click', debounce(onFilterDiscussedClick, RERENDER_DELAY));
};

export {filterPhotos};
