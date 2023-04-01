import "./topbar.scss";

import { Divide as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";

export default function Topbar({ menuOpen, setMenuOpen, isOpen, setOpen }) {
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
              <NavLink to="/" activeclassname="active">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/resume" activeclassname="active">
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" activeclassname="active">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" activeclassname="active">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeclassname="active">
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" activeclassname="active">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <Hamburger toggled={!isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}
