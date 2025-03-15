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
      <div className="flex-1 h-full" >
        {children}
      </div>

      <Footer />
    </div>
  )

}

export default MainLayout;
