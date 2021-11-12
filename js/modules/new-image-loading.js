import {addClassModalOpen} from '../modules/gallery.js';
import {onPopupUploadEscKeydown} from '../modules/close-popup.js';
import  {hideElement, cleanElement, showHiddenElement, addKeydownEventListener} from'../modules/utils.js';
import {addEventOnScaleControlButtons, addImageEffect, hideEffectLevel, putInUserPhoto} from '../modules/edit-image.js';
import {addEventUploadForm} from '../modules/submit-form.js';

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

const hideImgUploadOverlay = () => {
  hideElement(imgUploadOverlay);
};

const cleanUploadFile = () => {
  cleanElement(uploadFile);
};

const onUploadFileChange = () => {
  putInUserPhoto(uploadFile);
  addClassModalOpen();
  addKeydownEventListener(onPopupUploadEscKeydown);
  addEventOnScaleControlButtons();
  addImageEffect();
  hideEffectLevel();
  addEventUploadForm();
  showHiddenElement(imgUploadOverlay);
};

uploadFile.addEventListener('change', onUploadFileChange);

export {cleanUploadFile, hideImgUploadOverlay};
