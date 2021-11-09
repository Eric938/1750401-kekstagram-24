import  {isEscapeKey, removeKeydownEventListener} from'../modules/utils.js';
import {hideBigPhoto} from '../modules/gallery.js';
import {cleanUploadFile, hideImgUploadOverlay} from '../modules/new-image-loading.js';
import {cleanComment} from '../modules/comment-validation.js';
import {cleanHashtags} from '../modules/hashtags-validation.js';
import {cleanSocialCommentCount, removeEventMoreButton, showHiddenButton} from '../modules/show-comment.js';
import {addInitialInputValue, addOriginalEffectChecked, cleanStyles, cleanImageClasses, removeEventEffect, removeEventOnScaleControlButtons} from '../modules/edit-image.js';

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
  addOriginalEffectChecked();
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

export {closePopupUpload, onPopupBigPhotoEscKeydown, onPopupUploadEscKeydown};
