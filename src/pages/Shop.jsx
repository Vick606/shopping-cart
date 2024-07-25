// src/pages/Shop.jsx
import { useState, useEffect } from 'react';
import ProductList from '../components/shop/ProductList';
import Cart from '../components/shop/Cart';

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="shop-content">
        <ProductList products={products} />
        <Cart />
      </div>
    </div>
  );
}

export default Shop;