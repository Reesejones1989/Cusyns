import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/PageStyles.css"

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
