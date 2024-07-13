import React from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivetRoute = () => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/login?message=You must logged in first" />;
  }
  return <Outlet />;
};

export default PrivetRoute;
