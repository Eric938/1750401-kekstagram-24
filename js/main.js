import {getPhotosGallery} from './modules/miniatures.js';
import  {onPhotoClick} from'./modules/full-size-photo.js';
import  {isEscapeKey} from'./modules/utils.js';
getPhotosGallery();

const photoList = document.querySelector('.pictures');
photoList.addEventListener('click', onPhotoClick);

document.querySelector('.social__comment-count').classList.add('hidden');
document.querySelector('.comments-loader').classList.add('hidden');
document.querySelector('body').classList.add('modal-open');

const closeButton = document.querySelector('.big-picture__cancel');
const bigPhoto = document.querySelector('.big-picture');


const closePhoto = () => {
  bigPhoto.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.querySelector('.social__comments').innerHTML = '';

};

closeButton.addEventListener('click', ()=> {
  closePhoto();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhoto();
  }
});
