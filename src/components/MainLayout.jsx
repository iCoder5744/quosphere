"use client";
import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useAuth from "../useAuth"; // Custom hook to check auth state
import { useRouter } from "next/navigation";

function MainLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Redirect if user is not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/signin");
    }
  }, [user, loading, router]);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar - Fixed at top */}
      <Navbar />

      {/* Main Content - Scrollable inside the fixed Navbar */}
      <div className="flex-1 h-full">
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;

