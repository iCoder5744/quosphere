"use client";
import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import useAuth from "../useAuth"; // Custom hook to check auth state
import { useRouter, usePathname } from "next/navigation";

function MainLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname(); // Get current route

  // List of authentication pages
  const authPages = ["/auth/signin", "/auth/signup"];

  // Redirect if user is not authenticated and NOT on an auth page
  useEffect(() => {
    if (!loading && !user && !authPages.includes(pathname)) {
      router.push("/auth/signup"); // Redirect to signup if not authenticated
    }
  }, [user, loading, router, pathname]);

  if (loading) return <p className="text-center">Loading...</p>;

  // Hide Navbar & Footer on auth pages
  const isAuthPage = authPages.includes(pathname);

  return (
    <div className="h-screen flex flex-col">
      {!isAuthPage && <Navbar />}
      <div className="flex-1 h-full">{children}</div>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default MainLayout;

