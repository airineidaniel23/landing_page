import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import Heatmap from './components/Heatmap/Heatmap'; // Import your new component


// Components import
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Growth from "./components/Growth/Growth";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar hamActive={hamActive} setHamActive={setHamActive} />
        <NavbarResponsive hamActive={hamActive} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/ndvi" element={<Heatmap/>} />
        </Routes>
        <Features />
        <Growth />
        <Questions />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
