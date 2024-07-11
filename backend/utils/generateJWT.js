const jwt = require("jsonwebtoken");
const dotenv  = require("dotenv");
dotenv.config();

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" })
};

module.exports = generateToken;