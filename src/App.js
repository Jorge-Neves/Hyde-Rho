import logo from './logo.svg';
import './App.css';
import  { Routes, Route } from "react-router";
import Home from './Components/Home';
import Landing from "./Components/Landing";
import Details from './Components/Details';
import About from './Components/About';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/landing" element={<Landing />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/about" element={<About />} />
        </Routes>      
    </div>
  );
}

export default App;
