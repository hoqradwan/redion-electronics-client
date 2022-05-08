import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {img, serviceName} = service;
    return (
        <div className='service col-lg-3 mt-2 mb-3'>
            <img className='img-fluid' src={img} alt="" />
            <p className='mt-2'>{serviceName}</p>
        </div>
    );
};

export default Service;