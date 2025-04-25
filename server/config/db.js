import mongoose from "mongoose";

// Function to connect to mongoDB database
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    mongoose.connection.on("error", (err) =>
      console.error("Database connection error:", err)
    );
    mongoose.connection.on("disconnected", () =>
      console.log("Database Disconnected")
    );

    await mongoose.connect(`${process.env.MONGODB_URI}/JobEase`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      retryWrites: true,
      w: "majority",
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
