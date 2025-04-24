import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: String,
  email: String,
  name: String,
  image: String,
  resume: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
