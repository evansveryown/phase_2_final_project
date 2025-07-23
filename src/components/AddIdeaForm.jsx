import React, { useState } from "react";
import "../App.css";

function AddIdeaForm({ onAddIdea }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    "Dating",
    "Finance",
    "Food",
    "Gaming",
    "Health",
    "Music",
    "News",
    "Productivity",
    "Shopping",
    "Social",
    "Sports",
    "Vehicles"
  ];

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    onAddIdea({
      title,
      description,
      tags: tags.split(",").map(tag => tag.trim()),
      category
    });

    setTitle("");
    setDescription("");
    setTags("");
    setCategory("");
  }

  return (
    <form onSubmit={handleSubmit} className="idea-form">
      <h2 className="centered-heading">Add New Idea</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={e => setTags(e.target.value)}
      />
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <div className="form-actions">
        <button type="submit">Add Idea</button>
      </div>
    </form>
  );
}

export default AddIdeaForm;
