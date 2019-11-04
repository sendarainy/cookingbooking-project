const { Router } = require('express');

const router = Router();

const venues = [
  {
    name: 'venue 1', id: '1', maxWorkers: 4, adress: 'Some adress', img: 'https://www.restoclub.ru/uploads/place_thumbnail_big/3/0/8/1/3081f8f39b90c979194bd6e5920d87ed.jpg', location: [55.112313, 65.123123]
  },
  {
    name: 'venue 2', id: '2', maxWorkers: 4, adress: 'Some adress', img: 'https://avatars.mds.yandex.net/get-altay/1246719/2a0000016381f3e77d99167d30fb3d5cfbab/XXL', location: [55.112313, 65.123123]
  },
  {
    name: 'venue 3', id: '3', maxWorkers: 4, adress: 'Some adress', img: 'https://www.restoclub.ru/uploads/place_thumbnail_big/a/e/d/7/aed7f7469434c8184edee8aba025469d.jpg',location: [55.112313, 65.123123]
  },
];

router.get('/', (req, res) => {
  res.json(venues);
});

module.exports = router;
