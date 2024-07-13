import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Please provide a title for this post."],
    },
    summary: {
      type: String,
      required: [true, "Please provide a summary for this post."],
    },
    content: {
      type: String,
      required: [true, "Please provide a main content for this post."],
    },
    image: {
      type: String,
      required: [true, "Please provide a banner image for this post."],
    },
  },
  { timestamps: true }
);

const Posts = mongoose.model("Post", postSchema);
export default Posts;
