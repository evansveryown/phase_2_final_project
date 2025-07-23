import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddIdea from './pages/AddIdea';
import Favorites from './pages/Favorites';
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  // Example data to display on the page
  const [info, setInfo] = useState({
    left: [
      { title: "Welcome!", detail: "This is your idea board. Add and manage your ideas easily." },
      { title: "Tip", detail: "Use the dark mode toggle for a comfortable viewing experience." }
    ],
    right: [
      { title: "Favorites", detail: "Mark ideas as favorites to find them quickly later." },
      { title: "Get Started", detail: "Click 'Add Idea' to submit your first idea!" }
    ]
  });

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <button
        className="dark-toggle"
        onClick={() => setDark((d) => !d)}
        aria-label="Toggle dark mode"
      >
        {dark ? "🌙" : "☀️"}
      </button>
      <Navbar />
      {/* Enhanced: Info split into two columns */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        margin: "2rem 0"
      }}>
        <div style={{
          flex: 1,
          maxWidth: 350,
          background: "var(--card-bg)",
          color: "var(--text-color)",
          border: "1px solid var(--card-border)",
          borderRadius: 12,
          boxShadow: "var(--shadow)",
          padding: "1.5rem"
        }}>
          {info.left.map((item, idx) => (
            <div key={idx} style={{ marginBottom: "1.2rem" }}>
              <h3 style={{ color: "var(--primary)", margin: 0 }}>{item.title}</h3>
              <p style={{ margin: "0.5rem 0 0 0" }}>{item.detail}</p>
            </div>
          ))}
        </div>
        <div style={{
          flex: 1,
          maxWidth: 350,
          background: "var(--card-bg)",
          color: "var(--text-color)",
          border: "1px solid var(--card-border)",
          borderRadius: 12,
          boxShadow: "var(--shadow)",
          padding: "1.5rem"
        }}>
          {info.right.map((item, idx) => (
            <div key={idx} style={{ marginBottom: "1.2rem" }}>
              <h3 style={{ color: "var(--primary)", margin: 0 }}>{item.title}</h3>
              <p style={{ margin: "0.5rem 0 0 0" }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddIdea />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
