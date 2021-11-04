import {onPopupUploadEscKeydown} from '../modules/close-popup.js';
import  {cleanElement, addKeydownEventListener, removeKeydownEventListener} from'../modules/utils.js';

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
