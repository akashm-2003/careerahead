import React, { useState } from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="flex justify-center bg-gradient items-center h-screen ">
      <div className="flex bg-bgColor rounded-lg p-4 bg-shadow flex-col">
        <h1 className="text-[#fff] font-bold text-lg">Career Ahead</h1>
        <hr className="mt-2 mb-2" />
        {/* Log in Component */}
        <h1 className="text-lg mt-2 text-hoverItem">Log in</h1>
        <h2 className="text-sm text-hoverItem">Continue your research</h2>
        <form className="mt-4">
          <div className="flex flex-col p-1">
            <label htmlFor="email" className="mt-2 mb-1 text-[#fff] text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-md text-lg"
            />
          </div>
          <div className="flex flex-col p-1">
            <label htmlFor="password" className="mt-2 mb-1 text-[#fff] text-lg">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="rounded-md text-lg"
            />
          </div>
          <p className="flex flex-row p-1 justify-center">
            OR
          </p>
          <button className='border border-width border-white rounded-lg p-2 text-[#fff]'>
              Continue with Google 
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login