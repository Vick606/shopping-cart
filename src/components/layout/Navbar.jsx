import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li>
          <Link to="/cart">
            Cart ({itemCount})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;