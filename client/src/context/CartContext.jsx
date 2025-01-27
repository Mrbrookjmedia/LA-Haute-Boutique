// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }







// import React, { createContext, useContext, useState, useEffect } from "react";
// import { AuthContext } from "./AuthContext";
// import { apiRequest } from "../lib/apiRequest"; // Assumes you have this for making API calls

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const { currentUser } = useContext(AuthContext); // Access current user from AuthContext
//   const [cart, setCart] = useState([]);

//   // Fetch the cart from the backend when the user logs in
//   useEffect(() => {
//     const fetchCart = async () => {
//       if (currentUser) {
//         try {
//           const response = await apiRequest("/api/cart", "GET", null, currentUser.token);
//           if (response.ok) {
//             const data = await response.json();
//             setCart(data.items || []);
//           }
//         } catch (error) {
//           console.error("Failed to fetch cart:", error);
//         }
//       } else {
//         setCart([]); // Clear cart for logged-out users
//       }
//     };

//     fetchCart();
//   }, [currentUser]);

//   const addToCart = async (product) => {
//     if (currentUser) {
//       try {
//         const response = await apiRequest(
//           "/api/cart/add",
//           "POST",
//           { productId: product.id, quantity: 1 },
//           currentUser.token
//         );
//         if (response.ok) {
//           const data = await response.json();
//           setCart(data.cart.items);
//         }
//       } catch (error) {
//         console.error("Failed to add to cart:", error);
//       }
//     } else {
//       // Handle cart in local state for guests
//       setCart((prevCart) => [...prevCart, product]);
//     }
//   };

//   const clearCart = async () => {
//     if (currentUser) {
//       try {
//         const response = await apiRequest("/api/cart/clear", "DELETE", null, currentUser.token);
//         if (response.ok) {
//           setCart([]);
//         }
//       } catch (error) {
//         console.error("Failed to clear cart:", error);
//       }
//     } else {
//       setCart([]); // Clear local cart for guests
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }




import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import apiRequest from "../lib/apiRequest"; // Helper for API calls

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      if (currentUser?.token) {
        try {
          const response = await apiRequest.get("/cart", {
            headers: {
              Authorization: `Bearer ${currentUser.token}`,
            },
          });
          setCart(response.data.items || []);
        } catch (error) {
          console.error("Error fetching cart:", error.response?.data || error.message);
        }
      } else {
        setCart([]); // Clear cart for guests
      }
    };

    fetchCart();
  }, [currentUser]);

  const addToCart = async (productId, quantity = 1) => {
    if (currentUser) {
      try {
        const response = await apiRequest.post(
          "/cart/add",
          { productId, quantity },
          {
            headers: {
              Authorization: `Bearer ${currentUser.token}`,
            },
          }
        );
        setCart(response.data.items);
      } catch (error) {
        console.error("Error adding to cart:", error.response?.data || error.message);
      }
    } else {
      console.warn("User is not logged in. Redirect to login.");
    }
  };

  const clearCart = async () => {
    if (currentUser) {
      try {
        const response = await apiRequest.delete("/cart/clear", {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        });
        setCart([]); // Clear cart after successful response
      } catch (error) {
        console.error("Error clearing cart:", error.response?.data || error.message);
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

