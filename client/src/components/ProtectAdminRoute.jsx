import React, { useContext, useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const ProtectAdminRoute = () => {
  const { currentUser } = useContext(AuthContext);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if ((!currentUser || !currentUser.isAdmin) && !showToast) {
      toast.error("You need to be an admin to access!");
      setShowToast(true);
    }
  }, [currentUser, showToast]);

  if (currentUser && currentUser.isAdmin) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default ProtectAdminRoute;
