import {addClassModalOpen} from '../modules/gallery.js';
import {onPopupUploadEscKeydown} from '../modules/close-popup.js';

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

const hideImgUploadOverlay = () => imgUploadOverlay.classList.add('hidden');

const cleanUploadFile = () => uploadFile.value = '';

const openEditForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  addClassModalOpen();
  document.addEventListener('keydown', onPopupUploadEscKeydown);
};

uploadFile.addEventListener('change', openEditForm);

export {hideImgUploadOverlay, cleanUploadFile};
