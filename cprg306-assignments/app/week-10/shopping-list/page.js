"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_service/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  const loadItems = async () => {
    try {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };


  const addNewItem = (newItem) => {
    setItems((prevItems) => [newItem, ...prevItems]);
  };

  const selectItem = (itemName) => {
    if (typeof itemName === "string") {
      const cleanedItemName = itemName
        .replace(
          /,.*|[\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�]|\p{Emoji}/gu,
          ""
        )
        .trim();
      setSelectedItemName(cleanedItemName);
    } else {
      console.error("Wrong item name:", itemName);
    }
  };

  return (
    <main>
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex">
        <div className="flex-1 max-w-sm m-2">
          <NewItem onAddItem={addNewItem} />
          <ItemList items={items} onItemSelect={selectItem} />
        </div>
        <div className="flex-1 max-w-sm m-2 p-3">
          <h3 className="text-xl font-bold">Meal Ideas</h3>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
