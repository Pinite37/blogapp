const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    const error = new Error('Unauthorized');
    error.statusCode = 401;
    throw error;
  }
  try {
    const decodedToken = jwt.verify(token, jwtSecret);
    req.user = decodedToken;
    next();
  } catch(error) {
    error.statusCode = 401;
    throw error;
  }
}

module.exports = authenticateUser;