// AddIdea.jsx
import { useNavigate } from "react-router-dom";
import AddIdeaForm from "../components/AddIdeaForm";

export default function AddIdea() {
  const navigate = useNavigate();

  const handleAddIdea = (newIdea) => {
    fetch("https://phase2-project-7zdc.onrender.com/ideas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newIdea, isFavorite: false })
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/"); // 👈 redirect to Home after adding
      })
      .catch((err) => {
        console.error("Failed to add idea:", err);
        alert("Failed to add idea");
      });
  };

  return (
    <div>
      <AddIdeaForm onAddIdea={handleAddIdea} />
    </div>
  );
}
