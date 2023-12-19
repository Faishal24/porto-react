import React from "react";
import { useState } from "react";

const Navigasi = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  
  return (
    <header>
      <nav>
        <a href="#">
          <i className="fa-solid fa-arrow-right panah"></i>Resume
        </a>

        <div className="toggle-btn" onClick={handleShowNavbar}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>

      <div className={`dropdown ${showNavbar && 'open'}`}>
        <li>
          <a href="#">Resume</a>
        </li>
        <li>
          <a href="mailto:ishal.2401@gmail.com">Email</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/faishal-hakim-62b849257"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://medium.com/@Faishal24" target="_blank">
            {" "}
            Medium{" "}
          </a>
        </li>
      </div>
    </header>
  );
};

export default Navigasi;
