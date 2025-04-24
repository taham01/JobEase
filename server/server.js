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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
