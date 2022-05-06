import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProductDetail from "../hooks/useProductDetail";
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product] = useProductDetail(productId);
  let { _id, name, image, description, price, quantity, supplier } = product;
  // console.log(typeof quantity);
  const [q, setQ] = useState(0);

  // console.log(quantity);

  const handleForm = (event) => {
    event.preventDefault();
    let updatedQuantity = parseInt(event.target.name.value);
    quantity = quantity + updatedQuantity;
    const updatedProduct = { quantity };

    const url = `https://safe-lake-62248.herokuapp.com/products/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setQ(parseInt(updatedProduct.quantity));
        // console.log(updatedProduct.quantity);
      });
  };
  const handleDeliver = () => {
    if (quantity > 0) {
      quantity = quantity - 1;
    }
    const updatedProduct = { quantity };
    const url = `https://safe-lake-62248.herokuapp.com/products/${productId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(updatedProduct.quantity);
        // setQ(parseInt(updatedProduct.quantity));
      });
  };
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <img width={300} height={300} className="me-5" src={image} alt="" />

      <div>
        <h4>{name}</h4>
        <h6>Product id: {_id}</h6>
        <p>{description}</p>
        <p className="price fw-bold fs-4">$ {price}</p>
        <p className="lh-1">Quantity: {q}</p>
        <p className="text-muted lh-1">{supplier}</p>
        <form onSubmit={handleForm}>
          <input className="" name="name" type="number" />
          <input className="restock my-2 mx-1 rounded" type="submit" value="Restock products" />
        </form>

        <button  onClick={() => handleDeliver()} className="deliver px-3 py-1">
          Deliver
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
// onClick={()=> handleQuantity()}
