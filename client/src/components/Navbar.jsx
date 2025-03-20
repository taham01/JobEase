import React from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser(); //used to get the users information (ifthe user is logged in --> then the user constant exists, if not logged in the user does not exist)

  return (
    <div className="shadow py-4">
      <div className="container px-4 2x1:px-20 mx-auto flex justify-between items-center ">
        <img src={assets.logo} alt="" />
        {user ? (
          <div className="flex item-center gap-3">
            <Link to={"/application"}>Applied Jobs</Link>
            <p> | </p>
            <p className="max-sm hidden">
              Hi, {user.firstName + " " + user.lastName}
            </p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button className="text-gray-600">Recruiter Login</button>
            <button
              onClick={(e) => openSignIn()}
              className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
