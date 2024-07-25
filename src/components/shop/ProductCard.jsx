import { useState } from 'react';
import { useCart } from '../../hooks/useCart';

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
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div className="quantity-control">
        <button onClick={handleDecrement}>-</button>
        <input 
          type="number" 
          min="1" 
          value={quantity} 
          onChange={handleQuantityChange}
        />
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;