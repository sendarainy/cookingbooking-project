const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = Router();
const saltRounds = 10;

// signup
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.json({ msg: 'Please fill all fields' });
  const found = await User.findOne({ email });
  if (found) return res.json({ msg: 'User with this email already exists' });
  // create user with hashed password
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    // Store hash in your password DB.
    if (err) throw err;
    const user = new User({ email, password: hash });
    await user.save();
    const token = await jwt.sign({
      id: user.id
    }, 'myJwtSecret',
    { expiresIn: 3600 });
    return res.json({ user, token });
  });
});

// router.get('/user', auth, async (req, res) => {
//   const user = await User.findById(req.user.id).select('-password');
//   res.json(user);
// });

module.exports = router;
