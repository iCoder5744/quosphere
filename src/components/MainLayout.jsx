"use client";  // Only if needed
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )

}

export default MainLayout;
