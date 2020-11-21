import React from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Academics from './Components/Academics';
import Fee from './Components/Fee'
import { Routes,Route} from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/academics" element={<Academics />}   />
      <Route path="/fee" element={<Fee />} />
    </Routes>
    </div>
  );
}

export default App;
