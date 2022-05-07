import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";
import useProducts from "../../hooks/useProducts";

const ManageItems = () => {
  const [products, setProducts] = useProducts();
  const navigate = useNavigate();
  /*  const [product] = useProductDetail();
  const {_id} = product;
 */
  // const {productId} = useParams();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `https://safe-lake-62248.herokuapp.com/products/${id}`;
      fetch(url, {
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

  const navigateToProductDetail = (id) => {
    navigate(`/products/${id}`);
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
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td>*</td>
                <td>{product.name}</td>
                <td>{product.supplier}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => handleDelete(product._id)}>X</button>
                </td>
                <td>
                  <button
                    className="text-white px-2 py-1"
                    style={{ border: "none", backgroundColor: "orange" }}
                    onClick={() => navigateToProductDetail(product._id)}
                  >
                    Manage
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="text-center my-2">
        <button
          className="text-white  px-2 py-1"
          style={{ border: "none", backgroundColor: "#7CA7E4" }}
          onClick={() => navigate("/add")}
        >
          Add new item
        </button>
      </div>
    </>
  );
};

export default ManageItems;
