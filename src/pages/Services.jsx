import React from 'react';
import "./PageStyles.css";
import Nav from "../components/Nav"
import Footer from "../components/Footer"


export default function Services() {
  return (
    <div className="page services">
        <Nav />
      <h1>Our Services</h1>
      <ul className="service-list">
        <li>
          <h3>TV Mounting</h3>
          <p>Clean, secure installation for flat-screen TVs of all sizes.</p>
        </li>
        <li>
          <h3>Network Setup</h3>
          <p>WiFi, routers, mesh networks & full home/business network solutions.</p>
        </li>
        <li>
          <h3>Smart Home Integration</h3>
          <p>Connect your devices — lights, locks, thermostats — with ease.</p>
        </li>
        <li>
          <h3>IT Troubleshooting</h3>
          <p>Home & small business support for desktops, laptops, and printers.</p>
        </li>
      </ul>

         <Footer />
      
    </div>
  );
}
