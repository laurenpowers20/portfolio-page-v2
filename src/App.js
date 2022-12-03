import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Project from "./Screens/Project";
import Contact from "./Screens/Contact";
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
      </Routes>
    </>
  );
}

export default App;
