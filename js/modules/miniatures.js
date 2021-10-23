import {getUsersPhotos} from '../modules/users-photos.js';

const photosListElement = document.querySelector('.pictures');

const templatePhotos = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photos = getUsersPhotos();
const photo1 = photos[0];

const photosListFragment = document.createDocumentFragment();

photos.forEach((photo) => {
  const photoElement = templatePhotos.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo1.comments.length;
  photosListFragment.appendChild(photoElement);
});

photosListElement.appendChild(photosListFragment);
