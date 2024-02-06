

import React from 'react';
import ItemList from './item-list';

export default function Page (){
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Shopping List</h1>
      <ItemList />
    </main>
  );
}


