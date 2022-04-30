import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ product }) => {
  const { name, image, description, price, quantity, supplier } = product;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="product card mt-2">
        <img
          height={150}
          width={50}
          src={image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
           {description}
          </p>
          <p>{price}</p>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <button className="update">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
