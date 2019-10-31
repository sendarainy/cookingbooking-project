const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = Router();

// signup
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.json({ msg: 'Please fill all fields' });
  const user = await User.findOne({ email });
  if (user) return res.json({ msg: 'User with this email already exists' });
  // create user with hashed password

  if (user.password === password) {
    const token = await jwt.sign({
      id: user.id
    }, 'myJwtSecret',
    { expiresIn: 3600 });
    return res.json({ user, token });
  }
});

// router.get('/user', auth, async (req, res) => {
//   const user = await User.findById(req.user.id).select('-password');
//   res.json(user);
// });

module.exports = router;
