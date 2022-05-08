import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

// BsFacebook
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer-content pt-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-12 mb-3">
            <h2>RediOn Electronics</h2>
            <p>Address: Level-9, Rupayon center, Banglamotor, Dhaka</p>
            <p>Official: redionelectronics@gmail.com</p>
            <p>Helpline: 01232323232, 01243434344</p>
            <p>(Available: Sun-Thu, 10:00 AM to 8:00 PM)</p>
          </div>
          <div className="col-lg-3 col-12">
            <h2>Resources</h2>
            <p>Support</p>
            <p>Contact</p>
            <p>Privacy & Term</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          target="blank"
          href="https://www.facebook.com/"
          className="me-1 fs-4"
        >
          <BsFacebook></BsFacebook>
        </a>
        <a target="blank" href="https://www.youtube.com/" className="me-1 fs-4">
          <AiFillYoutube></AiFillYoutube>
        </a>
        <a target="blank" href="https://twitter.com/" className="me-1 fs-4">
          <AiFillTwitterCircle></AiFillTwitterCircle>
        </a>
        <a target="blank" href="https://www.linkedin.com/"s className="me-1 fs-4">
          <AiFillLinkedin></AiFillLinkedin>
        </a>
      </div>
      <p className="text-center mt-3">
        All rights reserved by &copy; Redion Electronics {year}
      </p>
    </div>
  );
};

export default Footer;
