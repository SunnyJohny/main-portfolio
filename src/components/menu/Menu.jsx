import "./menu.scss";
import { useState } from "react";
import {  NavLink } from "react-router-dom";
import { Divide as Hamburger } from 'hamburger-react'


export default function Menu({ menuOpen, setMenuOpen, isOpen, setOpen }) {
 setOpen = setOpen('true');
 console.log(isOpen);

  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          
          <NavLink to="/" activeClassName="active">
          Home
                </NavLink>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
        <NavLink to="/resume" activeClassName="active">
          Resume
                </NavLink>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
        <NavLink to="/services" activeClassName="active">
         Services
         </NavLink>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
        <NavLink to="/skills" activeClassName="active">
         Skills
        </NavLink>
        </li>
        <li>
        <NavLink to="/projects" activeClassName="active">
         Projects
        </NavLink>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
        <NavLink to="/contact" activeClassName="active">
          Contact
                </NavLink>
        </li>

      
       
      </ul>
    </div>
  );
}
