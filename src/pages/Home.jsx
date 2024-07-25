import React from 'react';
import FeaturedProducts from '../components/home/FeaturedProducts';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to React Shop</h1>
      <p>Discover our amazing products!</p>
      <FeaturedProducts />
    </div>
  );
}

export default Home;