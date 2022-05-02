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
          <p className="card-text">{description}</p>
          <p>{price}</p>
          <p>{quantity}</p>
          <p>{supplier}</p>

          {/* <Link to={`/products/${productId}`}> */}
          
          <button onClick={()=>navigateToProductDetail(_id)} className="update">Manage</button>
          {/* </Link> */}
                     

        </div>
      </div>
    </div>
  );
};

export default Product;
