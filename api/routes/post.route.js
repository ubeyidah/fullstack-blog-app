import { Router } from "express";
import multer from "multer";
const uploadMiddleware = multer({ dest: "uploads/postImages" });
import { createPost } from "../controllers/post.controller.js";
import protectedRoute from "../middlewares/protectedRoute.middleware.js";
const router = new Router();

router.post(
  "/",
  [protectedRoute, uploadMiddleware.single("image")],
  createPost
);
export default router;
