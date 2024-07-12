import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
