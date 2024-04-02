import React from "react";
import Item from "./item";

const ItemList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
