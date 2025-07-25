import { useEffect, useState } from 'react';
import IdeaCard from '../components/IdeaCard';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://phase2-project-7zdc.onrender.com/ideas?isFavorite=true')
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
      <h2 className="centered-heading">Favorite Ideas</h2>
      {favorites.length === 0 ? (
        <p className="centered-heading">No favorite ideas yet.</p>
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
