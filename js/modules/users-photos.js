import {getRandomInteger} from './modules/random-integer.js';
import {getPhoto} from './modules/get-photo.js';
import {getComments} from './modules/get-comments.js';

const getRandomPhoto = () => ({
  photo: getPhoto(),
  likes: getRandomInteger(15,200),
  comments: getComments(),
});

const getUsersPhotos = () => Array.from({length: 25}, getRandomPhoto);

export {getUsersPhotos};
