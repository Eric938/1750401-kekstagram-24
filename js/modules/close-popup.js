import  {isEscapeKey} from'../modules/utils.js';
import {bigPicture} from '../modules/gallery.js';

const closeButton = document.querySelector('.big-picture__cancel');

const closePhoto = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhoto();
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
};


closeButton.addEventListener('click', ()=> {
  closePhoto();
  document.removeEventListener('keydown', onPopupEscKeydown);
});

export {onPopupEscKeydown};
