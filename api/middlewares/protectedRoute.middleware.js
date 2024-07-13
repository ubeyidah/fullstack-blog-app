import jwt from "jsonwebtoken";
import Users from "../models/user.model.js";

const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwtBlogToken;
    if (!token) return res.status(401).json({ message: "Unauthorized." });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) return res.status(401).json({ message: "Unauthorized." });
    const user = await Users.findById(decoded.id);
    if (!user) return res.status(404).json({ message: "user not found." });
    req.user = user;
    next();
  } catch (error) {
    console.log("error on protected route", error.message);
    res.status(500).json({ message: error.message });
  }
};

export default protectedRoute;
