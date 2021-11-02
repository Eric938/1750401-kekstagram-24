import {renderPhoto} from '../modules/render-photo.js';
import {onPopupBigPhotoEscKeydown} from '../modules/close-popup.js';

const picturesList = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const img = bigPictureImg.querySelector('img');
const socialCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');


const socialComment = document.querySelector('.social__comment');
const socialComments = document.querySelector('.social__comments');

const addClassModalOpen = () => document.body.classList.add('modal-open');

const renderBigPhoto = (photo) => {
  addClassModalOpen();
  document.addEventListener('keydown', onPopupBigPhotoEscKeydown);
  bigPicture.classList.remove('hidden');
  commentsLoader.classList.add('hidden');
  socialCommentCount.classList.add('hidden');

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
};

const addPhotos = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    fragment.append(renderPhoto(photo, renderBigPhoto));
  });

  picturesList.appendChild(fragment);
};

const hideBigPhoto = () => bigPicture.classList.add('hidden');

export {addPhotos, hideBigPhoto, addClassModalOpen};
