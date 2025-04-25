import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import { clerkWebhooks } from "./controllers/webhooks.js";
import companyRoutes from "./routes/companyRoutes.js";
import connectCloudinary from "./config/cloudinary.js";
import jobRoutes from "./routes/jobRoutes.js";

const app = express();
await connectDB();
await connectCloudinary();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Running"));
app.post("/webhooks", clerkWebhooks);
app.use("/api/company", companyRoutes);
app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default function handler(req, res) {
  return app(req, res);
}

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
