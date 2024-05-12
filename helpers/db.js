import * as mongoose from "mongoose";
export const connectDB = async () => {
  console.log("Connecting to MongoDB...");
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "expense_tracker",
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("failed to connect to MongoDB");
  }
};