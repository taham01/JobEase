import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const RecruiterLogin = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [image, setImage] = useState(false);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

  const { setShowRecruiterLogin } = useContext(AppContext);

  // This useEffect us used to not let the user scroll when he is in the Recruiter login page
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const onSubmitHandler = async (e) => {
    // will prevent the webpage from reloding after submitting the form

    e.preventDefault();

    if (state == "Sign Up" && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true);
    }
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        className="relative bg-white p-10 rounded-xl text-slate-500"
        onSubmit={onSubmitHandler}
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Recruiter {state}
        </h1>
        <p className="text-sm">Welcome back ! Please sign in to continue </p>
        {state === "Sign Up" && isTextDataSubmitted ? (
          <>
            <div className="flex items-center gpa-4 my-10">
              <label htmlFor="image">
                <img
                  className="w-16 rounded-full"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                />
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  hidden
                />
              </label>
              <p>
                Upload Company <br /> logo{" "}
              </p>
            </div>
          </>
        ) : (
          <>
            {state !== "Login" && (
              <div className="flex items-center gap-4 my-10">
                <img
                  className="w-16 rounded-full"
                  src={assets.person_icon}
                  alt=""
                />
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </div>
            )}
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img className="outline-none text-sm" src={assets.email} alt="" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email Id"
                required
              />
            </div>
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.lock_icon} alt="" />
              <input
                className="outline-none text-sm"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="password"
                required
              />
            </div>
            {state === "Login" && (
              <p className="text-sm text-blue-600 mt-4 cursor pointer">
                Forgot password?
              </p>
            )}
          </>
        )}

        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded-full mt-4"
        >
          {state === "Login"
            ? "login"
            : isTextDataSubmitted
            ? "create acount"
            : "next"}
        </button>
        {state === "Login" ? (
          <p className="mt-5 text-center ">
            Don't have an account?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center ">
            Already have an account?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              {" "}
              Login
            </span>
          </p>
        )}
        <img
          onClick={(e) => setShowRecruiterLogin(false)}
          className="absolute top-5 right-5 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        />
      </form>
    </div>
  );
};

export default RecruiterLogin;
