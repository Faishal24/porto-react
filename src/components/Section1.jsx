import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section1 = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className="first">
      <div className="myself">
        <div className="myself-kiri" data-aos="fade-right">
          <h1>I'm Hakim.</h1>
          <p>Always Learn Something New.</p>
          <a className="btn-connect" href="#connect">
            Let's Connect
          </a>
        </div>
        <div className="myself-kanan" data-aos="zoom-in">
          <img src="/public/assets/img/photo.png" alt="avatar" />
        </div>
      </div>
      <div className="bottom">
        <div className="about" data-aos="fade">
          <h4>About</h4>
          <p>
            I'm a web developer who enjoys learning new things and has a special
            fondness for Linux. I love exploring and creating websites while
            also embracing the world of open-source software through Linux. Join
            me on my journey as I continue to grow and build in the web
            development field.
          </p>
        </div>
        <div className="link">
          <ul>
            <li>
              <i className="fa-solid fa-arrow-right panah"></i>
              <a href="mailto:ishal.2401@gmail.com"> EMAIL</a>
            </li>
            <li>
              <i className="fa-solid fa-arrow-right panah"></i>
              <a
                href="https://www.linkedin.com/in/faishal-hakim-62b849257"
                target="_blank"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <i className="fa-solid fa-arrow-right panah"></i>
              <a href="https://medium.com/@Faishal24" target="_blank">
                MEDIUM
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section1;
