import {sendData} from '../modules/api.js';
import {closePopupUpload} from '../modules/close-popup.js';
import  {isEscapeKey, removeKeydownEventListener, addKeydownEventListener} from'../modules/utils.js';
import {onPopupUploadEscKeydown} from '../modules/close-popup.js';

const imgUploadForm = document.querySelector('.img-upload__form');

const successMessageTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorMessageTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');


const showSuccsessMessage = () => {
  closePopupUpload();
  removeKeydownEventListener(onPopupUploadEscKeydown);

  const messageSuccsess = successMessageTemplate.cloneNode(true);
  document.body.append(messageSuccsess);

  const successButton = document.querySelector('.success__button');
  const success = document.querySelector('.success');

  const onPopupMessageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      messageSuccsess.remove();
      removeKeydownEventListener(onPopupMessageEscKeydown);
    }
  };

  const closePopupMessage = () => {
    messageSuccsess.remove();
    removeKeydownEventListener(onPopupMessageEscKeydown);
  };

  const onSuccessButtonClick = () => {
    closePopupMessage();
  };

  success.addEventListener('click', (evt) => {
    if (!evt.target.closest('.success__inner')) {
      closePopupMessage();
    }
  });

  addKeydownEventListener(onPopupMessageEscKeydown);
  successButton.addEventListener('click', onSuccessButtonClick);
};

const showErrorMessage = () => {
  closePopupUpload();
  removeKeydownEventListener(onPopupUploadEscKeydown);

  const messageError = errorMessageTemplate.cloneNode(true);
  document.body.append(messageError);

  const errorButton = document.querySelector('.error__button');
  const error = document.querySelector('.error');

  const onPopupMessageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      messageError.remove();
      removeKeydownEventListener(onPopupMessageEscKeydown);
    }
  };

  const closePopupMessage = () => {
    messageError.remove();
    removeKeydownEventListener(onPopupMessageEscKeydown);
  };

  const onErrorButtonClick = () => {
    closePopupMessage();
  };

  error.addEventListener('click', (evt) => {
    if (!evt.target.closest('.error__inner')) {
      closePopupMessage();
    }
  });

  addKeydownEventListener(onPopupMessageEscKeydown);
  errorButton.addEventListener('click', onErrorButtonClick);
};


const onImgUploadFormSubmit = (evt) => {
  evt.preventDefault();

  sendData(
    showSuccsessMessage,
    showErrorMessage,
    new FormData(evt.target),
  );

  imgUploadForm.removeEventListener('submit', onImgUploadFormSubmit);
};


const addEventUploadForm = () => {
  imgUploadForm.addEventListener('submit', onImgUploadFormSubmit);
};

export {addEventUploadForm};
