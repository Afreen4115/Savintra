import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import HeroSection from "./components/herosection/HeroSection";
import NewArrivals from "./components/sections/NewArrivals";
import content from "./data/content.json"
import Categories from "./components/sections/categories/Categories";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <NewArrivals/>
      <Categories/>
      <Footer content={content?.footer}/>
    </div>
  );
}

export default App;
