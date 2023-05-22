import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Cards from './components/Cards';
import Enzymespage from './components/Enzymespage';
import Home from "./Pages/Home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
// import 'ngl/css/ngl.css';
// import 'ngl/css/theme/light.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="my-project/Enzymespage" element={<Enzymespage />} />
            
          </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
