import {getRandomInteger} from '../modules/random-integer.js';

const getPhotos = (photos, photosQuantity) => {
  const getRandomPhoto = () => {
    let quantity = photos.length-1;
    const photoInteger = getRandomInteger(0,quantity);
    const swap = photos[0];

    photos[0] = photos[photoInteger];
    photos[photoInteger] = swap;
    quantity = quantity - 1;
    return photos.shift();
  };

  return Array.from({length: photosQuantity}, getRandomPhoto);
};

export {getPhotos};
