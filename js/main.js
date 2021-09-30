const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || min > max) {
    throw new RangeError('Неправильно задан диапазон');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInteger(10,100);

const checkLength = (comment, limit) => comment.length <= limit;

checkLength('Надеюсь,я правильно исправил все косяки.Кстати,спасибо за исправления', 140);
