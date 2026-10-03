import "./App.css";
import Navbar from "./components/navigation/Navbar";
import HeroSection from "./components/herosection/HeroSection";
import NewArrivals from "./components/sections/NewArrivals";
import content from "./data/content.json"
import CategoriesList from "./components/sections/categories/CategoriesList";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <HeroSection/>
      <NewArrivals/>
      <CategoriesList/>
      <Footer content={content?.footer}/>
    </div>
  );
}

export default App;
