import React from "react";
import { NavLink } from "react-router-dom";
import "../Styling/navbar.scss";

export default function Navbar() {
  return (
    <div className="navBar">
      <img src="https://i.imgur.com/ndX65Iz.png" alt="logo" width="200" />
      <nav className="links">
        <NavLink to="#">ABOUT HORACE</NavLink>
        <NavLink to="#">TIMELINE</NavLink>
        <NavLink to="#">LEGENDARY NAMES</NavLink>
        <NavLink
          style={{
            border: "1px solid #28352e",
            padding: "14px 13px 10px 13px",
            textAlign: "center",
          }}
          to="#"
        >
          DOCUMENTS & CONTENT
        </NavLink>
      </nav>
    </div>
  );
}
