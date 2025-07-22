
import { useState, useEffect } from 'react';

export default function EditIdeaForm({ ideaId, onUpdate }) {

  console.log("EditIdeaForm loaded with ideaId:", ideaId);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/ideas/${ideaId}`)
      .then(res => {
        if (!res.ok) throw new Error("Idea not found");
        return res.json();
      })
      .then(data => {
        setTitle(data.title);
        setDescription(data.description);
        setTags(data.tags.join(', '));
        setCategory(data.category);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        alert("Failed to load idea.");
      });
  }, [ideaId]);


  function handleSubmit(e) {
    e.preventDefault();
    const updatedIdea = {
      title,
      description,
      tags: tags.split(',').map(tag => tag.trim()),
      category
    };

    fetch(`http://localhost:3000/ideas/${ideaId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedIdea)
    })
      .then(res => res.json())
      .then(onUpdate); // callback to handle navigation or state update
  }

  if (loading) return <p>Loading idea...</p>; // ✅ loading state

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Idea</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma separated)"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option value="Web">Web</option>
        <option value="Mobile">Mobile</option>
        <option value="AI">AI</option>
      </select>
      <button type="submit">Update Idea</button>
    </form>
  );
}
