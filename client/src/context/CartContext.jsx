// // context/CartContext.jsx
// import React, { createContext, useContext, useState, useEffect } from "react";
// import { AuthContext } from "./AuthContext";
// import apiRequest from "../lib/apiRequest";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const { currentUser } = useContext(AuthContext);
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (currentUser) {
//       fetchCart();
//     } else {
//       setCart([]);
//     }
//   }, [currentUser]);

//   const fetchCart = async () => {
//     try {
//       setLoading(true);
//       const response = await apiRequest.get("/cart", {
//         headers: {
//           Authorization: `Bearer ${currentUser.token}`
//         }
//       });
//       setCart(response.data.items || []);
//     } catch (error) {
//       console.error("Error fetching cart:", error);
//       setError(error.response?.data?.message || "Failed to fetch cart");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addToCart = async (productId, quantity = 1) => {
//     if (!currentUser) {
//       console.warn("User is not logged in");
//       return false;
//     }

//     try {
//       setLoading(true);
//       const response = await apiRequest.post(
//         "/cart/add",
//         { productId, quantity },
//         {
//           headers: {
//             Authorization: `Bearer ${currentUser.token}`
//           }
//         }
//       );
//       setCart(response.data.items);
//       return true;
//     } catch (error) {
//       console.error("Error adding to cart:", error.response?.data || error.message);
//       setError(error.response?.data?.message || "Failed to add item");
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateQuantity = async (productId, quantity) => {
//     try {
//       setLoading(true);
//       const response = await apiRequest.put(`/cart/update/${productId}`, {
//         quantity
//       });
//       setCart(response.data.items);
//     } catch (error) {
//       setError(error.response?.data?.message || "Failed to update quantity");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const removeItem = async (productId) => {
//     try {
//       setLoading(true);
//       await apiRequest.delete(`/cart/item/${productId}`);
//       setCart(prev => prev.filter(item => item.productId !== productId));
//     } catch (error) {
//       setError(error.response?.data?.message || "Failed to remove item");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const clearCart = async () => {
//     try {
//       setLoading(true);
//       await apiRequest.delete("/cart/clear");
//       setCart([]);
//     } catch (error) {
//       setError(error.response?.data?.message || "Failed to clear cart");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <CartContext.Provider value={{
//       cart,
//       loading,
//       error,
//       addToCart,
//       updateQuantity,
//       removeItem,
//       clearCart
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);


import React, { createContext, useContext, useState, useEffect } from 'react';
import apiRequest from '../lib/apiRequest';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCart = async () => {
    try {
      const response = await apiRequest.get('/cart');
      setCart(response.data.items || []);
      setError(null);
    } catch (err) {
      setError("Failed to load cart");
      console.error("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (productId, quantity) => {
    try {
      await apiRequest.put('/cart/update', { productId, quantity });
      await fetchCart();
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  const removeItem = async (productId) => {
    try {
      await apiRequest.delete(`/cart/remove/${productId}`);
      await fetchCart();
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const clearCart = async () => {
    try {
      await apiRequest.post('/cart/clear');
      setCart([]);
    } catch (err) {
      console.error("Error clearing cart:", err);
    }
  };
  const addToCart = async (productId, quantity) => {
    try {
      await apiRequest.post('/cart/add', { productId, quantity });
      await fetchCart(); // Immediately fetch updated cart
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  return (
    <CartContext.Provider value={{
      cart,
      loading,
      error,
      updateQuantity,
      removeItem,
      clearCart,
      fetchCart,
      addToCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
