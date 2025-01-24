import React from "react";

export default function SearchBar({ value, onSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
    </div>
  );
}
