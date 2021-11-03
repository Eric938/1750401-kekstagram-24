import {renderPhoto} from '../modules/render-photo.js';
import {onPopupBigPhotoEscKeydown} from '../modules/close-popup.js';
import  {hideElement, showHiddenElement} from'../modules/utils.js';

const picturesList = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const img = bigPictureImg.querySelector('img');
const socialCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const moreCommentsButton = bigPicture.querySelector('.comments-loader');

const socialComment = document.querySelector('.social__comment');
const socialComments = document.querySelector('.social__comments');

const addClassModalOpen = () => {
  document.body.classList.add('modal-open');
};

const addKeydownEventListener = (here) => {
  document.addEventListener('keydown', here);
};

const renderBigPhoto = (photo) => {
  addClassModalOpen();
  addKeydownEventListener(onPopupBigPhotoEscKeydown);
  showHiddenElement(bigPicture);
  hideElement(socialCommentCount);
  hideElement(moreCommentsButton);

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
  picturesList.append(...photos.map((photo) => renderPhoto(photo, renderBigPhoto)));
};

const hideBigPhoto = () => {
  hideElement(bigPicture);
};

export {addPhotos, hideBigPhoto, addClassModalOpen, addKeydownEventListener};
