import { useEffect, useState } from 'react';
import { getIdeas } from '../api';
import IdeaCard from '../components/IdeaCard';

export default function Home() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    getIdeas().then(setIdeas);
  }, []);

  return (
    <div>
      <h2>All Project Ideas</h2>
      {ideas.map((idea) => (
        <IdeaCard key={idea.id} idea={idea} />
      ))}
    </div>
  );
}
