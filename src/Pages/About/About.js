import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <img
        className="col-lg-7 pe-5  mb-3 img-fluid"
          src="https://media.istockphoto.com/photos/about-us-picture-id1163589059?b=1&k=20&m=1163589059&s=170667a&w=0&h=9PtSKBe0XBfA4H5AumondWY9iJ325RdvEcDZOS2n_eg="
          alt=""
        />
        <div className="col-lg-5">
          <h2 className="fw-bold">Integrity and Sustainability</h2>
          <p>
            We are providing the electronic products storing service for ten
            years. We have handled many clients for keeping and managing
            products. They became very happy with our quality service. There is
            no record of missing or damaging any product in our electronics
            warehouse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
