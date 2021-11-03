import {onPopupUploadEscKeydown, removeKeydownEventListener} from '../modules/close-popup.js';
import  {cleanElement} from'../modules/utils.js';
import {addKeydownEventListener} from '../modules/gallery.js';

const commentText = document.querySelector('.text__description');

const cleanComment = () => {
  cleanElement(commentText);
};

commentText.addEventListener('focus', () => {
  removeKeydownEventListener(onPopupUploadEscKeydown);
});

commentText.addEventListener('blur', () => {
  addKeydownEventListener(onPopupUploadEscKeydown);
});

export {cleanComment};
