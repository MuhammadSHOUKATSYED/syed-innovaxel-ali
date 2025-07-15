'use client';

import { useState } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export default function Home() {
  const [url, setUrl] = useState('');
  const [shortCode, setShortCode] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [response, setResponse] = useState<any>(null);

  const handleCreate = async () => {
    const res = await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    setResponse(data);
  };

  const handleRetrieve = async () => {
    const res = await fetch(`${API_BASE}/${shortCode}`);
    const data = await res.json();
    setResponse(data);
  };

  const handleUpdate = async () => {
    const res = await fetch(`${API_BASE}/${shortCode}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: newUrl }),
    });
    const data = await res.json();
    setResponse(data);
  };

  const handleDelete = async () => {
    const res = await fetch(`${API_BASE}/${shortCode}`, { method: 'DELETE' });
    setResponse(res.status === 204 ? 'Deleted successfully' : 'Failed to delete');
  };

  const handleStats = async () => {
    const res = await fetch(`${API_BASE}/${shortCode}/stats`);
    const data = await res.json();
    setResponse(data);
  };

  return (
    <main>
      <h1>URL Shortener UI</h1>

      <h3>Create Short URL</h3>
      <input
        placeholder="Enter long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>

      <h3>Use Short Code</h3>
      <input
        placeholder="Enter short code"
        value={shortCode}
        onChange={(e) => setShortCode(e.target.value)}
      />
      <div className="actions">
        <button onClick={handleRetrieve}>Retrieve</button>
        <button onClick={handleStats}>Stats</button>
        <button onClick={handleDelete}>Delete</button>
      </div>

      <h3>Update URL</h3>
      <input
        placeholder="Enter new long URL"
        value={newUrl}
        onChange={(e) => setNewUrl(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>

      {response && (
        <>
          <h3>Response</h3>
          <pre>{typeof response === 'string' ? response : JSON.stringify(response, null, 2)}</pre>
        </>
      )}
    </main>
  );
}
