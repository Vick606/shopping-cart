import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import './Checkout.css';

const Checkout = () => {
  const { cart, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', { ...formData, cart });
    // typically s-d-t-a server
    clearCart();
    alert('Order placed successfully!');
    navigate('/');
  };

  const total = getCartTotal();

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout-content">
        <div className="order-summary">
          <h2>Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.title}</span>
              <span>
                {item.quantity} x ${item.price.toFixed(2)}
              </span>
            </div>
          ))}
          <div className="total">
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Shipping Information</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Shipping Address"
            required
          ></textarea>
          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;