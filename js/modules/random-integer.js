const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || min > max) {
    throw new RangeError('Неправильно задан диапазон');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export {getRandomInteger};
