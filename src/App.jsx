// import Topbar from "./components/topbar/Topbar";
import { useEffect } from "react";
import Portfolio from "./components/project/Projects"
import Works from "./components/works/Works"
// import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
// import {Home }from "./components/home/Home"
// import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro"
// import Skills from "./pages/Skills/Skills";
 import Topbar from "./components/topbar/Topbar";
import Projects from "./components/project/Projects";

import { Divide as Hamburger } from 'hamburger-react'
import Resume from "./pages/Resume/Resume";
import Services from "./pages/services/Services";
import ProjectDisplay from "./pages/projectDisplay/ProjectDisplay";
import { featuredPortfolio } from "./data";
import Skills from "./pages/Skills/Skills";
import Footer from "./components/footer/Footer";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





{/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}

function App() {
 
  
const [isOpen, setOpen] = useState(true)
console.log(isOpen)

  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     

     <Router>
     <ToastContainer /> 
{/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}

     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}
     isOpen={isOpen} setOpen={isOpen}
     />
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}
     isOpen={isOpen} setOpen={setOpen}
     
     />

      <Routes>
        <Route path='/' element={<Intro/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path="/projects/:id" element={<ProjectDisplay  />} />

        <Route path='/shop/:id' element={<Works/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/skills' element={<Skills/>} />


        <Route path='/contact' element={<Contact/>} />

      </Routes>
      <Footer />
    </Router>
    </div>
    
  );
}

export default App;
