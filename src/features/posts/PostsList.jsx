//API comes from .env.development file
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  deletePost as deletePostService,
  fetchAllPosts,
} from "../../../api/postService";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  // Fetch posts frm the API
  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchAllPosts();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  // Delete a post
  const deletePost = async (id) => {
    try {
      await deletePostService(id); //this because duplicate functions name
      setPosts(posts.filter((post) => post.id !== id));
    } catch (e) {
      console.error("Error occured: ", e);
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="flex flex-col items-center my-8">
          <Link
            to={`posts/${post.id}`}
            className="text-blue-800 font-semibold mb-2"
          >
            {post.title}
          </Link>
          {/* <p>{post.body}</p> */}
          <div>
            <span>
              {" "}
              <Link
                to={`posts/${post.id}/edit`}
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Edit
              </Link>{" "}
            </span>
            <button
              onClick={() => {
                if (window.confirm("Are you sure?")) deletePost(post.id);
              }}
              className="bg-red-600 m-2 font-bold px-2 py-[6px] text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default PostsList;
