const { Router } = require('express');
var geocoder = require('google-geocoder');
const Venue = require('../models/Venue');

var geo = geocoder({
  key: 'AIzaSyCVqXSmsIDhO-EClFmjLr1Jj9JqlNABzOE'
});

const router = Router();

// const venues = [
//   {
//     name: 'venue 1',
//     id: '1',
//     maxWorkers: 4,
//     adress: 'Some adress',
//     img:
//       'https://www.restoclub.ru/uploads/place_thumbnail_big/3/0/8/1/3081f8f39b90c979194bd6e5920d87ed.jpg',
//     location: [55.112313, 65.123123]
//   },
//   {
//     name: 'venue 2',
//     id: '2',
//     maxWorkers: 4,
//     adress: 'Some adress',
//     img:
//       'https://avatars.mds.yandex.net/get-altay/1246719/2a0000016381f3e77d99167d30fb3d5cfbab/XXL',
//     location: [55.112313, 65.123123]
//   },
//   {
//     name: 'venue 3',
//     id: '3',
//     maxWorkers: 4,
//     adress: 'Some adress',
//     img:
//       'https://www.restoclub.ru/uploads/place_thumbnail_big/a/e/d/7/aed7f7469434c8184edee8aba025469d.jpg',
//     location: [55.112313, 65.123123]
//   }
// ];

router.get('/', async (req, res) => {
  const venues = await Venue.find();
  res.json(venues);
});
router.post('/new', async (req, res) => {
  // if (!name || !address || !phone || !email) {
  //   console.log(2, name, phone, email, address);
  //   return res.json({ msg: 'Please fill all fields' });
  // }

  const addVenue = async (data, geo) => {
    const { name, address, phone, web } = data;
    const venue = await new Venue({
      name,
      geo,
      address,
      phone,
      web
    });
    await venue.save();
  };
  await geo.find(req.body.address, async (err, resGeo) => {
    const geo = await { ...resGeo[0].location };
    await addVenue(req.body, geo);
    const venues = await Venue.find();
    res.json(venues);
  });
});

router.post('/delete', async (req, res) => {
  console.log(req.body);
  await Venue.deleteOne({ _id: req.body.id });
  const venues = await Venue.find();
  res.json(venues);
});

module.exports = router;
