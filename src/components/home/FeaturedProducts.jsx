import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products.js';

function FeaturedProducts() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {featuredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to="/shop">Shop Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;