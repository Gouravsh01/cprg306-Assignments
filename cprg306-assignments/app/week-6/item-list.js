"use client";
import { useState } from "react";
import Item from "./item";
import items from "./item.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  const sortItems = (a, b) => {
    return sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category);
  };

  const renderSortButton = (label, value) => (
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

  return (
    <div className="item-list-container">
      <div>
        <label htmlFor="sort" style={{ margin: "10px" }}>Sort by: </label>
        {renderSortButton("Name", "name")}
        {renderSortButton("Category", "category")}
      </div>
      <ul className="item-list">
        {[...items].sort(sortItems).map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
