import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import apiRequest from "../lib/apiRequest";
import { AuthContext } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import googleicon from "../../images/googleicon.png";

const Login = () => {
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest.post("/auth/login", {
        username: formData.username,
        password: formData.password,
      });

      console.log(response.data);
      updateUser(response.data.user);
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Network Error. Please try again.";
      toast.error(errorMessage);
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white-500 via-yellow-300 to-indigo-600">
    <div className="w-full max-w-md bg-white shadow-2xl rounded-lg p-8 lg:p-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Welcome Back
        </h2>
        <p className="mt-2 text-gray-500">
          Login to continue sharing your skills
        </p>
      </div>

      {message && (
        <p className="text-red-500 text-center mb-6 text-sm font-semibold">
          {message}
        </p>
      )}

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300"
            required
          />
        </div>

        <div className="relative">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300"
            required
          />
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={handleSignUpClick}
            className="text-sm text-blue-500 hover:underline"
          >
            Don't have an account? Sign Up
          </button>
          <button
            type="button"
            
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md transform hover:scale-105"
          >
            Login
          </button>
        </div>
      </form>

      <div className="flex justify-center items-center mt-8">
      </div>
    </div>
    <ToastContainer />
  </section>
  );
};

export default Login;