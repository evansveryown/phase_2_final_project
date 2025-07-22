import { useEffect, useState } from 'react';
import { getIdeas } from '../api';
import IdeaCard from '../components/IdeaCard';

export default function Favorites() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    getIdeas().then(data => {
      setIdeas(data.filter(idea => idea.isFavorite));
    });
  }, []);

  return (
    <div>
      <h2>Favorite Ideas</h2>
      {ideas.map((idea) => (
        <IdeaCard key={idea.id} idea={idea} />
      ))}
    </div>
  );
}
