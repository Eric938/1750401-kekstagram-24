import {addPhotos} from './modules/gallery.js';
import './modules/comment-validation.js';
import './modules/close-popup.js';
import './modules/new-image-loading.js';
import './modules/hashtags-validation.js';
import {getData} from './modules/api.js';
import {showAlert} from './modules/utils.js';


const onDataLoadSuccess = (data) => {
  addPhotos(data);
};

const onDataLoadFail = (error) => {
  showAlert(error);
};

getData(onDataLoadSuccess, onDataLoadFail);
