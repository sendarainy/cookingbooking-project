const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = Router();

// login
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.json({ msg: 'Please fill all fields' });
  const user = await User.findOne({ email });
  if (!user) return res.json({ msg: 'No user found' });
  bcrypt.compare(password, user.password, async (err, result) => {
    if (err) throw err;
    if (result) {
      const token = await jwt.sign({
        id: user.id
      }, 'myJwtSecret',
      { expiresIn: 3600 });
      return res.json({ user, token });
    }
    return res.json({ msg: 'Password/Email is incorrect' });
  });
});
// check for logged user
router.get('/user', auth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});

module.exports = router;