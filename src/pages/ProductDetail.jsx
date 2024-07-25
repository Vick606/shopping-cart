import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;