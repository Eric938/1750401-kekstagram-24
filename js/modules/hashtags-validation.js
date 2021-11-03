import {onPopupUploadEscKeydown, removeKeydownEventListener} from '../modules/close-popup.js';
import  {cleanElement} from'../modules/utils.js';
import {addKeydownEventListener} from '../modules/gallery.js';

const MAX_NUMBER_OF_HASHTAGS = 5;

const hashtagsText = document.querySelector('.text__hashtags');

const hashtagRegex = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const validateHashtags = (tags) => {
  const validateMessages = {
    INVALID_FORMAT: 'Неправильный формат хэштега',
    REPETITION: 'Один и тот же хэш-тег не может быть использован дважды',
    EXCESS_QUANTITY: 'Нельзя указать больше пяти хэш-тегов',
    NO_ERROR: '',
  };

  if (tags.length > MAX_NUMBER_OF_HASHTAGS) {
    return validateMessages.EXCESS_QUANTITY;
  }

  for (let i=0; i < tags.length; i++) {
    const tag = tags[i];

    if (!hashtagRegex.test(tag)) {
      return validateMessages.INVALID_FORMAT;
    }

    if (tags.indexOf(tag, i+1) !== -1) {
      return validateMessages.REPETITION;
    }
  }

  return validateMessages.NO_ERROR;
};

hashtagsText.addEventListener('input', () => {
  if (hashtagsText.value.length === 0) {
    hashtagsText.setCustomValidity('');
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
