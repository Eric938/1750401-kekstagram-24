import {addPhotos} from './modules/gallery.js';
import './modules/comment-validation.js';
import './modules/close-popup.js';
import './modules/new-image-loading.js';
import './modules/hashtags-validation.js';
import {getData} from './modules/api.js';
import {setImgUploadSubmit, showErrorMessage, showSuccsessMessage} from './modules/submit-form.js';


getData((photos) => {
  addPhotos(photos);
});

setImgUploadSubmit(showSuccsessMessage, showErrorMessage);
