import { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Promo from "./components/Promo";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="sticky z-50">
        <Nav />
      </div>
      <Hero />

      <Cta />
      <Promo />
      <Footer />
    </>
  );
}

export default App;
