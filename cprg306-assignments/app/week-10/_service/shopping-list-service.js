import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const itemsCollection = collection(db, `users/${userId}/items`);
  const snapshot = await getDocs(itemsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addItem = async (userId, item) => {
  const itemsCollection = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemsCollection, item);
  return docRef.id;
};
