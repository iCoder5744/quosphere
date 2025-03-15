"use client";  // Only if needed
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar - Fixed at top */}
      <Navbar />

      {/* Main Content - Scrollable inside the fixed Navbar */}
      <div className="flex-1 overflow-y-auto bg-gray-100" style={{ height: "calc(100vh - 4rem)" }}>
        {children}
      </div>

      <Footer />
    </div>
  )

}

export default MainLayout;
