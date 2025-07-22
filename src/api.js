
const API = "http://localhost:3000"

export async function getIdeas() {
  const res = await fetch(`${API}/ideas`);
  return await res.json();
}

export async function postIdea(newIdea) {
  const res = await fetch(`${API}/ideas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newIdea)
  });
  return await res.json(); // This is required so the new idea can be added to state
}
