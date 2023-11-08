import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact-container container grid">
        <div className="contact-data">
          <h3 className="contact-title">Don't be Shy !</h3>

          <p className="contact-description">
            feel free to get in tuch with me. I am always open to discussing new
            projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <FaEnvelopeOpen className="info-icon" />
              <div>
                <span className="info-title">Maill Me</span>
                <h4 className="info-desc">mithonphilip@gmail.com</h4>
              </div>
            </div>

            <div className="info-item">
              <FaPhoneSquareAlt className="info-icon" />
              <div>
                <span className="info-title">Call Me</span>
                <h4 className="info-desc">+8801 818 085 003</h4>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://facebook.com/mithon2003/"
              target="_blank"
              className="contact-social-link"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="contact-social-link"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="contact-social-link"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://dribble.com"
              target="_blank"
              className="contact-social-link"
            >
              <FaDribbble />
            </a>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-input-group">
            <div className="form-input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control"
              />
            </div>
            <div className="form-input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control"
              />
            </div>
            <div className="form-input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-input-div">
            <textarea placeholder="Your Message" className="form-control textarea"></textarea>
          </div>

          <button className="btn">
            Send Message
            <span className="btn-icon contact-btn-icon">
              <FiSend/>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
