

import React from 'react';

export default function  Item ({ name, quantity, category }){
  return (
    <li className="flex items-center justify-between p-4 border-b">
      <div>
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-gray-500">{category}</p>
      </div>
      <p className="text-gray-700">{quantity}</p>
    </li>
  );
};


