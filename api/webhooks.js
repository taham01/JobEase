import { Webhook } from "svix";
import mongoose from "mongoose";

// Manual schema in case import fails — fallback for simplicity
const userSchema = new mongoose.Schema({
  _id: String,
  email: String,
  name: String,
  image: String,
  resume: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

// Connect DB inline to prevent import issues
const connectDB = async () => {
  if (mongoose.connections[0].readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log("✅ Webhook hit");

  try {
    await connectDB();

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    wh.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          image: data.image_url,
          resume: "",
        };
        await User.create(userData);
        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          image: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData);
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        break;
      }

      default:
        break;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Webhook error:", err.message);
    res.status(400).json({ error: err.message });
  }
}
