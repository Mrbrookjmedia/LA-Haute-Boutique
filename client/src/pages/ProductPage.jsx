import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Heart } from 'lucide-react';
import { toast } from 'react-toastify';
import apiRequest from "../lib/apiRequest";
import { useAuth } from "../context/AuthContext";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [inWishlist, setInWishlist] = useState(false);
  const { currentUser, refreshUserData} = useContext(AuthContext);
  
  useEffect(() => {
    // Fetch product details
    apiRequest.get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error fetching product", err));
    
    // Check if product is in wishlist
    if (currentUser) {
      apiRequest.get("/user/wishlist")
        .then((res) => {
          setInWishlist(res.data.some(item => item.product._id === id));
        })
        .catch((err) => console.error("Error fetching wishlist", err));
    }
  }, [id, currentUser]);
  
  const addToCart = () => {
    apiRequest.post("/cart/add", { productId: id, quantity: 1 })
      .then((res) => {
        toast.success("Added to cart!");
      })
      .catch((err) => {
        console.error("Error adding to cart", err);
        toast.error("Failed to add to cart");
      });
  };
  
  const toggleWishlist = async () => {
    if (!currentUser) {
      toast.error("Please log in to manage your wishlist");
      return;
    }
  
    try {
      if (inWishlist) {
        await apiRequest.delete(`/user/wishlist/${id}`);
        toast.success("Removed from wishlist");
      } else {
        await apiRequest.post("/user/wishlist", { productId: id });
        toast.success("Added to wishlist");
      }
      
      await refreshUserData();
      setInWishlist(!inWishlist);
    } catch (error) {
      console.error("Error updating wishlist:", error);
      toast.error("Failed to update wishlist");
    }
  };

  
  if (!product) return <div>Loading...</div>;
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="flex flex-wrap mb-6">
        {product.images.map((img, idx) => (
          <img key={idx} src={img} alt={`${product.name} - ${idx + 1}`} className="w-48 h-48 object-cover m-2" />
        ))}
      </div>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg mb-2">Category: <span className="font-semibold">{product.category}</span></p>
      <p className="text-2xl font-bold mb-4">Price: ${product.price.toFixed(2)}</p>
      <div className="flex space-x-4">
        <button 
          onClick={addToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Add To Cart
        </button>
        <button 
          onClick={toggleWishlist}
          className={`flex items-center px-4 py-2 rounded transition duration-300 ${
            inWishlist ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          <Heart className={`w-5 h-5 mr-2 ${inWishlist ? 'fill-current' : ''}`} />
          {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
