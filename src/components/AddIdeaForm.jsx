import { useState } from 'react';

export default function AddIdeaForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newIdea = {
      title,
      description,
      tags: tags.split(',').map(tag => tag.trim()),
      category,
      isFavorite: false
    };
    onAdd(newIdea);
    setTitle('');
    setDescription('');
    setTags('');
    setCategory('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input placeholder="Tags (comma separated)" value={tags} onChange={(e) => setTags(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        <option value="Web">Web</option>
        <option value="Mobile">Mobile</option>
        <option value="AI">AI</option>
      </select>
      <button type="submit">Add Idea</button>
    </form>
  );
}
