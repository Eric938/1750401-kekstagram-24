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

const onPopupBigPhotoEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopupBigPhoto();
    document.removeEventListener('keydown', onPopupBigPhotoEscKeydown);
  }
};


closeButtonBigPicture.addEventListener('click', ()=> {
  closePopupBigPhoto();
  document.removeEventListener('keydown', onPopupBigPhotoEscKeydown);
});


const onPopupUploadEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopupUpload();
    document.removeEventListener('keydown', onPopupUploadEscKeydown);
  }
};


closeButtonUpload.addEventListener('click', ()=> {
  closePopupUpload();
  document.removeEventListener('keydown', onPopupUploadEscKeydown);
});

export {onPopupBigPhotoEscKeydown, onPopupUploadEscKeydown};
