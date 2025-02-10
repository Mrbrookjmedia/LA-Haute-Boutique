"use client";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export function AdminSidebar() {
  return (
    <>
      <div className="flex h-screen">
        <div >
          <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>

              <Sidebar.ItemGroup>
                <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item href="/admin/users" icon={HiUser}>
                  Users
                </Sidebar.Item>

                <Sidebar.Collapse icon={HiShoppingBag} label="Products">
                  <Sidebar.Item href="/admin/createproducts">
                    Create Product
                  </Sidebar.Item>
                  <Sidebar.Item href="/admin/allproducts">
                    Manage Products
                  </Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Item href="/admin/orders" icon={HiTable}>
                  Orders
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default AdminSidebar;
