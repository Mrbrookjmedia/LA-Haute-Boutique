import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import imgShop1 from "../assets/images/imgShop1.png";
import imgShop2 from "../assets/images/imgShop2.png";
import imgShop3 from "../assets/images/imgShop3.png";
import imgShop4 from "../assets/images/imgShop4.png";
import imgShop5 from "../assets/images/imgShop5.png";
import imgShop6 from "../assets/images/imgShop6.png";
import imgShop7 from "../assets/images/imgShop7.png";
import imgShop8 from "../assets/images/imgShop8.png";
import imgShop9 from "../assets/images/imgShop9.png";
import imgShop10 from "../assets/images/imgShop10.png";
import imgShop11 from "../assets/images/imgShop11.png";
import imgShop12 from "../assets/images/imgShop12.png";
import imgShop13 from "../assets/images/imgShop13.png";
import imgShop14 from "../assets/images/imgShop14.png";
import imgShop15 from "../assets/images/imgShop15.png";





const initialProducts = [
  {
    id: 1,
    name: "Structured Tote",
    price: 250,
    image: imgShop1,
    category: "High-Quality Bags",
    description: "A durable and stylish tote bag, perfect for everyday use. Made with premium leather and a spacious interior to carry all your essentials.",
    colors: ["Brown", "Black", "Beige"],
    sizes: ["Standard"],
    images: [imgShop1, imgShop2, imgShop3],
    subcategory: "Structured Totes",
  },
  {
    id: 2,
    name: "Clutch Bag",
    price: 180,
    image: imgShop2,
    category: "High-Quality Bags",
    description: "An elegant clutch bag, perfect for evening outings. Features a minimalist design and a secure clasp.",
    colors: ["Black", "Red"],
    sizes: ["Small"],
    images: [imgShop2, imgShop4, imgShop5],
    subcategory: "Clutches",
  },
  {
    id: 3,
    name: "Chic Boots",
    price: 300,
    image: imgShop4,
    category: "Stylish Shoes",
    description: "Trendy boots crafted with high-quality materials, suitable for casual and formal occasions.",
    colors: ["Black", "Brown"],
    sizes: ["M", "L"],
    images: [imgShop4, imgShop6],
    subcategory: "Chic Boots",
  },
  {
    id: 4,
    name: "Heels",
    price: 220,
    image: imgShop3,
    category: "Stylish Shoes",
    description: "Stylish red heels designed for comfort and elegance, perfect for parties and formal events.",
    colors: ["Red", "Beige"],
    sizes: ["S", "M"],
    images: [imgShop3, imgShop7, imgShop8],
    subcategory: "Heels",
  },
  {
    id: 5,
    name: "Flowing Dress",
    price: 400,
    image: imgShop7,
    category: "Luxury Apparels",
    description: "A flowing dress made from high-quality fabric. Comfortable yet luxurious, perfect for formal evenings.",
    colors: ["Blue", "Green", "White"],
    sizes: ["M", "L", "XL"],
    images: [imgShop7, imgShop9, imgShop10],
    subcategory: "Flowing Dresses",
  },
  // Add similar details for other products...
];

export default function ProductPage() {
  const { productId } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate(); // For navigating to other product pages
  const { cart, addToCart } = useCart(); // Destructure `cart` and `addToCart` from useCart()

  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

  const product = initialProducts.find((item) => item.id === parseInt(productId));

  if (!product) {
    return (
      <div className="text-center p-10">
        <h1 className="text-2xl font-bold text-gray-700">Product Not Found</h1>
        <button
          onClick={() => navigate("/shop")}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const similarProducts = initialProducts.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Main Product Section */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <img
            src={selectedImage || product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="flex mt-4 gap-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product image ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg border hover:scale-105 transition-transform cursor-pointer"
                onClick={() => handleImageClick(img)}
              />
            ))}
          </div>
        </div>
  
        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-2">${product.price.toFixed(2)}</p>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Available Colors:</span>{" "}
                {product.colors.join(", ")}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Available Sizes:</span>{" "}
                {product.sizes.join(", ")}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
  
      {/* Cart Summary Section */}
      {/* <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Cart</h2>
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li
              key={index}
              className="p-4 bg-white shadow rounded-lg flex justify-between"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
            </li>
          ))}
        </ul>
      </div> */}
  
      {/* Similar Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-8/12">
          {similarProducts.map((similarProduct) => (
            <div
              key={similarProduct.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={similarProduct.image}
                alt={similarProduct.name}
                className="w-60 h-60 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{similarProduct.name}</h3>
              <p className="text-gray-600">${similarProduct.price.toFixed(2)}</p>
              <button
                onClick={() => navigate(`/product/${similarProduct.id}`)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}