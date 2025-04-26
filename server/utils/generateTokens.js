// utils/generateToken.js
import jwt from "jsonwebtoken";

// Generates a JWT token using company ID
const generateToken = (id) => {
  const secret = process.env.JWT_SECRET;
  console.log("JWT_SECRET value:", secret);

  if (!secret) {
    throw new Error("JWT_SECRET environment variable is not configured");
  }

  try {
    return jwt.sign({ id }, secret.trim(), {
      expiresIn: "30d",
    });
  } catch (error) {
    console.error("Error generating token:", error);
    throw error;
  }
};

export default generateToken;
