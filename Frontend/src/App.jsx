import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navegation from './components/Navegation';

function App() {
  

  return (
    <>
      <Router>
        <Navegation/>
      </Router>
    </>
  );
}

export default App
