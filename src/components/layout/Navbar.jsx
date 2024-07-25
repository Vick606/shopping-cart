// src/components/layout/Navbar.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import styles from './Navbar.module.css';

function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/" className={styles.navLink}>Home</Link></li>
          <li className={styles.navItem}><Link to="/shop" className={styles.navLink}>Shop</Link></li>
          <li className={styles.navItem}>
            <Link to="/cart" className={`${styles.navLink} ${styles.cartLink}`}>
              Cart ({itemCount})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

// src/components/shop/ProductCard.jsx
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(isNaN(value) ? 1 : Math.max(1, value));
  };

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      <div className={styles.quantityControl}>
        <button onClick={handleDecrement} className={styles.quantityButton}>-</button>
        <input 
          type="number" 
          min="1" 
          value={quantity} 
          onChange={handleQuantityChange}
          className={styles.quantityInput}
        />
        <button onClick={handleIncrement} className={styles.quantityButton}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;

// src/pages/Shop.jsx
import { useState, useEffect } from 'react';
import ProductList from '../components/shop/ProductList';
import styles from './Shop.module.css';

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className={styles.shopContainer}>Loading...</div>;
  if (error) return <div className={styles.shopContainer}>Error: {error}</div>;

  return (
    <div className={styles.shopContainer}>
      <div className="container">
        <h1>Shop</h1>
        <div className={styles.productGrid}>
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export default Shop;

// src/pages/Cart.jsx
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.cartPage}>
      <div className="container">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((