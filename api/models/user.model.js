import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Username is required"],
      unique: [
        true,
        "Choose a unique username to identify yourself on our platform.",
      ],
      minLength: [3, "Username must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email adress is required"],
      unique: [
        true,
        "Choose a unique email to identify yourself on our platform.",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("User", userSchema);
export default Users;
