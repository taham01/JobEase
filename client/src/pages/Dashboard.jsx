import React, { useState } from "react";
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      {/* NavBar for recruiter pannel*/}
      <div className="shadow py-4">
        <div className="px-5 flex justify-between items-center">
          <img
            onClick={(e) => navigate("/")}
            className="max-sm:w-32 cursor-pointer outline-none"
            src={assets.logo}
            alt=""
          />
          <div className="flex items-center gap-3">
            <p className="max-sm:hidden">Welcome</p>
            <div className="relative group">
              <img
                className="w-8 rounded-full outline-none"
                src={assets.company_icon}
                alt=""
              />
              <div className="absolute hidden group-hover:block right-0 top-full mt-1">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start">
        {/*Left SideBar with the options ManageJobs, AddJob, and View applications*/}
        <div className="inline-block min-h-screen border-r-2">
          <ul className="flex flex-col items-start pt-5 text-gray-800">
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                }`
              }
              to={"/dashboard/add-job"}
            >
              <img src={assets.add_icon} alt="" />
              <p>Add Job</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                }`
              }
              to={"/dashboard/manage-job"}
            >
              <img src={assets.home_icon} alt="" />
              <p>Manage Jobs</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                }`
              }
              to={"/dashboard/view-application"}
            >
              <img src={assets.person_tick_icon} alt="" />
              <p>View Applications</p>
            </NavLink>
          </ul>
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
