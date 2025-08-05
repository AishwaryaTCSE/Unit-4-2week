// pages/Home.jsx
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  const filtered = products
    .filter((product) => category === "all" || product.category === category)
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div style={{ padding: "1rem" }}>
      <h2>All Products</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>Category: </label>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>

        <label style={{ marginLeft: "1rem" }}>Sort by Price: </label>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="none">None</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
