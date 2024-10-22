import { Router } from "express";
import multer from "multer";
const uploadMiddleware = multer({ dest: "uploads/postImages" });
import {
  createPost,
  getPosts,
  getPost,
} from "../controllers/post.controller.js";
import protectedRoute from "../middlewares/protectedRoute.middleware.js";
const router = new Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post(
  "/",
  [protectedRoute, uploadMiddleware.single("image")],
  createPost
);
export default router;
