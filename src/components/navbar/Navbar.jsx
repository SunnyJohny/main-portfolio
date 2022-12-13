import React, { useEffect, useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.scss";
// import "./portfolioList.scss";
import MenuIcon  from "@material-ui/icons/Menu";


// const activeLink = ({ isActive }) => (isActive ? activeClassName="active"  : "");

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
        </button>
      </div>
      <div className="logo"><span>John.</span></div>
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
                <NavLink  to="/portfolio" activeClassName="active">
                 Project
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="menu">
           <MenuIcon /> 
           </div>


    </div>
  );
}

export default Navbar;
