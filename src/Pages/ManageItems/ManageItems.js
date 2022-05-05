import React from "react";
import { Table } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";

const ManageItems = () => {
  const [products, setProducts] = useProducts();
  const handleDelete = (id) =>{
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const remaining = products.filter(product => product._id !== id)
        setProducts(remaining)

    })

  }
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
        {products.map((product) => {
          return (
            <tr key={product._id}>
              <td>*</td>
              <td>{product.name}</td>
              <td>{product.supplier}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td><button onClick={()=>handleDelete(product._id)}>X</button></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ManageItems;
