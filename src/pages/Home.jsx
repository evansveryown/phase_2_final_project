import { useEffect, useState } from 'react';
import { getIdeas } from '../api';
import IdeaCard from '../components/IdeaCard';
import AddIdeaForm from '../components/AddIdeaForm';

export default function Home() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
  getIdeas().then(setIdeas).catch(console.error);
}, []);


  const handleAddIdea = (newIdea) => {
    fetch('http://localhost:3000/ideas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newIdea),
    })
      .then((res) => res.json())
      .then((createdIdea) => {
  setIdeas((prevIdeas) =>
    [createdIdea, ...prevIdeas].sort((a, b) => b.id - a.id)
  );
})

      .catch((err) => {
        console.error('Failed to add idea:', err);
        alert('Failed to add idea');
      });
  };

  const handleDelete = (deletedId) => {
    setIdeas((prevIdeas) => prevIdeas.filter((idea) => idea.id !== deletedId));
  };

  const handleToggleFavorite = (updatedIdea) => {
    setIdeas((prevIdeas) =>
  prevIdeas
    .map((idea) => (idea.id === updatedIdea.id ? updatedIdea : idea))
    .sort((a, b) => b.id - a.id)
);

  };

  return (
    <div>
      <h2 className="centered-heading">All Project Ideas</h2>
      
      {ideas.length === 0 ? (
        <p>No project ideas yet.</p>
      ) : (
        ideas.map((idea) => (
          <IdeaCard
            key={idea.id}
            idea={idea}
            onDelete={handleDelete}
            onToggleFavorite={handleToggleFavorite} // 🔥 Add this
          />
        ))
      )}
    </div>
  );
}
