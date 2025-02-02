import React, { useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [productData, setProductData] = useState({
    name: "",
    category: "bags",
    description: "",
    price: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  // For images, assume a comma separated list of URLs
  const handleImageChange = (e) => {
    const urls = e.target.value.split(",").map((url) => url.trim());
    setProductData({ ...productData, images: urls });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/api/products", { 
      ...productData, 
      price: parseFloat(productData.price) 
    }, { withCredentials: true })
      .then((res) => {
        alert("Product created successfully!");
        setProductData({
          name: "",
          category: "bags",
          description: "",
          price: "",
          images: [],
        });
      })
      .catch((err) => {
        console.error("Error creating product", err);
        alert("Error creating product");
      });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input type="text" name="name" value={productData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Category:</label>
          <select name="category" value={productData.category} onChange={handleChange}>
            <option value="bags">Bags</option>
            <option value="shoes">Shoes</option>
            <option value="apparel">Apparel</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={productData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={productData.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Images (comma separated URLs, max 3):</label>
          <input type="text" name="images" value={productData.images.join(", ")} onChange={handleImageChange} />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
