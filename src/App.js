import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import  { Routes, Route } from "react-router";

import Landing from "./Components/Landing";
import Details from './Components/Details';
import About from './Components/About';
import Sidebar from './Components/Sidebar';
import Home from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
