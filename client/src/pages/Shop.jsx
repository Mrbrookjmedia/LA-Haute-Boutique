import React, { useState } from "react";
import ProductCard2 from "../components/ProductCard2";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";

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
  // High-Quality Bags
  { id: 1, name: "Structured Tote", price: 250, image: imgShop1, category: "High-Quality Bags", color: "Brown", size: "", subcategory: "Structured Totes" },
  { id: 2, name: "Clutch Bag", price: 180, image: imgShop2, category:"High-Quality Bags", color: "Black", size: "", subcategory: "Clutches" },
  
  // Stylish Shoes
  { id: 3, name: "Chic Boots", price: 300, image: imgShop4, category: "Stylish Shoes", color: "Black", size: "M", subcategory: "Chic Boots" },
  { id: 4, name: "Heels", price: 220, image:imgShop3, category: "Stylish Shoes", color: "Red", size: "M", subcategory: "Heels" },

  // Luxury Apparels
  { id: 5, name: "Flowing Dress", price: 400, image: imgShop7, category: "Luxury Apparels", color: "Blue", size: "L", subcategory: "Flowing Dresses" },
  { id: 6, name: "Outerwear", price: 350, image: imgShop9, category: "Luxury Apparels", color: "Other", size: "XL", subcategory: "Outerwear" },

  // Accessories
  { id: 7, name: "Jewelry Set", price: 150, image: imgShop13, category: "Accessories", color: "Silver", size: "", subcategory: "Jewelry" },
  { id: 8, name: "Scarf", price: 100, image: imgShop14, category: "Accessories", color: "Red", size: "", subcategory: "Scarves" },
  { id: 9, name: "Sunglasses", price: 120, image: imgShop15, category: "Accessories", color: "Black", size: "", subcategory: "Sunglasses" },
];

export default function Shop() {
  const [filters, setFilters] = useState({ price: 500, color: "", category: "", size: "", subcategory: "", search: "" });
  const [wishlist, setWishlist] = useState([]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredProducts = initialProducts.filter((product) => {
    const matchPrice = product.price <= filters.price;
    const matchColor = filters.color ? product.color === filters.color : true;
    const matchCategory = filters.category ? product.category === filters.category : true;
    const matchSize = filters.size ? product.size === filters.size : true;
    const matchSubcategory = filters.subcategory ? product.subcategory === filters.subcategory : true;
    const matchSearch = product.name.toLowerCase().includes(filters.search.toLowerCase());
    return matchPrice && matchColor && matchCategory && matchSize && matchSubcategory && matchSearch;
  });

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  // Group products by category
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <SearchBar value={filters.search} onSearch={(value) => handleFilterChange("search", value)} />
        <div className="flex flex-col md:flex-row">
          <Filter filters={filters} onFilterChange={handleFilterChange} />
          <div className="flex-1">
            {Object.keys(groupedProducts).map((category) => (
              <div key={category}>
                <h2 className="text-2xl font-bold mb-4">{category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedProducts[category].map((product) => (
                    <ProductCard2
                      key={product.id}
                      product={product}
                      isWishlisted={wishlist.includes(product.id)}
                      toggleWishlist={toggleWishlist}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
