import { Link } from "react-router-dom";

const Blog = () => {
  // Sample blog posts
  const posts = [
    { id: 1, title: "Understanding React Router" },
    { id: 2, title: "React Hooks: A Beginner's Guide" },
    { id: 3, title: "State Management with Zustand" }
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link> {/* Dynamic Links */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
