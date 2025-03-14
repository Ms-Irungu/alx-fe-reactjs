import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams(); // Get the blog post ID from the URL

  // Sample blog content
  const blogPosts = {
    1: { title: "Understanding React Router", content: "React Router is a powerful library for handling routing in React applications." },
    2: { title: "React Hooks: A Beginner's Guide", content: "Hooks allow functional components to use state and lifecycle features." },
    3: { title: "State Management with Zustand", content: "Zustand is a small, fast, and scalable state-management solution for React." }
  };

  // Find the blog post based on the ID
  const post = blogPosts[postId];

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
