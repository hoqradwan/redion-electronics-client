import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import Product from "../Product/Product";
import "./Products.css"

const Products = () => {
  const [products] = useProducts();
  const navigate = useNavigate();

  const slicedProducts = products.slice(0, 6);
  return (
    <div id="products" className="container">
      <h2 style={{ color: "#6768AB" }} className="fw-bold text-center mt-5 mb-4">
        Products Inventory
      </h2>
      <div className="row mb-3">
        {slicedProducts.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div className="">
        <button className="btn btn-link text-decoration-none" onClick={() => navigate("/manage")}>
         Manage Inventories
        </button>
      </div>
    </div>
  );
};

export default Products;
