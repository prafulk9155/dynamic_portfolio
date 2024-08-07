import React, { useState } from "react";

import "./Footer.scss";
import { client } from "../../client";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wapper";
import data from '../../assets/json/profile.json';

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function domainExists(domain) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = `https://${domain}/favicon.ico`;
    });
  }

  async function isDomainValid(email) {
    const domain = email.split("@")[1];
    const exists = await domainExists(domain);
    return exists;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: "contact",
      name: e.target.username.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

   
  };

  return (
    <>
      <h3 className="head-text">
        <span>Take a</span> coffee <span>&</span> chat <span>with me</span>
      </h3>
      <p className="p-text pt-text">
        Ready to build something awesome? <span>Let's chat!</span>
      </p>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:ankitsingh40068@gmail.com" className="p-text">
            {data.email}
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a
            href="https://www.linkedin.com/in/ankitkumar68/"
            className="p-text"
            target="_blank"
          >
            Ankit Kumar
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              required
            />
          </div>
          <button type="submit" className="p-text">
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
