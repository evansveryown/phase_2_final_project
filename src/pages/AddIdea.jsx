import { useNavigate } from 'react-router-dom';
import AddIdeaForm from '../components/AddIdeaForm';
import { postIdea } from '../api';

export default function AddIdea() {
  const navigate = useNavigate();

  function handleAdd(newIdea) {
    postIdea(newIdea).then(() => {
      navigate('/');
    });
  }

  return (
    <div>
      <h2>Add New Idea</h2>
      <AddIdeaForm onAdd={handleAdd} />
    </div>
  );
}
