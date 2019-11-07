const { Router } = require('express');
const geocoder = require('google-geocoder');
const Venue = require('../models/Venue');

const location = geocoder({
  key: 'AIzaSyCVqXSmsIDhO-EClFmjLr1Jj9JqlNABzOE'
});

const router = Router();

router.get('/', async (req, res) => {
  const venues = await Venue.find();
  res.json(venues);
});
router.post('/new', async (req, res) => {
  // console.log(req.body);
  const addVenue = async (data, geo) => {
    const { name, address, phone, web, img, from, to, capacity, price } = data;
    const venue = new Venue({
      name,
      geo,
      address,
      phone,
      web,
      img,
      from,
      to,
      capacity,
      price
    });
    await venue.save();
  };
  await location.find(req.body.address, async (err, resGeo) => {
    const geo = { ...resGeo[0].location };
    await addVenue(req.body, geo);
    const venues = await Venue.find();
    res.json(venues);
  });
  // res.json('ok');
});

router.post('/delete', async (req, res) => {
  // console.log(req.body);
  await Venue.deleteOne({ _id: req.body.id });
  const venues = await Venue.find();
  res.json(venues);
});

module.exports = router;
