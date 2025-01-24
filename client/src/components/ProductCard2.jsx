import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard2({ product, isWishlisted, toggleWishlist }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 m-4 mb-5 ">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded"
        />
        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <div className="flex items-center justify-between mt-4">
          {/* Navigate to ProductPage */}
        <Link to={`/product/${product.id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            View Details
          </button>
        </Link>
          <button
            onClick={() => toggleWishlist(product.id)}
            className={`${
              isWishlisted ? "text-red-500" : "text-gray-400"
            } text-xl`}
          >
            ♥
          </button>
        </div>
      </div>
    );
  }