import {addClassModalOpen} from '../modules/gallery.js';
import {onPopupUploadEscKeydown} from '../modules/close-popup.js';
import  {hideElement, cleanElement, showHiddenElement, addKeydownEventListener} from'../modules/utils.js';
import {addEventOnScaleControlButtons} from '../modules/edit-image.js';
import {addImageEffect, hideEffectLevel} from '../modules/edit-image.js';

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
};

uploadFile.addEventListener('change', onUploadFileChange);

export {hideImgUploadOverlay, cleanUploadFile};
