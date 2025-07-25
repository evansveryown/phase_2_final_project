
const API = "https://phase2-project-7zdc.onrender.com"

// src/api.js
export function getIdeas() {
  return fetch('https://phase2-project-7zdc.onrender.com/ideas')
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch ideas');
      return res.json();
    })
    .then(data => data.sort((a, b) => b.id - a.id)); // Sort newest first
}


export async function postIdea(newIdea) {
  const res = await fetch(`${API}/ideas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newIdea)
  });
  return await res.json(); // This is required so the new idea can be added to state
}
