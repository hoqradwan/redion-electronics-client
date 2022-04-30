import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Product/Product";
import "./Products.css"

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });
  const slicedProducts = products.slice(0, 6);
  return (
    <div id="products" className="container">
      <h2 style={{ color: "#6768AB" }} className="text-center mt-5">
        Products Inventory
      </h2>
      <div className="row mb-3">
        {slicedProducts.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="text-center">
        <button className="px-5 py-1 mt-3 all-btn" onClick={() => navigate("/inventory")}>
          See all products
        </button>
      </div>
    </div>
  );
};

export default Products;
