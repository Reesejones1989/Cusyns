import React, { useEffect } from "react";
import "./PageStyles.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer"

export default function Contact() {
  useEffect(() => {
    // Automatically set today's date
    const today = new Date().toISOString().split("T")[0];
    const dateInput = document.getElementById("date");
    if (dateInput) dateInput.value = today;
  }, []);

  return (
    <div className="page contact">
      <Nav />
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Use the form below or reach out directly.</p>
      <form
        className="contact-form"
        action="https://formspree.io/f/xldbgdwb"
        method="POST"
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="service">Select a Service:</label>
        <select id="service" name="service" required>
          <option value="">-- Please choose an option --</option>
          <option value="Basic TV/Monitor Mounting - $79.99">
            Basic TV/Monitor Mounting - $79.99
          </option>
          <option value="Premium Mounting with Wire Concealment - $129.99">
            Premium Mounting with Wire Concealment - $129.99
          </option>
          <option value="Custom Installations">Custom Installations - Contact Us</option>
          <option value="Other">Other - Contact us for quote</option>
        </select>

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Please input your order or question here. If requesting a service, place address here"
        ></textarea>

        <label htmlFor="date">Date of Service:</label>
        <input type="date" id="date" name="date" required />

        <button type="submit">Send</button>
      </form>

   <Footer />
    </div>
  );
}
