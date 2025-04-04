import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";

// Load environment variables from .env file (this should come before using any env vars)
dotenv.config();

// Check if MongoDB URI is properly formatted
console.log("MongoDB URI:", process.env.MONGODB_URI);
//Initialize the express app
const app = express();

//Connect to MongoDB
await connectDB();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => res.send("API WORKING"));

//PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
