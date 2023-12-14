import React, { useState } from "react";

// Components import
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Growth from "./components/Growth/Growth";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
  const [hamActive, setHamActive] = useState(false);
  return (
    <div className="App">
      <Navbar hamActive={hamActive} setHamActive={setHamActive} />
      <NavbarResponsive hamActive={hamActive} />
      <Hero />
      <Features />
      <ContactForm />
      <Growth />
      <Questions />
      <Footer />
    </div>
  );
};

export default App;
