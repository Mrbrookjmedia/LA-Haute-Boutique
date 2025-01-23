import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";
import apiRequest from "../lib/apiRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest.post("/auth/signup", {
        fullname: formData.fullname,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      console.log(response.data);
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  const handleGoogleSignUpClick = () => {
    const googleSignUpDiv =
      document.getElementsByClassName("googleSignUpDiv")[0];
    if (googleSignUpDiv) {
      googleSignUpDiv.click(); // Simulate click on Google Sign-Up button
    }
  };

  const handleCredentialResponse = (response) => {
    // Handle Google Sign-In response here
  };

  useEffect(() => {
    const initializeGoogleSignUp = () => {
      window.google.accounts.id.initialize({
        client_id:
          "835859117984-tjdbra27sv18gbls6vgbi225vmi3bvpt.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      const googleSignUpDiv =
        document.getElementsByClassName("googleSignUpDiv")[0];
      if (googleSignUpDiv) {
        window.google.accounts.id.renderButton(googleSignUpDiv, {
          theme: "outline",
          size: "large",
        });
      } else {
        console.error("Google Sign-Up div not found");
      }
    };

    if (window.google) {
      initializeGoogleSignUp();
    } else {
      window.addEventListener("google-loaded", initializeGoogleSignUp);
    }

    return () => {
      window.removeEventListener("google-loaded", initializeGoogleSignUp);
    };
  }, []);

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <section className="w-full p-4 md:p-8 lg:p-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="flex-1 flex items-center justify-center lg:justify-start lg:pl-10 mb-8 lg:mb-0 bg-[#3b5998] text-white p-8 0">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">Join Us Today!</h2>
              <p className="text-lg mb-8">Create an account to get started</p>
              {/* <div
                className="googleSignUpDiv"
                onClick={handleGoogleSignUpClick}
              ></div> */}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Create your account</h2>
              {message && (
                <p className="text-red-500 mb-4 text-sm font-semibold">
                  {message}
                </p>
              )}
              <form onSubmit={handleSignUp}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="fullname"
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter Fullname"
                    required
                    value={formData.fullname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="username"
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter Username"
                    required
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter Email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    name="password"
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter Password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4 flex flex-col items-center">
                  <div className="mb-2">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={handleLoginClick}
                      className="text-blue-500 underline"
                    >
                      Login
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-md"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
