import {filterPhotos} from './modules/filter-photos.js';
import './modules/comment-validation.js';
import './modules/close-popup.js';
import './modules/new-image-loading.js';
import './modules/hashtags-validation.js';
import {getData} from './modules/api.js';
import {showAlert} from './modules/utils.js';

const onDataLoadSuccess = (data) => {
  filterPhotos(data);
};

const onDataLoadFail = (error) => {
  showAlert(error);
};

getData(onDataLoadSuccess, onDataLoadFail);
