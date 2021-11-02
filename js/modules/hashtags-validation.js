import {onPopupUploadEscKeydown} from '../modules/close-popup.js';

const hashtagsText = document.querySelector('.text__hashtags');

const MAX_NUMBER_OF_HASHTAGS = 5;

const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const separator = ' ';

const validateHashtags = (tags) => {
  for (let i=0; i < tags.length; i++) {
    const tag = tags[i];

    if (!re.test(tag)) {return 'Неправильный формат хэштега';}

    if (tags.indexOf(tag, i+1) !== -1) {return 'Один и тот же хэш-тег не может быть использован дважды';}
  }


  if (tags.length > MAX_NUMBER_OF_HASHTAGS) {
    return 'Нельзя указать больше пяти хэш-тегов';
  }

  return '';
};

hashtagsText.addEventListener('input', () => {
  const hashtags = hashtagsText.value.split(separator);

  const validateMessage = validateHashtags(hashtags);

  hashtagsText.setCustomValidity(validateMessage);

  if (hashtagsText.value.length === 0) {hashtagsText.setCustomValidity('');}
});


const cleanHashtags = () => hashtagsText.value = '';

hashtagsText.addEventListener('focus', () => {
  document.removeEventListener('keydown', onPopupUploadEscKeydown);
});

hashtagsText.addEventListener('blur', () => {
  document.addEventListener('keydown', onPopupUploadEscKeydown);
});

export {cleanHashtags};
