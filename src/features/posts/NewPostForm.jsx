import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from "../../../api/postService";

function NewPostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const postData = { title, body };

    try {
      const response = await createPost(postData);
      navigate(`/posts/${response.id}`);
    } catch (error) {
      console.error("Error occured", error);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <h2 className='font-bold'>Create new post</h2>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <div>
          <label htmlFor="titleInput">Title:</label>
          <input
            id="titleInput"
            className='input'
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            />
        </div>
        <div>
          <label htmlFor="bodyInput">Body:</label>
          <textarea
            id="bodyInput"
            className='input'
            type="text"
            value={body}
            onChange={e => setBody(e.target.value)}
            required
            />
          </div>
          <div>
            <button type="submit" className='btn btn-primary my-2'>Create post</button>
          </div>
      </form>
    </div>
  )
}

export default NewPostForm;
