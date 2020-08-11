import React from "react";
import { NavLink } from "react-router-dom";
import "../Styling/navbar.scss";

export default function Navbar() {
  return (
    <div className="navBar">
      <img src="https://i.imgur.com/BAWhF2O.png" alt="logo" width="200" />
      <nav className="links">
        <NavLink to="#">ABOUT HORACE</NavLink>
        <NavLink to="#">TIMELINE</NavLink>
        <NavLink to="#">LEGENDARY NAMES</NavLink>
        <NavLink to="#">DOCUMENTS & CONTENT</NavLink>
      </nav>
    </div>
  );
}
