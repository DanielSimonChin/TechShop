const jwt = require("jsonwebtoken");
const { serialize } = require("cookie");

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24 * 30,
  });

  const serializedToken = serialize("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  res.setHeader("Set-Cookie", serializedToken);
};

module.exports = generateToken;
