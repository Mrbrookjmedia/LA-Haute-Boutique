import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";
import { toast, ToastContainer } from "react-toastify";

const AdminDashboard = () => {
  // const { currentUser, setCurrentUser, refreshUserData } = useAuth();
  // const [activeTab, setActiveTab] = useState("products"); // "products" OR "orders"
  // const [orders, setOrders] = useState([]);
  // const [productData, setProductData] = useState({
  //   name: "",
  //   category: "bags",
  //   description: "",
  //   price: "",
  //   images: [],
  // });
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   console.log("AdminDashboard: currentUser from context:", currentUser);
  //   if (currentUser === null || currentUser === undefined) {
  //     // Try to load from localStorage
  //     const stored = localStorage.getItem("user");
  //     if (stored) {
  //       const parsed = JSON.parse(stored);
  //       console.log("AdminDashboard: read user from storage:", parsed);
  //       setCurrentUser(parsed);
  //     }
  //   }
  //   setIsLoading(false);
  // }, [currentUser, setCurrentUser]);

  // // Fetch all orders from the admin endpoint.
  // const fetchOrders = async () => {
  //   try {
  //     const response = await apiRequest.get("/orders/all");
  //     console.log("Orders response:", response.data);
  //     setOrders(response.data);
  //   } catch (err) {
  //     console.error("Error fetching orders:", err);
  //     toast.error("Failed to fetch orders");
  //   }
  // };

  // // Effect: if currentUser is loaded and activeTab === "orders", then attempt to fetch orders.
  // useEffect(() => {
  //   const loadData = async () => {
  //     if (currentUser && currentUser.isAdmin) {
  //       if (activeTab === "orders") {
  //         await fetchOrders();
  //       }
  //     }
  //   };
  //   loadData();
  // }, [currentUser, activeTab]);

  // // Handlers for product creation
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setProductData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleImageChange = (e) => {
  //   const urls = e.target.value.split(",").map((url) => url.trim());
  //   setProductData((prev) => ({ ...prev, images: urls }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await apiRequest.post("/products", {
  //       ...productData,
  //       price: parseFloat(productData.price),
  //     });
  //     toast.success("Product created successfully!");
  //     setProductData({
  //       name: "",
  //       category: "bags",
  //       description: "",
  //       price: "",
  //       images: [],
  //     });
  //   } catch (err) {
  //     console.error("Error creating product:", err);
  //     toast.error("Failed to create product");
  //   }
  // };

  // // Handle order status update
  // const handleStatusUpdate = async (orderId, newStatus) => {
  //   try {
  //     await apiRequest.put(`/orders/${orderId}/status`, { status: newStatus });
  //     await fetchOrders();
  //     toast.success("Order status updated");
  //   } catch (err) {
  //     console.error("Error updating order status:", err);
  //     toast.error("Failed to update order status");
  //   }
  // };

  // // Render loading or access denied if current user is not loaded or not admin
  // if (isLoading) {
  //   return <div className="text-center py-10">Loading...</div>;
  // }
  // if (!currentUser || !currentUser.isAdmin) {
  //   return (
  //     <div className="text-center py-10 text-red-500">
  //       Access denied. Admin privileges required.
  //     </div>
  //   );
  // }

  // return (
  //   <div className="max-w-7xl mx-auto px-4 py-8">
  //     <ToastContainer />
  //     <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

  //     {/* Tabs Navigation */}
  //     <div className="mb-6 border-b border-gray-200">
  //       <nav className="-mb-px flex space-x-8">
  //         <button
  //           onClick={() => setActiveTab("products")}
  //           className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
  //             activeTab === "products"
  //               ? "border-blue-500 text-blue-600"
  //               : "border-transparent text-gray-500 hover:text-gray-700"
  //           }`}
  //         >
  //           Add Products
  //         </button>
  //         <button
  //           onClick={() => setActiveTab("orders")}
  //           className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
  //             activeTab === "orders"
  //               ? "border-blue-500 text-blue-600"
  //               : "border-transparent text-gray-500 hover:text-gray-700"
  //           }`}
  //         >
  //           Manage Orders
  //         </button>
  //       </nav>
  //     </div>

  //     {/* Render either the Product Creation Form or the Orders Table */}
  //     {activeTab === "products" ? (
  //     <div>
  //       <div className="bg-white rounded-lg shadow p-6">
  //         <h2 className="text-xl font-semibold mb-4">Create New Product</h2>
  //         <form onSubmit={handleSubmit} className="space-y-4">
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700">
  //               Product Name:
  //             </label>
  //             <input
  //               type="text"
  //               name="name"
  //               value={productData.name}
  //               onChange={handleChange}
  //               required
  //               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500"
  //             />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700">
  //               Category:
  //             </label>
  //             <select
  //               name="category"
  //               value={productData.category}
  //               onChange={handleChange}
  //               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500"
  //             >
  //               <option value="bags">Bags</option>
  //               <option value="shoes">Shoes</option>
  //               <option value="apparel">Apparel</option>
  //               <option value="accessories">Accessories</option>
  //             </select>
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700">
  //               Description:
  //             </label>
  //             <textarea
  //               name="description"
  //               value={productData.description}
  //               onChange={handleChange}
  //               required
  //               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500"
  //             />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700">
  //               Price:
  //             </label>
  //             <input
  //               type="number"
  //               name="price"
  //               value={productData.price}
  //               onChange={handleChange}
  //               required
  //               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500"
  //             />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700">
  //               Images (comma separated URLs, max 3):
  //             </label>
  //             <input
  //               type="text"
  //               name="images"
  //               value={productData.images.join(", ")}
  //               onChange={handleImageChange}
  //               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500"
  //             />
  //           </div>
  //           <button
  //             type="submit"
  //             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  //           >
  //             Create Product
  //           </button>
  //         </form>
  //       </div>
  //        {/* <CreateNewProduct/> */}

  //       </div>
  //     ) : (
  //       <div className="bg-white rounded-lg shadow p-6">
  //         <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>

  //         {orders.length === 0 ? (
  //           <p>No orders found.</p>
  //         ) : (
  //           <div className="overflow-x-auto">
  //             <table className="min-w-full">
  //               <thead>
  //                 <tr className="bg-gray-50">
  //                   <th className="px-6 py-3 text-left">Order ID</th>
  //                   <th className="px-6 py-3 text-left">Customer</th>
  //                   <th className="px-6 py-3 text-left">Items</th>
  //                   <th className="px-6 py-3 text-left">Total</th>
  //                   <th className="px-6 py-3 text-left">Status</th>
  //                   <th className="px-6 py-3 text-left">Actions</th>
  //                 </tr>
  //               </thead>
  //               <tbody className="divide-y divide-gray-200">
  //                 {orders.map((order) => (
  //                   <tr key={order._id}>
  //                     <td className="px-6 py-4">{order._id}</td>
  //                     <td className="px-6 py-4">
  //                       <div>{order.user.fullname}</div>
  //                       <div className="text-sm text-gray-500">
  //                         {order.user.email}
  //                       </div>
  //                       <div className="text-sm text-gray-500">
  //                         Phone: {order.user.phone || "N/A"}
  //                       </div>
  //                       <div className="text-sm text-gray-500">
  //                         Address: {order.user.address || "N/A"}
  //                       </div>
  //                     </td>
  //                     <td className="px-6 py-4">
  //                       {order.orderItems.map((item, idx) => (
  //                         <div key={idx}>
  //                           {item.product.name} x {item.quantity}
  //                         </div>
  //                       ))}
  //                     </td>
  //                     <td className="px-6 py-4">
  //                       ${order.totalAmount.toFixed(2)}
  //                     </td>
  //                     <td className="px-6 py-4">
  //                       <span
  //                         className={`px-2 py-1 rounded ${
  //                           order.status === "Delivered"
  //                             ? "bg-green-100 text-green-800"
  //                             : order.status === "Processing"
  //                             ? "bg-blue-100 text-blue-800"
  //                             : "bg-yellow-100 text-yellow-800"
  //                         }`}
  //                       >
  //                         {order.status}
  //                       </span>
  //                     </td>
  //                     <td className="px-6 py-4">
  //                       <select
  //                         value={order.status}
  //                         onChange={(e) =>
  //                           handleStatusUpdate(order._id, e.target.value)
  //                         }
  //                         className="border rounded px-2 py-1"
  //                       >
  //                         <option value="Pending">Pending</option>
  //                         <option value="Processing">Processing</option>
  //                         <option value="Shipped">Shipped</option>
  //                         <option value="Delivered">Delivered</option>
  //                       </select>
  //                     </td>
  //                   </tr>
  //                 ))}
  //               </tbody>
  //             </table>
  //           </div>
  //         )}
  //       </div>
  //     )}
  //   </div>
  // )
  return (
  <div>
    <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
  </div>
  )
}


export default AdminDashboard
