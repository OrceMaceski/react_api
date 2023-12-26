import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost, updatePost } from "../../../api/postService";

function EditPostForm() {
  const [post, setPost] = useState("");
  const { id } = useParams();
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const response = await fetchPost(id);
        setPost(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPost = {
      title: post.title,
      body: post.body,
    };

    try {
      const response = await updatePost(id, updatedPost);
      navigate(`/posts/${response.id}`);
    } catch (e) {
      console.error("Error occured", e);
    }
  };

  if (!post) return <h2>Loading...</h2>;

  return (
    <>
      <h2>Edit post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="post-title">Title:</label>
          <input
            id="post-title"
            className="input"
            type="text"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="post-body">Body:</label>
          <textarea
            id="post-body"
            className="input"
            type="text"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary my-2">
            Edit post
          </button>
        </div>
      </form>
    </>
  );
}

export default EditPostForm;
