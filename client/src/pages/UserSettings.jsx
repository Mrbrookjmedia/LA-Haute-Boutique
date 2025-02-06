import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Lock 
} from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";
import { toast, ToastContainer } from 'react-toastify';

const UserSettings = () => {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    fullname: currentUser.fullname || "",
    email: currentUser.email || "",
    phone: currentUser.phone || "",
    address: currentUser.address || "",
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate password change
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    try {
      const updateData = {
        ...userData,
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      };

      const response = await apiRequest.put("/auth/update", updateData);
      updateUser(response.data.user);
      toast.success("Profile updated successfully");
      navigate("/user-dash");

    } catch (error) {
        toast.error(error.response?.data?.message || "Update failed");
        console.error("Update error", error);
      }

      // Logout after successful update
    //   setTimeout(async () => {
    //     try {
    //       await apiRequest.post("/auth/logout");
    //       updateUser(null);
    //       navigate("/login");
    //     } catch (error) {
    //       console.error("Logout error", error);
    //     }
    //   }, 2000);

    // } catch (error) {
    //   toast.error(error.response?.data?.message || "Update failed");
    //   console.error("Update error", error);
    // }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <ToastContainer />
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information Section */}
          <div>
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <User className="mr-2 text-green-600" /> Personal Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Full Name</label>
                <div className="flex items-center border rounded-md">
                  <input
                    type="text"
                    name="fullname"
                    value={userData.fullname}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md"
                    placeholder="Enter full name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <div className="flex items-center border rounded-md">
                  <Mail className="ml-2 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md"
                    placeholder="Enter email"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <Phone className="mr-2 text-green-600" /> Contact Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Phone Number</label>
                <div className="flex items-center border rounded-md">
                  <input
                    type="tel"
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2">Address</label>
                <div className="flex items-center border rounded-md">
                  <MapPin className="ml-2 text-gray-500" />
                  <input
                    type="text"
                    name="address"
                    value={userData.address}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md"
                    placeholder="Enter address"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Password Change Section */}
          <div>
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <Lock className="mr-2 text-green-600" /> Change Password
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Current password"
                />
              </div>
              <div>
                <label className="block mb-2">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="New password"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2">Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Save Changes
            </button>
            <Link
              to="/user-dash"
              className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;