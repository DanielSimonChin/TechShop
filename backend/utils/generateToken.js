const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24 * 30,
  });

  return token;
};

module.exports = generateToken;
