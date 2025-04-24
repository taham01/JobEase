import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

const app = express();
await connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Running"));
app.post("/webhooks", clerkWebhooks);

// ✅ Export instead of app.listen()
export default app;
