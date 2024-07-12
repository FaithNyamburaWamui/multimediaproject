// import logo from './logo.svg';
import './App.css';
import VideoSection from './Videos';
import Landingpage from './Landingpage';
import Blog from './Blog';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Landingpage/>
      <VideoSection /> 
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
