// src/components/layout/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import styles from './Navbar.module.css';

function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          ReactShop
        </Link>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/shop" className={styles.navLink}>Shop</Link>
          </li>
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