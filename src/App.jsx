import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

import Intro from "./components/intro/Intro";

import Topbar from "./components/topbar/Topbar";
import Projects from "./components/project/Projects";

import Resume from "./pages/Resume/Resume";
import Services from "./pages/services/Services";
import ProjectDisplay from "./pages/projectDisplay/ProjectDisplay";

import Skills from "./pages/Skills/Skills";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isOpen, setOpen] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Router>
        <ToastContainer />

        <Topbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          isOpen={isOpen}
          setOpen={isOpen}
        />
        <Menu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          isOpen={isOpen}
          setOpen={setOpen}
        />

        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />

          <Route path="/shop/:id" element={<Works />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
