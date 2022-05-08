import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./product.css";

const Product = ({ product }) => {
  const { _id, name, image, description, price, quantity, supplier } = product;
  const { productId } = useParams();
  const navigate = useNavigate();

  const navigateToProductDetail = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="product d-flex align-items-center my-2 ps-5">
      <div className="col-lg-4 col-12">
        <img
        width={200}
        height={200}
          src={image}
          className="img-fluid"
          alt="..."
        />
      </div>
      <div className="col-lg-8 col-12">
        <h5 className="lh-sm">{name}</h5>
        <p className="lh-sm">{description}</p>
        <p className="fw-bold fs-4 mb-4 price">${price}</p>
        <p className="lh-1">Quantity: {quantity}</p>
        <p className="lh-1 text-muted fs-6">{supplier}</p>

        <button onClick={() => navigateToProductDetail(_id)} className="update">
          Manage
        </button>
      </div>
    </div>
  );
};

export default Product;
