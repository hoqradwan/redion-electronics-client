import React from "react";
import { useNavigate } from "react-router-dom";
import "./product.css";

const Product = ({ product }) => {
  const { _id, name, image, description, price, quantity, supplier } = product;
  const navigate = useNavigate();

  const navigateToProductDetail = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="container product p-3 mt-3">
      <div className="row">
        <div className="col-lg-5 mb-2 text-center">
          <img
            width={200}
            height={200}
            src={image}
            className="img-fluid"
            alt="..."
          />
        </div>
        <div className="col-lg-7">
          <h5 className="lh-sm">{name}</h5>
          <p className="lh-sm">{description}</p>
          <p className="fw-bold fs-4 mb-4 price">${price}</p>
          <p className="lh-1">Quantity: {quantity}</p>
          <p className="lh-1 text-muted fs-6">{supplier}</p>

          <button
            onClick={() => navigateToProductDetail(_id)}
            className="update"
          >
            Manage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
