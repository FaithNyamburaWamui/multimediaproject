import './App.css';
import VideoSection from './Videos'; 
import Landingpage from './Landingpage';
import Blog from './Blog';
import Podcast from './Podcasts';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Landingpage/>
      <VideoSection /> 
      <Blog/>
      < Podcast/>
      <Footer/>
    </div>
  );
}

export default App;
