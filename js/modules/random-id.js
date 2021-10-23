import {getRandomInteger} from '../modules/random-integer.js';

const ids = [];

const getRandomId = () => {
  let usersId;

  do {usersId = getRandomInteger(0, 1000);}
  while (ids.includes(usersId));

  ids.push(usersId);
  return usersId;
};

export {getRandomId};
