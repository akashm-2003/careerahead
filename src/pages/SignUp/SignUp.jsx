import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import LinkedIn from "../../assests/linkedin.png";
import "./SignUp.css";
import { auth, googleProvider } from "../../auth/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { Firestore, collection } from "@firebase/firestore";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signUpUser = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill all the details");
      return;
    } else await signIn();
  };
  const signIn = async () => {
    // const addUserData = async (auth, email, name) => {
    //   console.log(name);
    //   updateProfile(auth.currentUser,{email:email,displayName:name})
    // }
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async (value) => {
          await updateProfile(value.user, { displayName: name });
        }
      );
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  // const addUserData = async (user, email, name) => {
  //   collection("Teachers").doc(user).set({ email:email, userName:name }).then(() => {console.log('submit');})
  // }
  console.log(auth?.currentUser);
  return (
    <div className="flex justify-center bg-gradient-signup items-center h-screen ">
      <div className="flex signup-page-background rounded-lg p-4 bg-shadow-signup flex-col signup-page">
        <h1 className="flex font-bold text-lg unhighlightedText items-center justify-center">
          Masters Way
        </h1>
        <hr className="mt-2 mb-2" />
        <h1 className="text-lg mt-2 text-[#0a1d56f5]">
          Create a Masters Way ID
        </h1>
        <h2 className="text-sm text-[#0a1d56f5]">
          One step before starting your research
        </h2>
        <div className="mt-4">
          <form>
            <div className="flex flex-col p-1">
              <label
                htmlFor="username"
                className="mt-2 mb-1 text-xl text-[#0a1d56f5]"
              >
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="username"
                id="username"
                className="rounded-md  text-lg border h-[2.5em] border-gray-400 binput-color input-clicked-login"
              />
            </div>
            <div className="flex flex-col p-1 mb-3">
              <label
                htmlFor="email"
                className="mt-2 mb-1 text-xl text-[#0a1d56f5]"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="rounded-md  text-lg border h-[2.5em] border-gray-400 input-clicked-signup input-color "
                // className="rounded-md text-lg border hover:border-b-2 bg-[#1e1e1e]"
              />
            </div>
            <div className="flex flex-col p-1 mb-3">
              <label
                htmlFor="password"
                className="mt-2 mb-1 text-xl text-[#0a1d56f5]"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                className="rounded-md  text-lg border h-[2.5em] border-gray-400 input-clicked-login input-color "
                // className="rounded-md text-lg border hover:border-b-2 bg-[#1e1e1e]"
              />
            </div>
            <button
              type="submit"
              onClick={signUpUser}
              className="border items-center justify-center rounded-lg p-2 flex mt-3 mb-2 w-full hover:bg-gray-200"
            >
              <p className="flex text-[#0a1d56f5]">Create your account</p>
            </button>
          </form>
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
            <button
              onClick={signInWithGoogle}
              className="border items-center justify-center rounded-lg p-2 flex mt-3 mb-2 w-full hover:bg-gray-200"
            >
              <p className="flex text-[#0a1d56f5]">Continue with Google</p>
              <FcGoogle size={20} className="mt-1 ml-3" />
            </button>
            <button className="border rounded-lg p-2 flex mb-2 w-full hover:bg-gray-200 items-center justify-center">
              <p className="flex text-[#0a1d56f5]">Continue with LinkedIn</p>
              <img
                src={LinkedIn}
                alt="Linkedin"
                className="social-icons mt-1 ml-3"
              />
            </button>
          </div>
          <div className="flex mt-2">
            <p className="text-sm mr-1">Already have an Account ?</p>
            <NavLink to="/login">
              <p className="text-blue-500 hover:underline text-sm">
                Login here
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
