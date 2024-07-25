import FeaturedProducts from '../components/home/FeaturedProducts';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to React Shop</h1>
      <p>Discover our amazing products!</p>
      <FeaturedProducts />
    </div>
  );
}

export default Home;

// src/pages/Shop.jsx
import ProductList from '../components/shop/ProductList';
import Cart from '../components/shop/Cart';

function Shop() {
  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="shop-content">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default Shop;