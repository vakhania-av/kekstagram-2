import { createCustomLengthArray, getRandomArrayElement, getRandomInt } from './util';

const POSTS_COUNT = 25;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Алевтина',
  'Антон',
  'Екатерина',
  'Наталья',
  'Олег',
  'Рахим',
  'Павел',
  'Полина',
  'Сергей',
  'Сона',
  'Юлия'
];

const LikesCount = {
  MIN: 15,
  MAX: 200
};

const CommentsCount = {
  MIN: 0,
  MAX: 30
};

const AvatarsCount = {
  MIN: 1,
  MAX: 6
};

const createCommentObject = (id = 0) => ({
  id,
  avatar: `img/avatar-${getRandomInt(AvatarsCount.MIN, AvatarsCount.MAX)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPostObject = (id = 0) => ({
  id,
  url: `photos/${id}.jpg`,
  description: `Фотография №${id}`,
  likes: getRandomInt(LikesCount.MIN, LikesCount.MAX),
  comments: createCustomLengthArray(getRandomInt(CommentsCount.MIN, CommentsCount.MAX), createCommentObject)
});

const createMockData = () => createCustomLengthArray(POSTS_COUNT, createPostObject);

export { createMockData };
