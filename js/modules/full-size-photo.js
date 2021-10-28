
import {photos} from '../modules/miniatures.js';

const bigPhoto = document.querySelector('.big-picture');
const bigPictureImg = bigPhoto.querySelector('.big-picture__img');

const socialComments = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const commentsList = document.createDocumentFragment();

const getCommentsList =()=> {
  photos.forEach((photo) => {
    for (let i=0; i<photo.comments.length-1; i++){
      const usersComment = socialComment.cloneNode(true);
      usersComment.querySelector('.social__picture').src = photo.comments[i].avatar;
      usersComment.querySelector('.social__picture').alt = photo.comments[i].name;
      usersComment.querySelector('.social__text').textContent = photo.comments[i].message;
      commentsList.appendChild(usersComment);}
  });
  document.querySelector('.social__comments').innerHTML = '';
  socialComments.appendChild(commentsList);
};

const onPhotoClick = (evt) => {
  bigPhoto.classList.remove('hidden');

  getCommentsList();

  bigPictureImg.querySelector('img').src = evt.target.src;

  bigPhoto.querySelector('.social__caption').textContent = evt.target.alt;

  bigPhoto.querySelector('.likes-count').textContent = evt.target.querySelector('.picture__likes').textContent;

  bigPhoto.querySelector('.comments-count').textContent = evt.target.querySelector('.picture__comments').textContent;
};

export {onPhotoClick};
