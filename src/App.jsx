import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
      });
      if (response.status === 201) {
        setMessage('Post uploaded successfully');
      }
    } catch (error) {
      setMessage('Failed to upload post');
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Upload a Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            Body:
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded"
            />
          </label>
        </div>
        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
          Upload Post
        </button>
      </form>
      {message && <p className="text-green-600 mt-4">{message}</p>}
    </div>
  );
};

export default App;
