const { Router } = require('express');

const router = Router();

const venues = [
  {
    name: 'venue 1', maxWorkers: 4, adress: 'Some adress', location: [55.112313, 65.123123]
  },
  {
    name: 'venue 2', maxWorkers: 4, adress: 'Some adress', location: [55.112313, 65.123123]
  },
  {
    name: 'venue 3', maxWorkers: 4, adress: 'Some adress', location: [55.112313, 65.123123]
  },
];
router.get('/', (req, res) => {
  res.json(venues);
});

module.exports = router;
