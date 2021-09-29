function getRandomInt(min, max) {
  if (min<0) {
    min = min*-1;
  }

  if (max<0) {
    max = max*-1;
  }

  if (min>=max) {
    max = 2*min;
  }

  //Получение случайного целого числа в заданном интервале я взял с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(0, 100);

function lengthСheck(symbols, limit) {
  if (symbols>limit) {
    return false;
  }

  return true;
}

lengthСheck(100, 140);
