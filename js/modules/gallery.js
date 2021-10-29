import {renderPhoto, picturesListFragment} from '../modules/render-photo.js';
import {onPopupEscKeydown} from '../modules/close-popup.js';

const picturesList = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const img = bigPictureImg.querySelector('img');
const socialCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');


const socialComment = document.querySelector('.social__comment');
const socialComments = document.querySelector('.social__comments');

const renderBigPhoto = (photo) => {
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  bigPicture.classList.remove('hidden');

  img.src = photo.url;
  socialCaption.textContent = photo.description;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;

  const commentsList = document.createDocumentFragment();
  photo.comments.forEach((comment) => {
    const usersComment = socialComment.cloneNode(true);
    const socialPicture = usersComment.querySelector('.social__picture');
    socialPicture.src = comment.avatar;
    socialPicture.alt = comment.name;
    usersComment.querySelector('.social__text').textContent = comment.message;
    commentsList.appendChild(usersComment);
  });
  socialComments.innerHTML = '';
  socialComments.appendChild(commentsList);
  commentsList.remove();
};

const getPhotosGallery = (photos) => {
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');

  photos.forEach((photo) => {
    renderPhoto(photo, renderBigPhoto);
  });
  picturesList.appendChild(picturesListFragment);
  picturesListFragment.remove();
};

export {getPhotosGallery, bigPicture};
