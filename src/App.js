import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/index';
import { BrowserRouter as Router } from 'react-router-dom';
import  { Routes, Route } from "react-router";

import Landing from "./Components/Landing";
import Details from "./pages/PagesDetails"
import About from "./pages/PagesAboutUs"
import Sidebar from './Components/Sidebar';
import Home from './pages';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/details" element={<Details />} />
				      <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
