import { Router } from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
const router = new Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
export default router;
