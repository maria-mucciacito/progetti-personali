import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const RequireAuth = () => {
  const auth = JSON.parse(localStorage.getItem("user"));

  return auth?.accessToken ? <Outlet /> : <Navigate to="/login" />;
};
