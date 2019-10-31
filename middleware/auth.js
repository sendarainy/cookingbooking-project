const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');
  // console.log(token)
  // Check for token
  if (!token) res.status(401).json({ msg: 'User is unauthorized' });
  try {
    // Verify token
    const decoded = jwt.verify(token, 'myJwtSecret');
    // add user to payload
    // console.log(decoded)
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
}

module.exports = auth;
