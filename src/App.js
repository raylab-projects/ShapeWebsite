import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Cards from './components/Cards';
import Enzymespage from './components/Enzymespage';
import Home from "./Pages/Home";
import Membranepage from "./components/Membranepage";
import Transporterpage from "./components/Transporterpage";
import Miscpage from "./components/Miscpage";
import Viralpage from "./components/Viralpage";
import Bindingpage from "./components/Bindingpage";
import Signalpage from "./components/Signalpage";
import Toxinpage from "./components/Toxinpage";
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
            <Route path="my-project/Membranepage" element={<Membranepage />} />
            <Route path="my-project/Transporterpage" element={<Transporterpage />} />
            <Route path="my-project/Miscpage" element={<Miscpage />} />
            <Route path="my-project/Viralpage" element={<Viralpage />} />
            <Route path="my-project/Bindingpage" element={<Bindingpage />} />
            <Route path="my-project/Signalpage" element={<Signalpage />} />
            <Route path="my-project/Toxinpage" element={<Toxinpage />} />
            
          </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
