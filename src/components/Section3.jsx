import React from "react";
const Section3 = () => {
  return (
    <section className="third">
      <div className="project">
        <div className="title" data-aos="fade">
          <h1>PROJECT</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, vitae.
          </p>
        </div>

        <div className="grid">
          <div className="p1" data-aos="fade-right">
            <h2>Bookshelf</h2>
            <p>
              Using vanilla javascript. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Aspernatur vitae eos ipsam.
            </p>
            <a href="https://faishal24.github.io/mini_project/bookshelf.html">
              Page
            </a>
          </div>
          <div className="p2" data-aos="fade-left">
            <h2>Notes</h2>
            <p>
              Using native react. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Amet, omnis!
            </p>
            <a href="https://24-notes-react.vercel.app/">Page</a>
          </div>
          <div className="p3" data-aos="fade-right">
            <h2>Calculator</h2>
            <p>
              Using vanilla javascript and math library. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Ratione, iure cum enim minus
              exercitationem provident!
            </p>
            <a href="https://faishal24.github.io/mini_project/calculator.html">
              Page
            </a>
          </div>
          <div className="p4" data-aos="fade-left">
            <h2>QR Code Generator</h2>
            <p>
              Using vanilla javascript and some other library. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nemo, commodi doloremque
              quae veritatis iure inventore iusto optio ab.
            </p>
            <a href="https://faishal24.github.io/mini_project/qr.html">Page</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
