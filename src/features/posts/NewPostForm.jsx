import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  API_URL } from '../../constants';

function NewPostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const postData = { title, body };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });

    if (response.ok) {
      const { id } = await response.json();
      navigate(`/posts/${id}`);
    } else {
      console.error('Failed to create post');
    }
  }

  return (
    <>
      <h2>Create new post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titleInput">Title:</label>
          <input
            id="titleInput"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            />
        </div>
        <div>
          <label htmlFor="bodyInput">Body:</label>
          <input
            id="bodyInput"
            type="text"
            value={body}
            onChange={e => setBody(e.target.value)}
            required
            />
          </div>
          <div>
            <button type="submit">Create post</button>
          </div>
      </form>
    </>
  )
}

export default NewPostForm;
