import {onPopupUploadEscKeydown} from '../modules/close-popup.js';

const commentText = document.querySelector('.text__description');

const MAX_COMMENT_LENGTH = 140;

commentText.addEventListener('input', () => {
  const valueLength = commentText.value.length;

  if (valueLength > MAX_COMMENT_LENGTH) {
    commentText.setCustomValidity(`Удалите лишние ${  valueLength - MAX_COMMENT_LENGTH } симв.`);
  } else {
    commentText.setCustomValidity('');
  }

  commentText.reportValidity();
});

const cleanComment = () => commentText.value = '';

commentText.addEventListener('focus', () => {
  document.removeEventListener('keydown', onPopupUploadEscKeydown);
});

commentText.addEventListener('blur', () => {
  document.addEventListener('keydown', onPopupUploadEscKeydown);
});

export {cleanComment};
