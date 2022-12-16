import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Project from "./Screens/Project";
import Contact from "./Screens/Contact";
import CountriesProject from "./Screens/Projects/CountriesProject";
import TriviaProject from "./Screens/Projects/TriviaProject";
import SimpsonsReact from "./Screens/Projects/SimpsonsReact";
import BSideMusic from "./Screens/Projects/BSideMusic";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/countriesAPI" element={<CountriesProject />} />
        <Route path="/gameoftrivia" element={<TriviaProject />} />
        <Route path="/simpsonsquotes" element={<SimpsonsReact />} />
        <Route path="/bside" element={<BSideMusic />} />
      </Routes>
    </>
  );
}

export default App;
