// IdeaCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function IdeaCard({ idea, onDelete = () => {}, onToggleFavorite = () => {} }) {
  const toggleFavorite = () => {
    fetch(`https://phase2-project-7zdc.onrender.com/ideas/${idea.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isFavorite: !idea.isFavorite }),
    })
      .then((res) => res.json())
      .then((updatedIdea) => {
        onToggleFavorite(updatedIdea); // Let parent update state
      })
      .catch((err) => {
        console.error('Failed to toggle favorite:', err);
        alert('Failed to update favorite status.');
      });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this idea?')) {
      fetch(`https://phase2-project-7zdc.onrender.com/ideas/${idea.id}`, {
        method: 'DELETE',
      })
        .then((res) => {
          if (!res.ok) throw new Error('Delete failed');
          return res;
        })
        .then(() => {
          console.log('Successfully deleted:', idea.id);
          onDelete(idea.id);
        })
        .catch((err) => {
          console.error('Failed to delete:', err);
          alert('Failed to delete idea.');
        });
    }
  };

  return (
    <div className="idea-card">
      <div className="card-header">
        <h3>{idea.title}</h3>
        <button onClick={toggleFavorite}>
          {idea.isFavorite ? "★" : "☆"}
        </button>
      </div>
      <p>{idea.description}</p>

      <div className="tags">
        {idea.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>

      <p className="category">
        <strong>Category:</strong> {idea.category}
      </p>

      <div className="card-actions">
        <Link to={`/edit/${idea.id}`}>
          <button className="edit-btn">Edit</button>
        </Link>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
