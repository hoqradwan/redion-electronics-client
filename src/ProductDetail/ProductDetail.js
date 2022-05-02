import React from "react";
import { Link, useParams } from "react-router-dom";
import useProductDetail from "../hooks/useProductDetail";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product] = useProductDetail(productId);
  const { _id, name, image, description, price, quantity, supplier } = product;

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <img src={image} alt="" />

      <div>
        <h4>{name}</h4>
        <h5>Product id: {_id}</h5>
        <p>{description}</p>
        <p>$ {price}</p>
        <p>Quantity: {quantity}</p>
        <p className="text-muted">{supplier}</p>
        <button className="btn btn-success">Deliver</button>
      </div>
    </div>
  );
};

export default ProductDetail;
