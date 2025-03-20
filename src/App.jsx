import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/hero.css";
import "./style/sidebar.css";
import "./style/responsive.css";
import Sidebar from "./components/sidebar";
import Hero from "./components/hero";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact";
import "../src/App";

function App() {
  return (
    <Router>
        <Sidebar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
