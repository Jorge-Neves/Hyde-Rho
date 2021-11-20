import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import  { Routes, Route } from "react-router";
import Home from './Components/Home';
import Landing from "./Components/Landing";
import Details from './Components/Details';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;
