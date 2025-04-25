// utils/generateToken.js
import jwt from "jsonwebtoken";

// Generates a JWT token using company ID
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
