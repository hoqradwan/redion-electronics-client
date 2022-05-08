import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const MyItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = `https://safe-lake-62248.herokuapp.com/items`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [items]);

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
                  <button
                    className="delete"
                    onClick={() => handleDelete([item._id])}
                  >
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
