
import React, { createContext, useState, useEffect, useContext} from "react";
import apiRequest from "../lib/apiRequest";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to verify and load user data
  const loadUserData = () => {
    try {
      const stored = localStorage.getItem("user");
      if (stored) {
        const userData = JSON.parse(stored);
        setCurrentUser(userData);
        return userData;
      }
      setCurrentUser(null);
      return null;
    } catch (error) {
      console.error("Error loading user data:", error);
      setCurrentUser(null);
      return null;
    }
  };

  // Initial load
  useEffect(() => {
    loadUserData();
  }, []);

  // Update refreshUserData to also refresh the user data
  const refreshUserData = async () => {
    try {
      const userData = loadUserData(); // Reload user data
      if (userData) {
        const wishlistResponse = await apiRequest.get("/user/wishlist");
        setWishlistItems(wishlistResponse.data);
      }
    } catch (error) {
      console.error("Failed to refresh user data:", error);
    }
  };

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setCurrentUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
    setWishlistItems([]);
  };

  const updateUser = (user) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    setCurrentUser(user);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        currentUser,
        setCurrentUser, 
        login, 
        logout,
        updateUser,
        wishlistItems,
        refreshUserData,
        loadUserData // Export this function
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);