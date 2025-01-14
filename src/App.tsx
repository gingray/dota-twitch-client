import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Root} from "./components/Root";
import {About} from "./components/About";
import {Matches} from "./components/Matches";
import { useLocation } from "react-router-dom";
import {MMRTable} from "./components/MMRTable";
function App() {
    const location = useLocation()
    useEffect(() => {
        // @ts-ignore
        window.gtag("event", "page_view", {
            page_path: location.pathname + location.search + location.hash,
            page_search: location.search,
            page_hash: location.hash,
        });
    }, [location]);

  return (
      <Routes>
          <Route path="/" element={ <Root/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/matches" element={ <Matches/> } />
          <Route path="/mmrs" element={ <MMRTable/> } />
      </Routes>
  );
}

export default App;
