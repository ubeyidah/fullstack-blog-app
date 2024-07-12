import jwt from "jsonwebtoken";

export const genTokenAndSetCookie = (id, res) => {
  try {
    const token = jwt.sign({ id }, process.env.JWT_SECRET);
    res.cookie("jwtBlogToken", token, {
      expires: "20d",
      maxAge: 20 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
  } catch {
    console.log("error on gen token", error.message);
    res.status(500).json({ message: error.message });
  }
};
