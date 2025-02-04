import React, { useState } from "react";
import axios from "axios";
import CreateNewProduct from "./CreateNewProduct";
import { AdminSidebar } from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <AdminSidebar/>
        </div>
        <div className="flex-1">
          <Outlet/>
        </div>
      </div>
      {/* <CreateNewProduct/> */}

    </div>

  );
};

export default AdminDashboard;
