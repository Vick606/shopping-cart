import { Link } from 'react-router-dom';
import { products } from '../../data/products';

function FeaturedProducts() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {featuredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to="/shop">Shop Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;

// src/components/shop/ProductList.jsx
import { products } from '../../data/products';
import ProductCard from './ProductCard';

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

// src/components/shop/ProductCard.jsx
import { useCart } from '../../hooks/useCart';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;