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
