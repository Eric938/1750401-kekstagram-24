import  {isEscapeKey, removeKeydownEventListener} from'../modules/utils.js';
import {hideBigPhoto} from '../modules/gallery.js';
import {hideImgUploadOverlay, cleanUploadFile} from '../modules/new-image-loading.js';
import {cleanComment} from '../modules/comment-validation.js';
import {cleanHashtags} from '../modules/hashtags-validation.js';
import {removeEventMoreButton, showHiddenButton, cleanSocialCommentCount} from '../modules/show-comment.js';
import {removeEventOnScaleControlButtons, cleanStyles, cleanImageClasses, removeEventEffect, addInitialInputValue} from '../modules/edit-image.js';

const closeButtonBigPicture = document.querySelector('.big-picture__cancel');
const closeButtonUpload = document.querySelector('#upload-cancel');

const closePopup = () => {
  document.body.classList.remove('modal-open');
};

const closePopupBigPhoto = () => {
  closePopup();
  hideBigPhoto();
  showHiddenButton();
  removeEventMoreButton();
  cleanSocialCommentCount();
};

const closePopupUpload = () => {
  closePopup();
  hideImgUploadOverlay();
  cleanUploadFile();
  cleanHashtags();
  cleanComment();
  removeEventOnScaleControlButtons();
  cleanStyles();
  cleanImageClasses();
  removeEventEffect();
  addInitialInputValue();
};

const onPopupBigPhotoEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopupBigPhoto();
    removeKeydownEventListener(onPopupBigPhotoEscKeydown);
  }
};

closeButtonBigPicture.addEventListener('click', ()=> {
  closePopupBigPhoto();
  removeKeydownEventListener(onPopupBigPhotoEscKeydown);
});


const onPopupUploadEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopupUpload();
    removeKeydownEventListener(onPopupUploadEscKeydown);
  }
};


closeButtonUpload.addEventListener('click', ()=> {
  closePopupUpload();
  removeKeydownEventListener(onPopupUploadEscKeydown);
});

export {onPopupBigPhotoEscKeydown, onPopupUploadEscKeydown, closePopupUpload};
