// EditIdeaForm.jsx
import React, { useState, useEffect } from "react";
import "../App.css";

function EditIdeaForm({ idea, onUpdateIdea, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (idea) {
      setTitle(idea.title);
      setDescription(idea.description);
      setTags(idea.tags.join(", "));
      setCategory(idea.category);
    }
  }, [idea]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateIdea({
      ...idea,
      title,
      description,
      tags: tags.split(",").map(tag => tag.trim()),
      category
    });
  }

  return (
    <form onSubmit={handleSubmit} className="idea-form">
      <h2>Edit Idea</h2>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
      ></textarea>
      <input
        type="text"
        value={tags}
        onChange={e => setTags(e.target.value)}
      />
      <input
        type="text"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <div className="form-actions">
        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default EditIdeaForm