//API comes from .env.development file
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
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

// Delete a post
const deletePost = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      const deletedPosts = posts.filter((post) => post.id !== id);
      setPosts(deletedPosts);
    } else {
      throw response;
    }
  } catch (e) {
    console.error("Error occured", e);
  }
}

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <Link to={`posts/${post.id}`} className='text-blue-800 font-semibold'>{post.title}</Link>
          {/* <p>{post.body}</p> */}
          <div className="post-links">
          </div>
          <br />
          <span> <Link to={`posts/${post.id}/edit`} className='bg-blue-500 m-2 px-4 py-1 text-white rounded-md'>Edit</Link> </span>
          <button onClick={()=> deletePost(post.id)} className='bg-red-500 m-2 px-2 py-1 text-white rounded-md'>Delete</button>
        </div>
      ))}
    </div>
  )
}
export default PostsList;
