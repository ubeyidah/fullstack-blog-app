import Joi from "joi";
import bcrypt from "bcrypt";
import Users from "../models/user.model.js";
import { genTokenAndSetCookie } from "../utils/utils.js";

const schema = Joi.object({
  userName: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(
      new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+{}|:\"<>?`~\\-=\\[\\];',./]).{8,30}$"
      )
    )
    .message(
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    ),
});

const signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const { error } = schema.validate({ userName, email, password });
    if (error) {
      return res.status(403).json({ message: error.details[0].message });
    }
    const isUserInDb = await Users.findOne({ email });
    if (isUserInDb?.userName)
      return res
        .status(400)
        .json({ message: "This user name taken by another user." });
    if (isUserInDb?.email)
      return res
        .status(400)
        .json({ message: "This email adress taken by another user." });
    // encrypt user password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = await Users({
      userName,
      email,
      password: hashPassword,
    }).save();
    const userWithoutPassword = await Users.findById(newUser._id).select(
      "-password"
    );
    genTokenAndSetCookie(newUser._id, res);
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.log("error on signup", error.message);
    res.status(500).json({ message: error.message });
  }
};
const login = async (req, res) => {
  try {
  } catch (error) {
    console.log("error on login", error.message);
    res.status(500).json({ message: error.message });
  }
};
const logout = async (req, res) => {
  try {
  } catch (error) {
    console.log("error on logout", error.message);
    res.status(500).json({ message: error.message });
  }
};

export { signup, login, logout };
