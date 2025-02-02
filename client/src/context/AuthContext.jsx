
import React, { createContext, useState, useEffect, useContext} from "react";
import apiRequest from "../lib/apiRequest";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); // Retrieve user data from local storage
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data in local storage
    setCurrentUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };


  const refreshUserData = async () => {
    try {
      const wishlistResponse = await apiRequest.get("/user/wishlist");
      setWishlistItems(wishlistResponse.data);
    } catch (error) {
      console.error("Failed to refresh user data:", error);
    }
  };



  const updateUser = (user) => {
    setCurrentUser(user);
  };


   

  return (
    <AuthContext.Provider value={{ currentUser,setCurrentUser, login, logout,updateUser,wishlistItems,refreshUserData  }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);