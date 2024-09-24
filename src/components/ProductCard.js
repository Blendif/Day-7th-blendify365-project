import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-lg">${product.price}</p>
    </div>
  );
}

export default ProductCard;
  
