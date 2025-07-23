// IdeaList.jsx
import React from "react";
import IdeaCard from "./IdeaCard";
import "../App.css";

function IdeaList({ ideas, onEdit, onDelete, onToggleFavorite }) {
  return (
    <div className="idea-list">
      {ideas.map(idea => (
        <IdeaCard
          key={idea.id}
          idea={idea}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default IdeaList;
