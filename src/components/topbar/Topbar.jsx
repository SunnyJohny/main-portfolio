import "./topbar.scss";
// import { Menu } from "@material-ui/icons";
import { Divide as Hamburger } from 'hamburger-react'
import {  NavLink } from "react-router-dom";


export default function Topbar({ menuOpen, setMenuOpen ,isOpen,setOpen}) {
  console.log(isOpen);
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            john.
          </a>
          
          
        </div>
        <div className="right">
        <ul className="links">
             
              <li>
                <NavLink to="/" activeClassName="active" >
                  Home
                </NavLink>
              </li>
             
              <li>
                <NavLink to="/resume" activeClassName="active">
                Resume
                </NavLink>
              </li>
               <li>
                <NavLink to="/services" activeClassName="active">
                 Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills" activeClassName="active">
                Skills
                </NavLink>
              </li>
              <li>
                <NavLink  to="/projects" activeClassName="active">
                 Projects
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            {/* <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span> */}
            <Hamburger toggled={!isOpen} toggle={setOpen}
         
            />

          </div>
         
        </div>
      </div>
    </div>
  );
}