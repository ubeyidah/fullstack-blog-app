import fs from "fs";
import Joi from "joi";
import Posts from "../models/post.model.js";
const postSchema = Joi.object({
  title: Joi.string().required(),
  summary: Joi.string().required(),
  image: Joi.string().required(),
  content: Joi.string().required(),
});
const createPost = async (req, res) => {
  try {
    const authorInfo = req.user;
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const image = `${path}.${ext}`;
    fs.renameSync(path, image);
    const { title, summary, content } = req.body;
    const { error } = postSchema.validate({ title, summary, content, image });
    if (error) {
      return res.status(403).json({ message: error.details[0].message });
    }
    if (!authorInfo) return res.status(401).json({ message: "Unauthorized." });
    await Posts({
      authorId: authorInfo._id,
      title,
      summary,
      content,
      image,
    }).save();
    res.status(201).json({ message: "post successfully created." });
  } catch (error) {
    console.log("error on create post", error.message);
    res.status(500).json({ message: error.message });
  }
};

export { createPost };
