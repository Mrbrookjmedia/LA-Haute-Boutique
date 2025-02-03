import React, { useState, useEffect } from "react";
import { User, MapPin, Phone, Mail, Edit, LogOut } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";

const UserPage = () => {
  const navigate = useNavigate();
  const { currentUser, logout, refreshUserData, wishlistItems } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders and refresh wishlist data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Orders endpoint returns an empty array for now
        const ordersResponse = await apiRequest.get("/orders/user");
        await refreshUserData(); // refresh wishlist from backend

        setOrders(ordersResponse.data);
        setError(null);
        setIsLoading(false);
      } catch (err) {
        console.error("User details fetch error:", err);
        setError("Failed to load user details");
        setIsLoading(false);
      }
    };

    if (currentUser) {
      fetchUserData();
    }
  }, [currentUser, refreshUserData]);

  // Logout handler
  const handleLogout = async () => {
    try {
      const response = await apiRequest.post("/auth/logout");
      toast.success(response.data.message);
      setTimeout(() => {
        logout();
        navigate("/");
      }, 1000);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Logout failed");
    }
  };


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await apiRequest.get("/orders/user");
        setOrders(response.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };
  
    if (currentUser) {
      fetchOrders();
    }
  }, [currentUser]);
  


  

  // Remove an item from wishlist. (This calls /api/user/wishlist/:productId)
  const handleRemoveFromWishlist = async (productId) => {
    try {
      const response = await apiRequest.delete(`/user/wishlist/${productId}`);
      // The response should return the updated wishlist.
      toast.success("Item removed from wishlist");
      await refreshUserData(); // update global wishlist state
    } catch (err) {
      console.error("Error removing from wishlist:", err);
      toast.error("Failed to remove item from wishlist");
    }
  };

  // Helper to render fields with optional edit link
  const renderEditableField = (label, value, editLink) => (
    <div className="flex items-center text-gray-600">
      {label}
      {!value && (
        <Link
          to={editLink}
          className="ml-2 text-blue-600 hover:text-blue-700 flex items-center text-sm"
        >
          <Edit className="w-4 h-4 mr-1" /> Add {label}
        </Link>
      )}
    </div>
  );

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <ToastContainer />

      {/* Profile Overview */}
      <div className="mb-8 bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-2xl font-medium">My Account</h1>
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sign Out
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Personal Information</h2>
              <Link
                to="/setting"
                className="text-blue-600 hover:text-blue-700 flex items-center"
              >
                <Edit className="w-4 h-4 mr-1" /> Edit
              </Link>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <User className="w-5 h-5 mr-3" />
                {currentUser.fullname}
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-3" />
                {currentUser.email}
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-3" />
                {renderEditableField(
                  currentUser.phone || "Phone number",
                  currentUser.phone,
                  "/setting"
                )}
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Shipping Address</h2>
              <Link
                to="/setting"
                className="text-blue-600 hover:text-blue-700 flex items-center"
              >
                <Edit className="w-4 h-4 mr-1" /> Edit
              </Link>
            </div>
            <div className="flex items-start text-gray-600">
              <MapPin className="w-5 h-5 mr-3 mt-1" />
              {renderEditableField(
                currentUser.address || "Address",
                currentUser.address,
                "/setting"
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
          role="alert"
        >
          {error}
        </div>
      )}

      {/* Recent Orders */}
       {/* In the render section, update the orders display: */}
<div className="space-y-4">
  {orders.length === 0 ? (
    <p className="text-center text-gray-500">No orders found</p>
  ) : (
    orders.map((order) => (
      <div key={order._id} className="border rounded-lg p-4">
        <div className="flex justify-between mb-2">
          <p className="font-semibold">Order ID: {order._id}</p>
          <span className={`px-2 py-1 rounded ${
            order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
            order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
            'bg-yellow-100 text-yellow-800'
          }`}>
            {order.status}
          </span>
        </div>
        <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
        <p>Total: ${order.totalAmount.toFixed(2)}</p>
        <div className="mt-2">
          <p className="font-medium">Items:</p>
          {order.orderItems.map((item, index) => (
            <div key={index} className="flex justify-between py-1">
              <span>{item.product.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    ))
  )}
</div>

      {/* Wishlist Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium">Wishlist</h2>
          <span className="text-sm text-gray-500">
            {wishlistItems.length} items
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {wishlistItems.length === 0 ? (
            <p className="text-center text-gray-500 w-full">
              No items in wishlist
            </p>
          ) : (
            wishlistItems.map((item) => (
              <div
                key={item.product._id}
                className="flex items-center space-x-4 border rounded-lg p-4"
              >
                <img
                  src={item.product.images && item.product.images[0]}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.product.name}</h3>
                  <p className="text-gray-600">
                    ${item.product.price?.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleRemoveFromWishlist(item.product._id)
                  }
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
