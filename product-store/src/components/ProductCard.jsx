
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}>
    <img src={product.thumbnail} alt={product.title} style={{ width: "100%" }} />
    <h4>{product.title}</h4>
    <p>₹ {product.price}</p>
    <Link to={`/product/${product.id}`}>View</Link>
  </div>
);

export default ProductCard;
