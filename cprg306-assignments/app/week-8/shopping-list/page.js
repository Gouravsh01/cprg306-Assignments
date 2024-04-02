// shopping-list/page.js
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";
import ItemList from "./item-list";
import NewItem from "./new-item";
import Link from "next/link";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    };
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      const itemId = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { id: itemId, ...newItem }]);
    }
  };

  return (
    <main>
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex">
        <div className="flex-1 max-w-sm m-2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} />
        </div>
      </div>
      <Link href="/">
        <a>Go to Home</a>
      </Link>
    </main>
  );
}
