import React from "react";
const Section4 = () => {
  return (
    <section className="fourth" id="connect">
      <div className="form" data-aos="fade">
        <h1>LET'S CONNECT</h1>
        <p>
          If you'd like to get in touch with me, you can reach me out using
          email.
        </p>
        <form
          method="post"
          action="mailto:duatensan@gmail.com"
          encType="text/plain"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            aria-autocomplete="list"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email@Example.com"
            aria-autocomplete="list"
            required
          />
          <input
            type="text"
            name="message"
            placeholder="Your Message"
            aria-autocomplete="list"
          />
          <input type="submit" value="Send Now" />
        </form>
      </div>

      <div className="image">
        <img className="mail" src="/src/assets/img/mail.png" alt="mail" />
      </div>
    </section>
  );
};
export default Section4;
