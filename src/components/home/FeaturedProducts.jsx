import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const allProducts = await response.json();
      
      // Randomly select 10 products
      const shuffled = allProducts.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 10);
      
      setFeaturedProducts(selected);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {featuredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <Link to={`/shop/${product.id}`} className="btn">View Product</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;