import  {isEscapeKey} from'../modules/utils.js';
import {hideBigPhoto} from '../modules/gallery.js';
import {hideImgUploadOverlay, cleanUploadFile} from '../modules/new-image-loading.js';
import {cleanComment} from '../modules/comment-validation.js';
import {cleanHashtags} from '../modules/hashtags-validation.js';

const closeButtonBigPicture = document.querySelector('.big-picture__cancel');
const closeButtonUpload = document.querySelector('#upload-cancel');


const closePopup = () => {
  document.body.classList.remove('modal-open');
};

const closePopupBigPhoto = () => {
  closePopup();
  hideBigPhoto();
};

const closePopupUpload = () => {
  closePopup();
  hideImgUploadOverlay();
  cleanUploadFile();
  cleanHashtags();
  cleanComment();
};

const removeKeydownEventListener = (here) => {
  document.removeEventListener('keydown', here);
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

export {onPopupBigPhotoEscKeydown, onPopupUploadEscKeydown, removeKeydownEventListener};