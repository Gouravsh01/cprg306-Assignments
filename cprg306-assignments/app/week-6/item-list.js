"use client";
import { useState } from "react";
import React from "react";
import Item from "./item";

const ItemList = ({items}) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
     return 0;
  });

  const renderSortButton = (label, value) => {
    return (
      <button
      key={value}
      onClick={() => setSortBy(value)}
      style={{
        backgroundColor: sortBy === value ? "#87CEEB" : "#333",
        color: "#fff", 
        transform: sortBy === value ? "scale(1.1)" : "scale(1)",
        transition: "transform 0.3s ease",
        padding: "8px",
        margin: "5px",
        width: "100px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }}
      >
      {label}
    </button>
  );
};


  return (
    <div>
      <div>
        <label for="sort" className="m-2">Sort by: </label>
        {renderSortButton("Name", "name")}
        {renderSortButton("Category", "category")}
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;