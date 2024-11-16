import React from "react";
import { Header } from "./components/Header";
import './index.css';
import { Hero } from "./components/Hero";
import { Analytics } from "./components/Analytics";
import { Newsletter } from "./components/Newsletter";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
