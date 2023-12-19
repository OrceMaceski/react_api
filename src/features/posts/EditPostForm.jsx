import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {  API_URL } from '../../constants';

function EditPostForm() {
  const [post, setPost] = useState('');
  const { id } = useParams();
  const [,setLoading] = useState(true);
  const [,setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (response.ok) {
          const json = await response.json();
          setPost(json);
        } else {
          throw response;
        }
      } catch (error) {
        console.log("An error occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentPost();
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
        const response = await fetch(`${API_URL}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              title: post.title,
              body: post.body
            }
          )
        });

        if (response.ok) {
          const json = await response.json();
          console.log("Success:", json);
          navigate(`/posts/${id}`);
        } else {
          throw response;
        }
      } catch (e) {
      console.error("Error occured", e);
    }
  }

  if (!post) return <h2>Loading...</h2>;


  return (
    <>
      <h2>Edit post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="post-title">Title:</label>
          <input
            id="post-title"
            className='input'
            type="text"
            value={post.title}
            onChange={e => setPost({ ...post, title: e.target.value })}
            required
            />
        </div>
        <div>
          <label htmlFor="post-body">Body:</label>
          <textarea
            id="post-body"
            className='input'
            type="text"
            value={post.body}
            onChange={e => setPost({ ...post, body: e.target.value })}
            required
            />
          </div>
          <div>
            <button type="submit" className='btn btn-primary my-2'>Edit post</button>
          </div>
      </form>

    </>
  )
}

export default EditPostForm;
