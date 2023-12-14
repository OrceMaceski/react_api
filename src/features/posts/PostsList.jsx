//API comes from .env.development file
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from '../../constants';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [,setLoading] = useState(true);
  const [,setError] = useState(null);

// Fetch posts frm the API
useEffect(() => {
  async function loadPosts() {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const json = await response.json();
        setPosts(json);
      } else {
          throw response;
      }
    } catch (error) {
      setError("An error occurred. Awkward...");
      console.log("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  }
  loadPosts();
}, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <Link to={`posts/${post.id}`}>{post.title}</Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}
export default PostsList;