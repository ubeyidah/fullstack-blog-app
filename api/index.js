import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import connectDb from "./config/connect.js";
import "dotenv/config";
import multer from "multer";
const uploadMiddleware = multer({ dest: "uploads/postImages" });
import fs from "fs";

const app = express();
app.use(express.json());
app.use(cookieParser());
// routes
app.use("/api/auth", authRoutes);

app.post(
  "/api/auth/post",
  uploadMiddleware.single("image"),
  async (req, res) => {
    try {
      const { originalname, path } = req.file;
      const parts = originalname.split(".");
      const ext = parts[parts.length - 1];
      fs.renameSync(path, `${path}.${ext}`);
      res.status(200).json(req.body);
    } catch (error) {
      res.json({ error: error.message });
    }
  }
);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  connectDb();
  console.log(`listening on http://localhost:${port}`);
});
