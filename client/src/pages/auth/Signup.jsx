import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section>
      <form className="max-w-sm mx-auto gap-5 flex flex-col mt-14">
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
        >
          Sign Up
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
