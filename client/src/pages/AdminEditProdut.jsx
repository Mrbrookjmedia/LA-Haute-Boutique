import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const AdminEditProduct = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();

  const [productData, setProductData] = useState(null); // Initial state is null to avoid `undefined` errors
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product details by ID
    axios.get(`http://localhost:4000/api/products/${id}`)
      .then((response) => {
        setProductData(response.data); // Set product data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        toast.error("Failed to load product details");
        setLoading(false);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const addImageField = () => {
    if (productData.images.length < 5) {
      setProductData(prev => ({ ...prev, images: [...prev.images, ""] }));
    }
  };

  const handleImageChange = (index, value) => {
    const newImages = [...productData.images];
    newImages[index] = value;
    setProductData(prev => ({ ...prev, images: newImages }));
  };

  const handleColorChange = (index, value) => {
    const newColors = [...productData.color];
    newColors[index] = value;
    setProductData((prev) => ({ ...prev, color: newColors }));
  };

  const handleSizeChange = (size) => {
    setProductData((prev) => ({
      ...prev,
      size: prev.size.includes(size)
        ? prev.size.filter((s) => s !== size)
        : [...prev.size, size],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/products/${id}`, productData, { withCredentials: true });
      toast.success("Product updated successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Update error", error);
      toast.error(error.response?.data?.message || "Product update failed");
    }
  };

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!productData) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <ToastContainer />
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-6">Edit Product</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">Product Name</label>
            <input
              type="text"
              name="name"
              value={productData.name || ""}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={productData.category || ""}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
                  <label className="block mb-2">Subcategory *</label>
                  <input
                    type="text"
                    name="subcategory"
                    value={productData.subcategory || ""}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
            </div>

          {/* Color Selection */}
          <div>
            <label className="block mb-2">Colors</label>
            <div className="space-y-2">
              {productData.color?.map((color, index) => (
                <input
                  key={index}
                  type="text"
                  value={color}
                  onChange={(e) => handleColorChange(index, e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder={`Color #${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <label className="block mb-2">Available Sizes</label>
            <div className="grid grid-cols-3 gap-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <label key={size} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={productData.size?.includes(size)}
                    onChange={() => handleSizeChange(size)}
                    className="mr-2"
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-4 flex items-center">
               Pricing & Description
            </h2>
            <div className="grid gap-4">
              <div>
                <label className="block mb-2">Price *</label>
                <input
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              
              <div>
                <label className="block mb-2">Description *</label>
                <textarea
                  name="description"
                  value={productData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  rows="4"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4 flex items-center">
               Product Images (Max 5)
            </h2>
            <div className="space-y-2">
              {productData.images.map((img, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="url"
                    value={img}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder={`Image URL #${index + 1}`}
                  />
                </div>
              ))}
              {productData.images.length < 5 && (
                <button
                  type="button"
                  onClick={addImageField}
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  + Add another image URL
                </button>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminEditProduct;
