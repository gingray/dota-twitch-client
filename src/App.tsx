import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Root} from "./components/Root";
import {About} from "./components/About";
import {Matches} from "./components/Matches";
import ReactGA from 'react-ga';
const TRACKING_ID = "G-H9H3R79G40";
ReactGA.initialize(TRACKING_ID);
function App() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

  return (
      <Routes>
          <Route path="/" element={ <Root/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/matches" element={ <Matches/> } />
      </Routes>
  );
}

export default App;
