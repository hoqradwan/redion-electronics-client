import React from "react";
import useProducts from "../../hooks/useProducts";
import Product from "../Home/Product/Product";

const Inventory = () => {
  const [products] = useProducts();

  return (
    <div className="container">
        <h1>All Products</h1>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
