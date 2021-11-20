import logo from './logo.svg';
import './App.css';
import  { Routes, Route } from "react-router";

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
