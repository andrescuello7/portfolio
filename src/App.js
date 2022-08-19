import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import './App.css';

//Components
import Navbar from "../src/components/Navbar/Navbar";
import Home from "../src/pages/home";

function App() {
  return (
    <div className="bg-black">
      <div className="navbarHome sticky-top">
        <Navbar/>
      </div>
      <div>
        <Home/>
      </div>
    </div>
  );
}

export default App;
