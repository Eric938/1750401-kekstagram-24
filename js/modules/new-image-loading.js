import {addClassModalOpen} from '../modules/gallery.js';
import {onPopupUploadEscKeydown} from '../modules/close-popup.js';
import  {hideElement, cleanElement, showHiddenElement, addKeydownEventListener} from'../modules/utils.js';
import {addEventOnScaleControlButtons, addImageEffect, hideEffectLevel} from '../modules/edit-image.js';
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
  showHiddenElement(imgUploadOverlay);
  addClassModalOpen();
  addKeydownEventListener(onPopupUploadEscKeydown);
  addEventOnScaleControlButtons();
  addImageEffect();
  hideEffectLevel();
  addEventUploadForm();
};

uploadFile.addEventListener('change', onUploadFileChange);

export {cleanUploadFile, hideImgUploadOverlay};
