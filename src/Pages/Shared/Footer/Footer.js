import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer-content bg-dark pt-2 ">
      <div className=" d-flex justify-content-around align-items-center mt-5">
        <div className="">
          <h2 className="contact">Contact Me</h2>
          <p className="text-white">
            Contact me if you have any query related to my service.{" "}
          </p>
        </div>
        <div className="text-white">
          <h2>Resources</h2>
          <p>Support</p>
          <p>Contact</p>
          <p>Privacy & Term</p>
        </div>
      </div>
      <p className="text-center text-white">@Copyright {year}</p>
    </div>
  );
};

export default Footer;
