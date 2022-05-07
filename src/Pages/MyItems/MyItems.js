import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useProducts from '../../hooks/useProducts';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
     const email = user.email;
     const url = `https://safe-lake-62248.herokuapp.com/items?email=${email}`
     fetch(url)
     .then(res => res.json())
     .then(data => setItems(data))
    },[user])
    const handleDelete = (id) => {
        const url = `https://safe-lake-62248.herokuapp.com/items/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
          });
      };
      const navigateToProductDetail = (id) => {
        navigate(`/products/${id}`);
      };
    return (
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
                <td>
                  <button onClick={() => handleDelete(item._id)}>X</button>
                </td>
                <td>
                  <button
                    className="text-white px-2 py-1"
                    style={{ border: "none", backgroundColor: "orange" }}
                    onClick={() => navigateToProductDetail(item._id)}
                  >
                    Manage
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
};

export default MyItems;