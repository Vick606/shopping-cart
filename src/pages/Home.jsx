import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedProducts from '../components/home/FeaturedProducts';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to Our Shop</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/shop" className="cta-button">Shop Now</Link>
      </header>
      
      <FeaturedProducts />
      
      <section className="about-us">
        <h2>About Us</h2>
        <p>We're passionate about bringing you the best products and shopping experience.</p>
      </section>
      
      <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Home;