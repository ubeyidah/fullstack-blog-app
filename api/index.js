import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import connectDb from "./config/connect.js";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/uploads/postImages", express.static("uploads/postImages"));
// routes
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  connectDb();
  console.log(`listening on http://localhost:${port}`);
});
