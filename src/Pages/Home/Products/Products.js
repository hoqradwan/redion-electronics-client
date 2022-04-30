import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    })
    const slicedProducts = products.slice(0,6)
    return (
        <div id="products" className='container'>
            <h2 style={{color: '#6768AB'}} className='text-center mt-5'>Products Inventory</h2>
            <div className="row">
                {
                    slicedProducts.map(product => <Product
                        key={product.id}
                        product= {product}
                    ></Product>)
                }
            </div>
            <button onClick={navigate('/inventory')}>See all products</button>
        </div>
       
    );
};

export default Products;