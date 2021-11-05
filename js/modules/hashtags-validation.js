import {onPopupUploadEscKeydown} from '../modules/close-popup.js';
import  {cleanElement, addKeydownEventListener, removeKeydownEventListener} from'../modules/utils.js';

const MAX_NUMBER_OF_HASHTAGS = 5;

const ValidateMessage = {
  INVALID_FORMAT: 'Неправильный формат хэштега',
  REPETITION: 'Один и тот же хэш-тег не может быть использован дважды',
  EXCESS_QUANTITY: 'Нельзя указать больше пяти хэш-тегов',
  NO_ERROR: '',
};

const hashtagsText = document.querySelector('.text__hashtags');

const hashtagRegex = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const validateHashtags = (tags) => {

  if (tags.length > MAX_NUMBER_OF_HASHTAGS) {
    return ValidateMessage.EXCESS_QUANTITY;
  }

  for (let i=0; i < tags.length; i++) {
    const tag = tags[i];

    if (!hashtagRegex.test(tag)) {
      return ValidateMessage.INVALID_FORMAT;
    }

    if (tags.indexOf(tag, i+1) !== -1) {
      return ValidateMessage.REPETITION;
    }
  }

  return ValidateMessage.NO_ERROR;
};

hashtagsText.addEventListener('input', () => {
  if (hashtagsText.value.length === 0) {
    hashtagsText.setCustomValidity(ValidateMessage.NO_ERROR);
    return;
  }

  const hashtags = hashtagsText.value.toLowerCase().split(' ');
  const validateMessage = validateHashtags(hashtags);

  hashtagsText.setCustomValidity(validateMessage);
});


const cleanHashtags = () => {
  cleanElement(hashtagsText);
};

hashtagsText.addEventListener('focus', () => {
  removeKeydownEventListener(onPopupUploadEscKeydown);
});

hashtagsText.addEventListener('blur', () => {
  addKeydownEventListener(onPopupUploadEscKeydown);
});

export {cleanHashtags};
