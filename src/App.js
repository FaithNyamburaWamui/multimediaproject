// src/App.js
import React from 'react';
import './App.css';
import VideoSection from './Videos'; // Keeping VideoSection from HEAD branch
// Removed the import for Landingpage

function App() {
  return (
    <div className="App">
      <VideoSection /> {/* Keeping VideoSection */}
      {/* <Footer/> */} // Commented out Footer as per HEAD branch
    </div>
  );
}

export default App;
