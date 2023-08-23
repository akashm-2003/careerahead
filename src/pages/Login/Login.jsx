import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import LinkedIn from "../../assests/linkedin.png";

import "./Login.css";

const Login = () => {
  return (
    <div className="flex justify-center bg-gradient items-center h-screen ">
      <div className="flex login-page-background rounded-lg p-4 bg-shadow flex-col login-page">
        <h1 className="flex font-bold text-lg text-white items-center justify-center">
          Masters Way
        </h1>
        <hr className="mt-2 mb-2" />
        {/* Log in Component */}
        <h1 className="text-lg mt-2 text-gray-400">Log in</h1>
        <h2 className="text-sm text-[#676767]">Continue your research</h2>
        <div className="mt-4">
          <div className="flex flex-col p-1">
            <label htmlFor="email" className="mt-2 mb-1 text-xl text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-md  text-lg border h-[2.5em] border-gray-400 bg-[#1e1e1e] input-clicked-login"
            />
          </div>
          <div className="flex flex-col p-1 mb-3">
            <label htmlFor="password" className="mt-2 mb-1 text-xl text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="rounded-md  text-lg border h-[2.5em] border-gray-400 input-clicked-login bg-[#1e1e1e] "
              // className="rounded-md text-lg border hover:border-b-2 bg-[#1e1e1e]"
            />
          </div>
          <button type="submit" className="border items-center justify-center rounded-lg p-2 flex mt-3 mb-2 w-full hover:bg-gray-800">
            <p className="flex text-white">Log into your account</p>
          </button>
          <div className="flex items-center">
            <hr className="flex-grow border-t-2 border-gray-200" />
            <p className="mx-4 text-gray-500">OR</p>
            <hr className="flex-grow border-t-2 border-gray-200" />
          </div>
          {/* <p className="flex flex-col p-1 justify-center">
            <hr className="flex text-black" />
            <p>OR</p>
            <hr />
          </p> */}
          <div className="flex flex-col">
            <button className="border items-center justify-center rounded-lg p-2 flex mt-3 mb-2 w-full hover:bg-gray-800">
              <p className="flex text-white">Continue with Google</p>
              <FcGoogle size={20} className="mt-1 ml-3" />
            </button>
            <button className="border rounded-lg p-2 flex mb-2 w-full hover:bg-gray-800 items-center justify-center">
              <p className="flex text-white">Continue with LinkedIn</p>
              <img
                src={LinkedIn}
                alt="Linkedin"
                className="social-icons mt-1 ml-3"
              />
            </button>
          </div>
          <div className="flex mt-2">
            <p className="text-sm mr-1">New to Career Ahead ?</p>
            <p className="text-blue-500 hover:underline text-sm">
              Register Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
