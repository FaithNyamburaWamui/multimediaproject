import logo from './logo.svg';
import './App.css';
import VideoSection from './Videos'; // Keeping VideoSection from HEAD branch
import Landingpage from './Landingpage';

function App() {
  return (
    <div className="App">
      <Landingpage/>
      <VideoSection /> 
      {/* <Footer/> */}
    </div>
  );
}

export default App;
