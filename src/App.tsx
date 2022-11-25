import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Root} from "./components/Root";
import {About} from "./components/About";
import {Matches} from "./components/Matches";

function App() {
  return (
      <Routes>
          <Route path="/" element={ <Root/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/matches" element={ <Matches/> } />
      </Routes>
  );
}

export default App;
