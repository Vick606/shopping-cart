import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

function CartWidget() {
  const { cart } = useCart();

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <span className="cart-icon">🛒</span>
        <span className="item-count">{itemCount}</span>
      </Link>
      <div className="cart-preview">
        <p>{itemCount} item(s)</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartWidget;