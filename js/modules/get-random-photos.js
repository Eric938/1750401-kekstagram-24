import {getRandomInteger} from '../modules/random-integer.js';

const getRandomPhotos = (photos, quantity) => {
  const getRandomPhoto = () => {
    let quantityPhotos = photos.length-1;
    const photoInteger = getRandomInteger(0, quantityPhotos);
    const swap = photos[0];

    photos[0] = photos[photoInteger];
    photos[photoInteger] = swap;
    quantityPhotos = quantityPhotos - 1;
    return photos.shift();
  };

  return Array.from({length: quantity}, getRandomPhoto);
};

export {getRandomPhotos};
