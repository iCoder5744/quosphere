"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import Sidebar from "./Sidebar"; // Sidebar component
import useAuth from "../useAuth"; // ✅ Ensure correct import
import { logOut } from "../authService"; // Firebase logout function
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user: authUser } = useAuth(); // Get the logged-in user
  const router = useRouter();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  const handleLogout = async () => {
    await logOut();
    router.push("/auth/signin"); // Redirect to login after logout
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full h-16 flex items-center justify-between px-2 sm:px-3 md:px-4 bg-gray-50 text-white">
        {/* Left Side - Logo and Menu Icon */}
        <div className="w-full md:w-fit flex items-center max-sm:justify-between">
          <RiMenu2Line
            size={28}
            className="md:hidden cursor-pointer text-gray-600 mr-2"
            onClick={toggleSidebar}
          />

          <Image src="/logo.png" alt="" width={200} height={20} className="h-10 md:w-[200px]" />

          {/* Login Button (Small Screens) */}
          {!authUser && (
            <button
              onClick={() => router.push("/auth/signin")}
              className="sm:hidden bg-blue-500 text-white px-3 py-1 rounded-md"
            >
              Login
            </button>
          )}

          {/* Profile Icon (Small Screens) */}
          {authUser && (
            <div
              onClick={toggleProfile}
              className="sm:hidden min-w-10 min-h-10 bg-gray-600 rounded-full cursor-pointer"
            ></div>
          )}
        </div>

        {/* Right Side - Search Bar, Links & Profile */}
        <div className="sm:w-full flex items-center justify-end md:ml-4 gap-2 md:gap-4">
          {/* Search Bar - Hidden on Small Screens */}
          <div className="hidden sm:flex items-center w-full md:max-w-sm border border-gray-300 rounded-full px-3 max-md:mr-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none text-gray-400 p-1"
            />
            <BsSearch
              size={16}
              className="text-gray-400 cursor-pointer border-l border-gray-300 py-1 pl-2 h-8 w-8"
            />
          </div>

          {/* Navigation Links - Hidden on Small Screens */}
          <div className="hidden md:flex gap-3 lg:gap-4 text-gray-600 md:mr-2 lg:mr-10">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">Trending</a>
            <a href="#" className="hover:text-gray-400">Subscriptions</a>
            <a href="#" className="hover:text-gray-400">Topest</a>
          </div>

          {/* Login Button (Large Screens) */}
          {!authUser && (
            <button
              onClick={() => router.push("/auth/signin")}
              className="hidden sm:block bg-blue-500 text-white px-3 py-1 rounded-md"
            >
              Login
            </button>
          )}

          {/* Profile Icon - Large Screens */}
          {authUser && (
            <div className="relative">
              <div
                onClick={toggleProfile}
                className="max-sm:hidden min-w-10 min-h-10 bg-gray-600 rounded-full cursor-pointer"
              ></div>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md text-gray-700">
                  <p className="p-2 text-center border-b">{authUser.email}</p>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Overlay and Sidebar */}
      {isSidebarOpen && (
        <>
          <div
            style={{ backgroundColor: "rgba(31, 41, 55, 0.5)" }} // RGB color with 50% opacity
            className={`fixed inset-0 z-40 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            onClick={closeSidebar}
          ></div>

          {/* Sidebar */}
          <div
            className={`fixed inset-y-0 left-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <Sidebar closeSidebar={closeSidebar} />
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
