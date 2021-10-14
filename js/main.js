const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || min > max) {
    throw new RangeError('Неправильно задан диапазон');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkLength = (comment, limit) => comment.length <= limit;

checkLength('Надеюсь,я правильно исправил все косяки.Кстати,спасибо за исправления', 140);

const PHOTO_ONE = {
  id: 1,
  url: 'photos/1.jpg',
  description: 'Море,пляж,лес',
};

const PHOTO_TWO = {
  id: 2,
  url: 'photos/2.jpg',
  description: 'Указатель к пляжу',
};

const PHOTO_THREE = {
  id: 3,
  url: 'photos/3.jpg',
  description: 'Фотография моря, заставляющая хотеть в отпуск',
};

const PHOTO_FOUR = {
  id: 4,
  url: 'photos/4.jpg',
  description: 'Восхитительно выглядящая девушка на фоне моря',
};

const PHOTO_FIVE = {
  id: 5,
  url: 'photos/5.jpg',
  description:'Счастливые рисовые человечки принимают ванну из карри и не знают,что скоро будут съедены (а,может,знают)',
};

const PHOTO_SIX = {
  id: 6,
  url: 'photos/6.jpg',
  description: 'Понятия не имею о марке этой черной матовой машины, но выглядит потрясающе',
};

const PHOTO_SEVEN = {
  id: 7,
  url: 'photos/7.jpg',
  description: 'Кто-то с аллергией на клубнику съел почти всю еду с красивой тарелки,стоящей на полосатом полотенце',
};

const PHOTO_EIGHT = {
  id: 8,
  url: 'photos/8.jpg',
  description: 'Две кружки морса',
};

const PHOTO_NINE = {
  id: 9,
  url: 'photos/9.jpg',
  description: 'Самолет пролетает мимо группы людей, просящих о спасении',
};

const PHOTO_TEN= {
  id: 10,
  url: 'photos/10.jpg',
  description: 'Удобная штука для хранения обуви',
};

const PHOTO_ELEVEN = {
  id: 11,
  url: 'photos/11.jpg',
  description: 'Догора в рай (к морю)',
};

const PHOTO_TWELVE = {
  id: 12,
  url: 'photos/12.jpg',
  description: 'Красивая серая ауди',
};

const PHOTO_THIRTEEN = {
  id: 13,
  url: 'photos/13.jpg',
  description: 'Разобранный ролл',
};

const PHOTO_FOURTEEN = {
  id: 14,
  url: 'photos/14.jpg',
  description: 'Котосуши',
};

const PHOTO_FIFTEEN = {
  id: 15,
  url: 'photos/15.jpg',
  description: 'Мягкая обувь, выглядящая как часть брони из мехи',
};

const PHOTO_SIXTEEN = {
  id: 16,
  url: 'photos/16.jpg',
  description: 'Горы, небо, самолет',
};

const PHOTO_SEVENTEEN = {
  id: 17,
  url: 'photos/17.jpg',
  description: 'Хор. Почти уверен, что именно так проходили собрания Пожирателей Смерти',
};

const PHOTO_EIGHTEEN = {
  id: 18,
  url: 'photos/18.jpg',
  description: 'Кто-то украл тачку Дина и перекрасил в красный. Одобряю',
};

const PHOTO_NINETEEN = {
  id: 19,
  url: 'photos/19.jpg',
  description: 'Фонарик в тапках - твой кот будет тебе благодарен (нет)',
};

const PHOTO_TWENTY = {
  id: 20,
  url: 'photos/20.jpg',
  description: 'Фотка с территории отеля, заставляющая тебя грустить осенью в -5',
};

const PHOTO_TWENTY_ONE = {
  id: 21,
  url: 'photos/21.jpg',
  description: 'Предположително, салат из курицы с зеленью и лаймом',
};

const PHOTO_TWENTY_TWO = {
  id: 22,
  url: 'photos/22.jpg',
  description: 'Улитка-Иисус ползет по поверхности моря,чтоб лучше разглядеть закат (но это не точно)',
};

const PHOTO_TWENTY_THREE = {
  id: 23,
  url: 'photos/23.jpg',
  description: 'Краб, более фотогиничный, чем когда-либо буду я',
};

const PHOTO_TWENTY_FOUR = {
  id: 24,
  url: 'photos/24.jpg',
  description: 'Фото с концерта',
};

const PHOTO_TWENTY_FIVE = {
  id: 25,
  url: 'photos/25.jpg',
  description: 'Бегемоты договариваются с водителем белой машины о цене поездки',
};

const photos = [PHOTO_ONE, PHOTO_TWO, PHOTO_THREE,PHOTO_FOUR,PHOTO_FIVE,PHOTO_SIX,PHOTO_SEVEN,PHOTO_EIGHT,PHOTO_NINE,PHOTO_TEN,PHOTO_ELEVEN,PHOTO_TWELVE,PHOTO_THIRTEEN,PHOTO_FOURTEEN,PHOTO_FIFTEEN,PHOTO_SIXTEEN,PHOTO_SEVENTEEN,PHOTO_EIGHTEEN, PHOTO_NINETEEN,PHOTO_TWENTY,PHOTO_TWENTY_ONE,PHOTO_TWENTY_TWO, PHOTO_TWENTY_THREE, PHOTO_TWENTY_FOUR, PHOTO_TWENTY_FIVE];

const getPhoto = () => {
  const photoNumber = getRandomInteger(0,photos.length-1);
  const swap = photos[0];

  photos[0] = photos[photoNumber];
  photos[photoNumber] = swap;
  return photos.shift();
};

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

const ids = [];

const getRandomId = () => {
  let usersId;

  do {usersId = getRandomInteger(0, 1000);}
  while (ids.includes(usersId));

  ids.push(usersId);
  return usersId;
};

const getComment = () => ({
  id: getRandomId(),
  avatar: AVATARS[getRandomInteger(0, AVATARS.length-1)],
  message: МESSAGES[getRandomInteger(0, МESSAGES.length-1)],
  name: NAMES[getRandomInteger(0, NAMES.length-1)],
});

const getComments = () => Array.from({length: getRandomInteger(1,6)}, getComment);

const getRandomPhoto = () => ({
  photo: getPhoto(),
  likes: getRandomInteger(15,200),
  comments: getComments(),
});

const getUsersPhotos = () => Array.from({length: 25}, getRandomPhoto);
getUsersPhotos();
