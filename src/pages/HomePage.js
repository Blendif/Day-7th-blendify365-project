import React from 'react';
import ProductCard from '../components/ProductCard';

function HomePage() {
  const products = [
    { id: 1, name: "E-Book", price: 10, image: "ebook.jpg" },
    { id: 2, name: "Wallpapers", price: 5, image: "wallpaper.jpg" },
    { id: 3, name: "Coloring Pages", price: 2, image: "coloring.jpg" }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Featured Digital Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
    
