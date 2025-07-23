// EditIdeaForm.jsx
import React, { useState, useEffect } from "react";
import "../App.css";

export default function EditIdeaForm({ ideaId, onUpdate, onCancel }) {
  console.log("EditIdeaForm loaded with ideaId:", ideaId);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://phase2-project-7zdc.onrender.com/ideas/${ideaId}`)
      .then(res => {
        if (!res.ok) throw new Error("Idea not found");
        return res.json();
      })
      .then(data => {
        setTitle(data.title);
        setDescription(data.description);
        setTags(data.tags.join(", "));
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
      tags: tags.split(",").map(tag => tag.trim()),
      category
    };

    fetch(`https://phase2-project-7zdc.onrender.com/ideas/${ideaId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedIdea)
    })
      .then(res => res.json())
      .then(onUpdate);
  }

  if (loading) return <p>Loading idea...</p>;

  return (
    <form onSubmit={handleSubmit} className="idea-form">
      <h2>Edit Idea</h2>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="text"
        value={tags}
        onChange={e => setTags(e.target.value)}
        placeholder="Tags (comma separated)"
      />
      <input
        type="text"
        value={category}
        onChange={e => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <div className="form-actions">
        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}
