// // pages/CartPage.jsx
// import React from "react";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";
// import { Trash2, Plus, Minus } from "lucide-react";

// const CartPage = () => {
//   const { cart, loading, error, updateQuantity, removeItem, clearCart } = useCart();
//   const navigate = useNavigate();

//   if (loading) return <div className="text-center py-10">Loading...</div>;
//   if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
//   if (!cart?.length) {
//     return (
//       <div className="text-center py-10">
//         <p className="text-xl mb-4">Your cart is empty</p>
//         <button
//           onClick={() => navigate("/shop")}
//           className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
//       <div className="bg-white rounded-lg shadow">
//         {cart.map((item) => (
//           <div key={item.product._id} className="flex items-center p-4 border-b">
//             <img
//               src={item.product.image}
//               alt={item.product.name}
//               className="w-20 h-20 object-cover rounded"
//             />
            
//             <div className="flex-1 ml-4">
//               <h3 className="font-semibold">{item.product.name}</h3>
//               <p className="text-gray-600">${item.product.price}</p>
//             </div>

//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
//                 disabled={item.quantity <= 1}
//                 className="p-1 rounded hover:bg-gray-100"
//               >
//                 <Minus size={16} />
//               </button>
//               <span className="w-8 text-center">{item.quantity}</span>
//               <button
//                 onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
//                 className="p-1 rounded hover:bg-gray-100"
//               >
//                 <Plus size={16} />
//               </button>
//             </div>

//             <button
//               onClick={() => removeItem(item.product._id)}
//               className="ml-4 text-red-500 hover:text-red-600"
//             >
//               <Trash2 size={20} />
//             </button>
//           </div>
//         ))}

//         <div className="p-4 border-t">
//           <div className="flex justify-between mb-4">
//             <span className="font-semibold">Total:</span>
//             <span className="font-semibold">${total.toFixed(2)}</span>
//           </div>
          
//           <div className="flex justify-between">
//             <button
//               onClick={clearCart}
//               className="px-4 py-2 text-red-500 hover:text-red-600"
//             >
//               Clear Cart
//             </button>
//             <button
//               onClick={() => navigate("/checkout")}
//               className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
//             >
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;





import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";
import { toast } from "react-toastify";

const CartPage = () => {
  const { cart, loading, error, updateQuantity, removeItem, clearCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!cart?.length) {
    return (
      <div className="text-center py-10">
        <p className="text-xl mb-4">Your cart is empty</p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleCheckout = async () => {
    if (!currentUser) {
      toast.error("Please login to place an order");
      navigate("/login");
      return;
    }

    setIsProcessingOrder(true);
    try {
      // Create order from cart items
      const orderData = {
        orderItems: cart.map(item => ({
          product: item.product._id,
          quantity: item.quantity,
          price: item.product.price
        })),
        shippingAddress: {
          address: currentUser.address || "",
          city: "",  // You might want to add these fields to user profile
          phone: currentUser.phone || ""
        },
        paymentMethod: "COD", // Default to Cash on Delivery
        totalAmount: total
      };

      await apiRequest.post("/orders", orderData);
      
      // Clear cart after successful order
      clearCart();
      
      toast.success("Order placed successfully!");
      navigate("/user-dash"); // Redirect to account page to see orders
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error(error.response?.data?.message || "Failed to place order");
    } finally {
      setIsProcessingOrder(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow">
        {cart.map((item) => (
          <div key={item.product._id} className="flex items-center p-4 border-b">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-20 h-20 object-cover rounded"
            />
            
            <div className="flex-1 ml-4">
              <h3 className="font-semibold">{item.product.name}</h3>
              <p className="text-gray-600">${item.product.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="p-1 rounded hover:bg-gray-100"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                className="p-1 rounded hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
            </div>

            <button
              onClick={() => removeItem(item.product._id)}
              className="ml-4 text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}

        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <button
              onClick={clearCart}
              className="px-4 py-2 text-red-500 hover:text-red-600"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              disabled={isProcessingOrder}
              className={`bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 
                ${isProcessingOrder ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isProcessingOrder ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

