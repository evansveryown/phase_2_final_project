import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function IdeaCard({ idea, onDelete = () => {}, onToggleFavorite = () => {} })
 {
  
  const toggleFavorite = () => {
  fetch(`http://localhost:3000/ideas/${idea.id}`, {
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
    fetch(`http://localhost:3000/ideas/${idea.id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) throw new Error('Delete failed');
        return res;
      })
      .then(() => {
        console.log('Successfully deleted:', idea.id);
        onDelete(idea.id); // Direct call, no if check
      })
      .catch((err) => {
        console.error('Failed to delete:', err);
        alert('Failed to delete idea.');
      });
  }
};




  return (
    <div className="idea-card">
      <h3>{idea.title}</h3>
      <p>{idea.description}</p>
      <p><strong>Category:</strong> {idea.category}</p>
      <p><strong>Tags:</strong> {idea.tags && idea.tags.join(', ')}</p>

      <button onClick={toggleFavorite}>
  {idea.isFavorite ? '★ Remove Favorite' : '☆ Mark as Favorite'}
</button>


      <Link to={`/edit/${idea.id}`}>
        <button style={{ marginLeft: '1rem' }}>Edit</button>
      </Link>

      <button onClick={handleDelete} style={{ color: 'red' }}>
        Delete Idea
      </button>
    </div>
  );
}
