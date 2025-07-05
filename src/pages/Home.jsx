import React from 'react';
import "../pages/pageStyles.css";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Logo from "/Cusyns.png"

export default function Home() {
  return (
<div className="page home-page">
<Nav />
      <header className="hero">
        <h1>Cusyns IT & TV Mounting</h1>
        <p>Professional Installations. Reliable IT Support.</p>
      </header>

      <section className="intro">
        <h2>Why Choose Us?</h2>
        <p>
          With years of hands-on experience, Cusyns provides premium TV mounting,
          network setup, smart home integration, and more.
        </p>
      </section>
      <img src={Logo} style={{ height: "420px", width: "420px" }} alt="Cusyns Logo" />


      <Footer />
    </div>
  );
}
