// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { ToastContainer } from 'react-toastify'
// const AdminAllProducts = () => {

    
// }

// // export default AdminAllProducts

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminAllProducts = () => {
  const [products, setProducts] = useState([]); // State to store products
  const navigate = useNavigate();

  // Fetch products from API
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/products/allproducts"); // Replace with actual API URL
      setProducts(response.data);
    } catch (error) {
      toast.error("Failed to load products");
    }
  };

  // Delete a product
  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:4000/api/products/${productId}`, { withCredentials: true });
        toast.success("Product deleted successfully");
        fetchProducts(); // Refresh product list
      } catch (error) {
        toast.error("Failed to delete product");
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin - Manage Products</h1>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5" className="p-4 text-center">
                No products found
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product._id} className="text-center">
                <td className="p-2 border">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="p-2 border">{product.name}</td>
                <td className="p-2 border">{product.category}</td>
                <td className="p-2 border">${product.price}</td>
                <td className="p-2 border space-x-2">
                  <button
                    className="bg-blue-600 text-white px-4 py-1 rounded-md"
                    onClick={() => navigate(`/admin/products/edit/${product._id}`)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-600 text-white px-4 py-1 rounded-md"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAllProducts;

