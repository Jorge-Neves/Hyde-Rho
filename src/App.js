import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import  { Routes, Route } from "react-router";

import Landing from './Components/Landing';
import About from './Components/About';
import Details from './Components/Details/Index';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
                
          </Routes>
      </Router>
    </div>
  );
}

export default App;
