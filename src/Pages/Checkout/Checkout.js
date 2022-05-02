import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';

const Checkout = () => {
    const {productId} = useParams();
    const [product] = useProductDetail(productId);

    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    );
};

export default Checkout;