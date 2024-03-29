import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Project from "./Screens/Project";
import Contact from "./Screens/Contact";
import CountriesProject from "./Screens/Projects/CountriesProject";
import FoodAtHome from "./Screens/Projects/FoodAtHome";
import ReactPortfolio from "./Screens/Projects/ReactPortfolio";
import Shill from "./Screens/Projects/Shill";
import TriviaProject from "./Screens/Projects/TriviaProject";
import SimpsonsReact from "./Screens/Projects/SimpsonsReact";
import BSideMusic from "./Screens/Projects/BSideMusic";
import { Routes, Route } from "react-router-dom";
import Hamburger from "./Components/Hamburger";

function App() {
  return (
    <>
      <div className="nav-bar-div">
        <Nav />
      </div>
      <div className="hamburger-menu-div">
        <Hamburger />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/countriesAPI" element={<CountriesProject />} />
        <Route path="/gameoftrivia" element={<TriviaProject />} />
        <Route path="/simpsonsquotes" element={<SimpsonsReact />} />
        <Route path="/foodathome" element={<FoodAtHome />} />
        <Route path="/shill-social" element={<Shill />} />
        <Route path="/bside" element={<BSideMusic />} />
        <Route path="/reactportfolio" element={<ReactPortfolio />} />
      </Routes>
    </>
  );
}

export default App;
