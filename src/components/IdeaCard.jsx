// IdeaCard.jsx
import React from "react";
import "../App.css";

function IdeaCard({ idea, onEdit, onDelete, onToggleFavorite }) {
  return (
    <div className="idea-card">
      <div className="card-header">
        <h3>{idea.title}</h3>
        <button onClick={() => onToggleFavorite(idea.id)}>
          {idea.favorite ? "★" : "☆"}
        </button>
      </div>
      <p>{idea.description}</p>
      <div className="tags">
        {idea.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <p className="category">
        <span>Category:</span> {idea.category}
      </p>
      <div className="card-actions">
        <button className="edit-btn" onClick={() => onEdit(idea)}>Edit</button>
        <button className="delete-btn" onClick={() => onDelete(idea.id)}>Delete</button>
      </div>
    </div>
  );
}

export default IdeaCard;

// Usage example (wherever you're using IdeaCard)
// <IdeaCard
//   idea={idea}
//   onEdit={handleEdit}           // should be a function
//   onDelete={handleDelete}       // should be a function
//   onToggleFavorite={handleToggleFavorite} // should be a function
// />