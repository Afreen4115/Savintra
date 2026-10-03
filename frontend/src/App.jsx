import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import HeroSection from "./components/herosection/HeroSection";
import NewArrivals from "./components/sections/NewArrivals";
import content from "./data/content.json"
import Category from "./components/sections/categories/Category";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <NewArrivals/>
      <Category title={content?.categories[0]?.title} data={content?.categories[0]?.data} />
    </div>
  );
}

export default App;
