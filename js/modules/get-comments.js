import {getRandomInteger} from './modules/random-integer.js';
import {getRandomId} from './modules/random-id.js';

const AVATARS = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

const МESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Тим',
  'Джейсон',
  'Ричард',
  'Дамиан',
  'Брюс',
  'Альфред',
  'Кассандра',
  'Дюк',
  'Барбара',
  'Стефани',
  'Харли',
  'Айви',
];

const getComment = () => ({
  id: getRandomId(),
  avatar: AVATARS[getRandomInteger(0, AVATARS.length-1)],
  message: МESSAGES[getRandomInteger(0, МESSAGES.length-1)],
  name: NAMES[getRandomInteger(0, NAMES.length-1)],
});

const getComments = () => Array.from({length: getRandomInteger(1,6)}, getComment);

export {getComments};
