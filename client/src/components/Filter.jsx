// import React from "react";

export default function Filter({ filters, onFilterChange }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 md:w-1/4 md:mr-4">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      <div className="mb-4">
        <label className="block text-gray-600">Price: ${filters.price}</label>
        <input
          type="range"
          min="50"
          max="500"
          value={filters.price}
          onChange={(e) => onFilterChange("price", e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Color</label>
        <select
          value={filters.color}
          onChange={(e) => onFilterChange("color", e.target.value)}
          className="w-full border border-gray-300 rounded"
        >
          <option value="">All</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Red">Red</option>
          <option value="Yellow">Yellow</option>
          <option value="Brown">Brown</option>
          <option value="Blue">Blue</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Size</label>
        <select
          value={filters.size}
          onChange={(e) => onFilterChange("size", e.target.value)}
          className="w-full border border-gray-300 rounded"
        >
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Subcategory</label>
        <select
          value={filters.subcategory}
          onChange={(e) => onFilterChange("subcategory", e.target.value)}
          className="w-full border border-gray-300 rounded"
        >
          <option value="">All</option>
          <option value="Structured Totes">Structured Totes</option>
          <option value="Clutches">Clutches</option>
          <option value="Heels">Heels</option>
          <option value="Chic Boots">Chic Boots</option>
          <option value="Flowing Dresses">Flowing Dresses</option>
          <option value="Outerwear">Outerwear</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Scarves">Scarves</option>
          <option value="Sunglasses">Sunglasses</option>
        </select>
      </div>
    </div>
  );
}
