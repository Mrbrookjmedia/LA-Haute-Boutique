import React, { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const ProtectRoute = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      toast.error("Please login!");
    }
  }, [currentUser]);

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoute;
