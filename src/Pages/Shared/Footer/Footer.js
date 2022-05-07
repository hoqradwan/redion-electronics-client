import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer-content pt-2 ">
      <div className=" d-flex justify-content-around align-items-center mt-5">
        <div className="me-5">
          <h2>RediOn Electronics</h2>
          <p>Address: Level-9, Rupayon center, Banglamotor, Dhaka</p>
          <p>Official: redionelectronics@gmail.com</p>
          <p>Helpline: 01232323232, 01243434344</p>
          <p>(Available: Sun-Thu, 10:00 AM to 8:00 PM)</p>
        </div>
        <div>
          <h2>Resources</h2>
          <p>Support</p>
          <p>Contact</p>
          <p>Privacy & Term</p>
        </div>
      </div>
      <div>
        {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <i class="fa fa-facebook"></i>
      </div>
      <p className="text-center">
        All rights reserved by &copy; Redion Electronics {year}
      </p>
    </div>
  );
};

export default Footer;
