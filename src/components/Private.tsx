import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function Private() {
  const { isLoggedIn } = useSelector((state: any) => state.global);

  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
}

export default Private;
