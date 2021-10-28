import {getUsersPhotos} from '../modules/users-photos.js';

const photosList = document.querySelector('.pictures');

const templatePhotos = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photos = getUsersPhotos();

const photosListFragment = document.createDocumentFragment();

const getPhotosGallery = () => {
  photos.forEach((photo) => {
    const picture = templatePhotos.cloneNode(true);
    picture.querySelector('.picture__img').src = photo.url;
    picture.querySelector('.picture__img').alt = photo.description;
    picture.querySelector('.picture__likes').textContent = photo.likes;
    picture.querySelector('.picture__comments').textContent = photo.comments.length;
    photosListFragment.appendChild(picture);
  });

  photosList.appendChild(photosListFragment);
};

export {getPhotosGallery, photos};
