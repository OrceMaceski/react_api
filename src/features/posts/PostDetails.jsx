import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  deletePost as deletePostService,
  fetchPost,
} from "../../../api/postService";

function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const json = await fetchPost(id);
        setPost(json);
      } catch (error) {
        console.log("An error occurred:", error);
      }
    };

    fetchCurrentPost();
  }, [id]);

  // Delete post
  const deletePost = async () => {
    try {
      await deletePostService(post.id);
      navigate("/");
    } catch (e) {
      console.error("Error occured", e);
    }
  };

  if (!post) return <h2>Loading...</h2>;

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-semibold p-4">{post.title}</h2>
      <p className="p-4">{post.body}</p>
      <div className="flex gap-2">
        <Link to="/" className="bg-blue-500 rounded-md px-6 py-2 text-white">
          Back
        </Link>
        <button
          onClick={() => {
            if (window.confirm("Are you sure?")) deletePost();
          }}
          className="bg-red-600 rounded-md px-6 py-2 text-white"
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    </div>
  );
}

export default PostDetails;
