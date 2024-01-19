import { useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import Info from "./components/Info";
import { useRef } from "react";

import "./App.css";

function App() {
  const reportRef = useRef(null);
  const report = () => {
    reportRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="overflow-hidden">
      <div className="sticky z-50">
        <Nav report={report} />
      </div>
      <Hero ref={reportRef} />
      <Info />

      <Cta />
      <Promo />
      <Footer />
    </div>
  );
}
export default App;
