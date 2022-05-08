import React from "react";
import { useForm } from "react-hook-form";
import './AddItems.css';

const AddItems = () => {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    const url1 = `https://safe-lake-62248.herokuapp.com/products`;
    fetch(url1, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if(data.insertedId){
          alert('Item inserted')
        }
        console.log(result);
      });
    const url2 = `https://safe-lake-62248.herokuapp.com/items`;
    fetch(url2 ,{
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          alert('Item inserted')
        }
        console.log(data);
      });
  };
  return (
    <div className="w-50 mx-auto mt-5">
      <h2 style={{color: '#f9ad81'}}>Add a product</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2 form-control"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2 form-control"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2 form-control"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2 form-control"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2 form-control"
          placeholder="Supplier"
          type="text"
          {...register("supplier")}
        />
        <input
          className="mb-2 form-control"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input className="addProduct py-2" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddItems;
