import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import { toast } from "react-hot-toast";
import { signupUser } from "../../utils/api.js";
import { useAuthContext } from "../../context/AuthContext.jsx";
import { setSessionStorageItem } from "../../utils/utils.js";

const signUpschema = Joi.object({
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

const Signup = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const [signupData, setSignupData] = React.useState({
    userName: "",
    email: "",
    password: "",
  });
  const { setUser } = useAuthContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };
  const submitUser = async (e) => {
    const toastId = toast.loading("Submitting...");
    setLoading(true);
    try {
      e.preventDefault();
      const { error } = signUpschema.validate(signupData);
      if (error) throw { message: error.details[0].message };
      const data = await signupUser(signupData);
      setSessionStorageItem(data);
      setUser(data);
      toast.success("Sign up successfull");
      navigate("/");
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
            Join Blogify Today
          </span>
          🤝
        </h1>
        <p className="py-4 mb-1  text-gray-500  text-sm text-center">
          Create your Blogify account and dive into the world of blogging.
        </p>
        <div className="relative">
          <input
            type="text"
            id="hs-floating-input-userName-value"
            className="peer p-4 block w-full rounded-lg text-sm placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2 bg-slate-100 border border-slate-300 outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="you@email.com"
            name="userName"
            value={signupData.userName}
            onChange={handleChange}
          />
          <label
            htmlFor="hs-floating-input-userName-value"
            className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90
      peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500"
          >
            User Name
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            id="hs-floating-input-email-value"
            className="peer p-4 block w-full rounded-lg text-sm placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2 bg-slate-100 border border-slate-300 outline-none focus:ring-1 focus:ring-emerald-500"
            placeholder="you@email.com"
            name="email"
            value={signupData.email}
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

        <div className="relative ">
          <input
            type="password"
            id="hs-floating-input-passowrd-value"
            className="peer p-4 block w-full  rounded-lg text-sm placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6  focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2 bg-slate-100 border border-slate-300 outline-none focus:ring-1  focus:ring-emerald-500"
            placeholder="********"
            name="password"
            value={signupData.password}
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
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <p className="text-right">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in here
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Signup;
