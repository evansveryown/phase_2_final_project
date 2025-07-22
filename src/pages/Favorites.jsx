import { useEffect, useState } from 'react';
import IdeaCard from '../components/IdeaCard';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/ideas?isFavorite=true')
      .then((res) => res.json())
      .then(setFavorites);
  }, []);

  const handleDelete = (deletedId) => {
    setFavorites((prev) => prev.filter((idea) => idea.id !== deletedId));
  };

  const handleToggleFavorite = (updatedIdea) => {
  if (!updatedIdea.isFavorite) {
    setFavorites((prev) => prev.filter((idea) => idea.id !== updatedIdea.id));
  }
};


  return (
    <div>
      <h2>Favorite Ideas</h2>
      {favorites.length === 0 ? (
        <p>No favorite ideas yet.</p>
      ) : (
        favorites.map((idea) => (
          <IdeaCard
  key={idea.id}
  idea={idea}
  onDelete={handleDelete}
  onToggleFavorite={handleToggleFavorite}
/>

        ))
      )}
    </div>
  );
}
