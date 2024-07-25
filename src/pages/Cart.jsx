import React from 'react';
import { useCart } from '../hooks/useCart';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h2>Total: ${total.toFixed(2)}</h2>
            <button onClick={handleCheckout} className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
      <Link to="/shop" className="continue-shopping">Continue Shopping</Link>
    </div>
  );
}

export default Cart;