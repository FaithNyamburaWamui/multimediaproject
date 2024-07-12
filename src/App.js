// import logo from './logo.svg';
import './App.css';
import VideoSection from './Videos'; // Keeping VideoSection from HEAD branch
import Landingpage from './Landingpage';
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      <Landingpage/>
      <VideoSection /> 
      <Blog/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
