// verifyToken.js
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY; // Load your secret key from environment variables

function verifyToken(req, res, next) {
  const token = req.header('Authorization'); // Assuming you send the token in the 'Authorization' header

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // Attach the decoded user to the request object
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token.' });
  }
}

module.exports = verifyToken;
