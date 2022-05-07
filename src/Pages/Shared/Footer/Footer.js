import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer-content pt-5 mt-5">
      <div className="container">
        <div className="row">
        <div className="col-9">
          <h2>RediOn Electronics</h2>
          <p>Address: Level-9, Rupayon center, Banglamotor, Dhaka</p>
          <p>Official: redionelectronics@gmail.com</p>
          <p>Helpline: 01232323232, 01243434344</p>
          <p>(Available: Sun-Thu, 10:00 AM to 8:00 PM)</p>
        </div>
        <div className="col-3">
          <h2>Resources</h2>
          <p>Support</p>
          <p>Contact</p>
          <p>Privacy & Term</p>
        </div>
        </div>

      </div>
      <div>
        {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <i class="fa fa-facebook"></i>
      </div>
      <p className="text-center mt-3">
        All rights reserved by &copy; Redion Electronics {year}
      </p>
    </div>
  );
};

export default Footer;
