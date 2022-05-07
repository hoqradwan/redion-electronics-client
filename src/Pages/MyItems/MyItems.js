import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useProducts from "../../hooks/useProducts";
// import useProducts from '../../hooks/useProducts';

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useProducts();
  const [items, setItems] = useState([]);
  useEffect(() => {
    //  const email = user.email;
    const url = `https://safe-lake-62248.herokuapp.com/items`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url1 = `https://safe-lake-62248.herokuapp.com/items/${id}`;
      fetch(url1, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });

      const url2 = `https://safe-lake-62248.herokuapp.com/products/${id}`;
      fetch(url2, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Supplier</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item._id}>
                <td>*</td>
                <td>{item.name}</td>
                <td>{item.supplier}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td className="text-center">
                  <button className="delete" onClick={() => handleDelete([item._id])}>
                    {" "}
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default MyItems;
