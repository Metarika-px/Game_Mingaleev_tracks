const ANIMALS = [
  {
    id: "cat",
    name: "Кот",
    src: "img/src/cat.webp",
    track: "img/tracks/track_cat.webp",
  },
  {
    id: "chiken",
    name: "Курица",
    src: "img/src/chiken.webp",
    track: "img/tracks/track_chiken.webp",
  },
  {
    id: "cow",
    name: "Корова",
    src: "img/src/cow.webp",
    track: "img/tracks/track_cow.webp",
  },
  {
    id: "crow",
    name: "Ворона",
    src: "img/src/crow.webp",
    track: "img/tracks/track_crow.webp",
  },
  {
    id: "dog",
    name: "Собака",
    src: "img/src/dog.webp",
    track: "img/tracks/track_dog.webp",
  },
  {
    id: "duck",
    name: "Утка",
    src: "img/src/duck.webp",
    track: "img/tracks/track_duck.webp",
  },
  {
    id: "frog",
    name: "Лягушка",
    src: "img/src/frog.webp",
    track: "img/tracks/track_frog.webp",
  },
  {
    id: "horse",
    name: "Лошадь",
    src: "img/src/horse.webp",
    track: "img/tracks/track_horse.webp",
  },
  {
    id: "human",
    name: "Человек",
    src: "img/src/human.webp",
    track: "img/tracks/track_human.webp",
  },
  {
    id: "mouse",
    name: "Мышь",
    src: "img/src/mouse.png",
    track: "img/tracks/track_mouse.webp",
  },
  {
    id: "penguin",
    name: "Пингвин",
    src: "img/src/penguin.webp",
    track: "img/tracks/track_penguin.webp",
  },
  {
    id: "wolf",
    name: "Волк",
    src: "img/src/wolf.webp",
    track: "img/tracks/track_wolf.webp",
  },
];

function shuffle(arr) {
  return arr
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((o) => o.x);
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
