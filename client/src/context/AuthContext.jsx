// import React, { createContext, useEffect, useState } from "react";
// import Cookies from "js-cookie";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(
//     Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null
//   );

//   const updateUser = (data) => {
//     setCurrentUser(data);
//   };

//   useEffect(() => {
//     if (currentUser) {
//       Cookies.set("user", JSON.stringify(currentUser), { expires: 7 }); // Store for 7 days
//     } else {
//       Cookies.remove("user");
//     }
//   }, [currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser, updateUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };




import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

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
  const updateUser = (user) => {
    setCurrentUser(user);
  };


  return (
    <AuthContext.Provider value={{ currentUser, login, logout,updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);