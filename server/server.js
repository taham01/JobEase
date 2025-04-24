import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

//Initialize Express

const app = express();

//Connect to DB
await connectDB();
//middlewears
app.use(cors());

app.use(express.json());

//Routes

app.get("/", (req, res) => res.send("Api Working"));
app.post("/webhooks", clerkWebhooks);

//Por
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
