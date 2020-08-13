import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styling/navbar.scss";
import "../Styling/namesModal.scss";
import { Modal } from "react-responsive-modal";
import Legends from "./Legends";

export default function Navbar() {
  const [modal, openModal] = useState(false);

  return (
    <div className="navBar">
      <img src="https://i.imgur.com/ndX65Iz.png" alt="logo" width="200" />
      <nav className="links">
        <NavLink to="#">ABOUT HORACE</NavLink>
        <NavLink to="#">TIMELINE</NavLink>
        <NavLink to="#" onClick={() => openModal(true)}>
          LEGENDARY NAMES
        </NavLink>
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
      <Modal
        open={modal}
        onClose={() => openModal(false)}
        blockScroll={false}
        center
      >
        <Legends />
      </Modal>
    </div>
  );
}
