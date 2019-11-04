const { Router } = require('express');
const Venue = require('../models/Venue');

const router = Router();

// const venues = [
//   {
//     name: 'venue 1',
//     maxWorkers: 4,
//     adress: 'Some adress',
//     location: [55.112313, 65.123123]
//   },
//   {
//     name: 'venue 2',
//     maxWorkers: 4,
//     adress: 'Some adress',
//     location: [55.112313, 65.123123]
//   },
//   {
//     name: 'venue 3',
//     maxWorkers: 4,
//     adress: 'Some adress',
//     location: [55.112313, 65.123123]
//   }
// ];
router.get('/', (req, res) => {
  res.json(venues);
});
router.post('/new', async (req, res) => {
  const { name, address, phone, email } = req.body;
  if (!name || !address || !phone || !email)
    return res.json({ msg: 'Please fill all fields' });
  const venue = new Venue({
    name,
    address,
    phone,
    email
  });
  await venue.save();
  const venues = await Venue.find();
  res.json(venues);
});

module.exports = router;
