import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import LinkedIn from "../../assests/linkedin.png";

import "./Login.css";

const Login = () => {
  return (
    <div className="flex justify-center bg-gradient items-center h-screen ">
      <div className="flex login-page-background rounded-lg p-4 bg-shadow flex-col login-page">
        <h1 className="flex font-bold text-lg text-white items-center justify-center">
          Career Ahead
        </h1>
        <hr className="mt-2 mb-2" />
        {/* Log in Component */}
        <h1 className="text-lg mt-2 text-gray-400">Log in</h1>
        <h2 className="text-sm text-[#676767]">Continue your research</h2>
        <form className="mt-4">
          <div className="flex flex-col p-1">
            <label htmlFor="email" className="mt-2 mb-1 text-lg text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-md text-lg border hover:border-b-2 bg-[#1e1e1e]"
            />
          </div>
          <div className="flex flex-col p-1 mb-3">
            <label htmlFor="password" className="mt-2 mb-1 text-lg text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="rounded-md text-lg border hover:border-b-2 bg-[#1e1e1e]"
            />
          </div>
          <div class="flex items-center">
            <hr class="flex-grow border-t-2 border-gray-200" />
            <p class="mx-4 text-gray-500">OR</p>
            <hr class="flex-grow border-t-2 border-gray-200" />
          </div>
          {/* <p className="flex flex-col p-1 justify-center">
            <hr className="flex text-black" />
            <p>OR</p>
            <hr />
          </p> */}
          <div className="flex flex-col">
            <button className="border items-center justify-center rounded-lg p-2 flex mt-3 mb-2 w-full hover:border-b-2">
              <p className="flex text-white">Continue with Google</p>
              <FcGoogle size={20} className="mt-1 ml-3" />
            </button>
            <button className="border rounded-lg p-2 flex mb-2 w-full hover:border-b-2 items-center justify-center">
              <p className="flex text-white">Continue with LinkedIn</p>
              <img
                src={LinkedIn}
                alt="Linkedin"
                className="social-icons mt-1 ml-3"
              />
            </button>
          </div>
          <div className="flex mt-2">
            <p className="text-sm">New to Career Ahead </p>
            <p className="text-blue-500 hover:underline text-sm"> Register Now</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
