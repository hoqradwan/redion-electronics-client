import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProductDetail from "../hooks/useProductDetail";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product] = useProductDetail(productId);
  const { _id, name, image, description, price, quantity, supplier } = product;
  const [user, setUser] = useState({});
/*   useEffect(() => {
    const url = `http://localhost:5000/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [productId]); */
  const handleFrom = (event) => {
    event.preventDefault();
    let updatedQuantity = event.target.name.value;
    updatedQuantity = updatedQuantity + quantity;
    const updatedProduct = { updatedQuantity };
    /*   const count = (quantity - 1).toString();
    const updatedProduct = { count }; */
    const url = `http://localhost:5000/products/${productId}`;
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
        setUser(parseInt(data.updatedQuantity));
      });
  };
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <img width={300} height={300} className="me-5" src={image} alt="" />

      <div>
        <h4>{name}</h4>
        <h5>Product id: {_id}</h5>
        <p>{description}</p>
        <p>$ {price}</p>
        <p>Quantity: {user.updatedQuantity}</p>
        <p className="text-muted">{supplier}</p>
        <form onSubmit={handleFrom}>
          <input className="form-control w-25" name="name" type="number" />
          <input type="submit" value="Restock products" />
        </form>

        {/* <button className="btn btn-info my-2 me-2">Restock products</button> */}
        <button className="btn btn-success">Deliver</button>
      </div>
    </div>
  );
};

export default ProductDetail;
// onClick={()=> handleQuantity()}
