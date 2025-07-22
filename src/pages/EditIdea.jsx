import { useParams, useNavigate } from 'react-router-dom';
import EditIdeaForm from '../components/EditIdeaForm';

export default function EditIdea() {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleUpdate() {
    navigate('/');
  }

  return <EditIdeaForm ideaId={id} onUpdate={handleUpdate} />;
}
