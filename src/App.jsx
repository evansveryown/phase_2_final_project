import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddIdea from './pages/AddIdea';
import Favorites from './pages/Favorites';
import EditIdea from './pages/EditIdea';
import IdeaList from './components/IdeaList';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddIdea />} />
        <Route path="/edit/:id" element={<EditIdea />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<IdeaList />} />
      </Routes>
    </>
  );
}

export default App;
