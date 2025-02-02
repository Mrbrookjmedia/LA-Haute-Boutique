// import React from "react";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// export default function CartPage() {
//   const { cart, clearCart } = useCart();
//   const navigate = useNavigate();

//   if (cart.length === 0) {
//     return (
//       <div className="text-center p-10">
//         <h1 className="text-2xl font-bold text-gray-700">Your Cart is Empty</h1>
//         <button
//           onClick={() => navigate("/shop")}
//           className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Go to Shop
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen p-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
//       <ul className="space-y-4">
//         {cart.map((item, index) => (
//           <li key={index} className="p-4 bg-white shadow rounded-lg flex justify-between">
//             <div>
//               <h3 className="font-semibold">{item.name}</h3>
//               <p>${item.price.toFixed(2)}</p>
//             </div>
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-16 h-16 object-cover rounded-lg"
//             />
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={clearCart}
//         className="mt-6 px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600"
//       >
//         Clear Cart
//       </button>
//     </div>
//   );
// }



import React from "react";
import { useCart } from "../context/CartContext";
import  {AuthContext}  from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, clearCart } = useCart();
  const { currentUser } = AuthContext();
  const navigate = useNavigate();

  if (!currentUser) {
    navigate("/login"); // Redirect to login
    return null;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {cart && cart.length === 0 ? (
  <p>Your cart is empty.</p>
) : (
  <ul>
    {cart.map((item) => (
      <li key={item.product._id}>
        {item.product.name} - Quantity: {item.quantity}
      </li>
    ))}
  </ul>
)}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartPage;

