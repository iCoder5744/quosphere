import React from "react";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="relative h-full px-10 pt-12">
      {/* Close Button */}
      <button
        onClick={closeSidebar}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 mb-4"
      >
        <IoClose className="text-2xl text-gray-500" />
      </button>

      {/* Sidebar Content */}
      <nav className="flex flex-col space-y-6">
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          About
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Contact
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Settings
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Help
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Feedback
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;