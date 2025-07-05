import React, { useEffect } from "react";
import "./PageStyles.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer"


export default function Testimonials() {
  useEffect(() => {
    // Load Facebook SDK once after component mounts
    if (!window.FB) {
      const script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse(); // Re-render plugin if FB already exists
    }
  }, []);

  return (
    <div className="page testimonials">
      <Nav />

      <h1>What Our Clients Say</h1>

      <div className="testimonial">
        <blockquote>
          "Cusyns mounted our 75” TV in under an hour — professional and super
          clean!"
        </blockquote>
        <cite>- Amanda R.</cite>
      </div>

      <div className="testimonial">
        <blockquote>
          "My WiFi finally works in every room thanks to their mesh setup.
          Highly recommend."
        </blockquote>
        <cite>- James K.</cite>
      </div>

      <div className="testimonial">
        <blockquote>
          "Super fast, no mess, and extremely polite! They even cleaned up
          afterwards."
        </blockquote>
        <cite>- Terrence W.</cite>
      </div>

      <h2>More Reviews from Facebook</h2>
      <div className="fb-page-wrapper">
        <div
          className="fb-page"
          data-href="https://www.facebook.com/profile.php?id=100063838551286"
          data-tabs="timeline"
          data-width="360"
          data-height="550"
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        ></div>
      </div>

   <Footer />
    </div>
  );
}
