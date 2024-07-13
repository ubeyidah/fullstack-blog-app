import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loginUser } from "../../utils/api.js";
import Joi from "joi";
import { useAuthContext } from "../../context/AuthContext.jsx";
import { setSessionStorageItem } from "../../utils/utils.js";

const loginSchema = Joi.object({
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

const Login = () => {
  const [loginData, setLoginData] = React.useState({ email: "", password: "" });
  const [loading, setLoading] = React.useState(false);
  const { setUser } = useAuthContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const submitUser = async (e) => {
    const toastId = toast.loading("Submitting...");
    setLoading(true);
    try {
      e.preventDefault();
      const { error } = loginSchema.validate(loginData);
      if (error) throw { message: error.details[0].message };
      const data = await loginUser(loginData);
      setSessionStorageItem(data);
      setUser(data);
      // console.log(data);
      toast.success("Login successfull");
    } catch (error) {
      toast.error(error.message);
    } finally {
      toast.dismiss(toastId);
      setLoading(false);
    }
  };
  return (
    <section>
      <form
        onSubmit={submitUser}
        className="max-w-sm mx-auto gap-5 flex flex-col mt-14"
      >
        <h1 className="text-center text-3xl font-semibold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Welcome to Blogify
          </span>
          👏
        </h1>
        <p className="py-4 mb-1  text-gray-500  text-sm text-center">
          Log in to your Blogify account to start sharing your thoughts and
          connecting with the community
        </p>
        <div className="relative mb-3">
          <input
            type="email"
            id="hs-floating-input-email-value"
            className="peer p-4 block w-full rounded-lg text-sm placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2 bg-slate-100 border border-slate-300 outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="you@email.com"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
          <label
            htmlFor="hs-floating-input-email-value"
            className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90
      peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500"
          >
            Email
          </label>
        </div>

        <div className="relative mb-3">
          <input
            type="password"
            id="hs-floating-input-passowrd-value"
            className="peer p-4 block w-full  rounded-lg text-sm placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6  focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2 bg-slate-100 border border-slate-300 outline-none focus:ring-1  focus:ring-emerald-500"
            placeholder="********"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
          <label
            htmlFor="hs-floating-input-passowrd-value"
            className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500"
          >
            Password
          </label>
        </div>
        <button
          type="submit"
          className="py-3 px-4  items-center gap-x-2 text-md  font-semibold rounded-lg border border-transparent bg-teal-100 text-teal-800 hover:bg-teal-200 disabled:opacity-50 disabled:pointer-events-none flex justify-center"
          disabled={loading}
        >
          {loading ? "Loading..." : "Log in"}
        </button>
        <p className="text-right">
          New to Blogify?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
