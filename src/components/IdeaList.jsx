import { useState, useEffect } from 'react';
import IdeaCard from './IdeaCard';

export default function IdeaList() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchIdeas = () => {
    fetch('http://localhost:3000/ideas')
      .then((res) => res.json())
      .then((data) => {
        setIdeas(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching ideas:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  const handleDeleteFromList = (deletedId) => {
  console.log('Removing from state:', deletedId);
  setIdeas((prevIdeas) => {
    const updated = prevIdeas.filter((idea) => idea.id !== deletedId);
    console.log('Updated ideas:', updated);
    return [...updated]; // Force new reference
  });
};



  if (loading) return <p>Loading ideas...</p>;

  return (
  <div className="idea-list">
    {console.log('Rendering with ideas:', ideas)}
    {ideas.length === 0 ? (
      <p>No ideas found.</p>
    ) : (
      ideas.map((idea) => (
        <IdeaCard key={idea.id} idea={idea} onDelete={handleDeleteFromList} />
      ))
    )}
  </div>
);

}
