import { Webhook } from "svix";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log("✅ POST request received");

  try {
    const payload = JSON.stringify(req.body);
    console.log("🟢 Payload:", payload);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    console.log("🟢 Headers:", headers);

    const { default: connectDB } = await import("../server/config/db.js");
    const { default: User } = await import("../server/models/User.js");

    await connectDB();
    console.log("✅ Connected to MongoDB");

    // ❗ Temporarily skip verification just to test DB flow
    // const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    // wh.verify(payload, headers);

    const { data, type } = req.body;
    console.log("🟢 Type:", type);
    console.log("🟢 Data:", data);

    if (type === "user.created") {
      const newUser = {
        _id: data.id,
        email: data.email_addresses?.[0]?.email_address || "noemail",
        name: `${data.first_name} ${data.last_name}`.trim(),
        image: data.image_url,
        resume: "",
      };
      console.log("🟢 Creating user:", newUser);
      await User.create(newUser);
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Handler Error:", err.stack);
    res.status(400).json({ error: err.message });
  }
}
