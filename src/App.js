import React from 'react';
import './App.css';
import Podcast from './Podcasts';
import VideoSection from './Videos';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Podcast />
      <VideoSection />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
