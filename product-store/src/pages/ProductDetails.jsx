// pages/ProductDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} style={{ width: "300px" }} />
      <p>Category: {product.category}</p>
      <p>Price: ₹{product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
