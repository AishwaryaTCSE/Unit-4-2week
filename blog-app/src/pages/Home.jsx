
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Blog Posts</h2>
      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
