import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to successfully.");
  } catch (error) {
    console.log("Could't connect to db: ", error.message);
  }
};

export default connectDb;
