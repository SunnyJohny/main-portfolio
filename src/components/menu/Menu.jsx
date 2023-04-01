import "./menu.scss";

import { NavLink } from "react-router-dom";
export default function Menu({ menuOpen, setMenuOpen, isOpen, setOpen }) {
  setOpen = setOpen(true);

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/resume" activeclassname="active">
            Resume
          </NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/services" activeclassname="active">
            Services
          </NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/skills" activeclassname="active">
            Skills
          </NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/projects" activeclassname="active">
            Projects
          </NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
