import {getRandomInteger} from '../modules/random-integer.js';
import {getPhoto} from '../modules/get-photo.js';
import {getComments} from '../modules/get-comments.js';

const getRandomPhoto = () => {
  const randomPhoto = getPhoto();
  const usersComments = getComments();
  return {
    url: randomPhoto.url,
    description: randomPhoto.description,
    id: randomPhoto.id,
    likes: getRandomInteger(15,200),
    comments: usersComments,
  };
};

const usersPhotos = Array.from({length: 25}, getRandomPhoto);
export {usersPhotos};
