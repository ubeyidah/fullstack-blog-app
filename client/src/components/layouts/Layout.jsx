import React from "react";
import Navbar from "../Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Toaster />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
