import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isReload, setIsReload ] = useState(false);
  
  const [product, setProduct] = useState({});

    useEffect(()=>{
    const url = `https://safe-lake-62248.herokuapp.com/products/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productId, isReload])
  let { _id, name, image, description, price, quantity, supplier } = product;

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
        console.log(data);
        event.target.reset();
        setIsReload(!isReload)
      });
  };
  const handleDeliver = () => {
    const quantity = parseInt(product.quantity) -1 ;
    const updatedProduct = {quantity} ;

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
        const proceed = window.confirm("Deliver product?");
        if(proceed){
          setIsReload(!isReload)
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-5 text-center my-2">
          <img
            width={300}
            height={300}
            className=" img-fluid"
            src={image}
            alt=""
          />
        </div>

        <div className="col-lg-7 mt-4">
          <h4>{name}</h4>
          <h6>Product id: {_id}</h6>
          <p>{description}</p>
          <p className="price fw-bold fs-4">$ {price}</p>
          <p className="lh-1">Quantity: {quantity}</p>
          <p className="text-muted lh-1">{supplier}</p>
          <form onSubmit={handleForm}>
            <input className="quantity" name="name" type="number" />
            <input
              className="restock my-2 mx-1 rounded"
              type="submit"
              value="Restock products"
            />
          </form>

          <button onClick={() => handleDeliver()} className="deliver px-3 py-1">
            Deliver
          </button>
          <button
            onClick={() => navigate("/manage")}
            className="detailManage ms-2"
          >
            Manage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
