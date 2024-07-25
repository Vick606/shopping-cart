import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import './ProductList.css';

const ProductList = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price.toFixed(2)}</p>
          <div className="product-actions">
            <Link to={`/shop/${product.id}`} className="btn view-btn">View Details</Link>
            <button onClick={() => addToCart(product)} className="btn add-btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;