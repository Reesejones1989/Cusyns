import React from "react";
import "../pages/PageStyles.css"

export default function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Cusyns</p>
      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100063838551286" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:CUSYNS@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://linktr.ee/ChrisBouldin">
          <i className="fa-solid fa-link"></i>
        </a>
      </div>
    </footer>
  );
}
