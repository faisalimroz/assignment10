import React, { useEffect, useState } from 'react';
import './Manage.css';

import ManageDetails from './ManageDetails/ManageDetails';

const Manage = () => {
   
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [products])
    return (
        <div>

          
            <div className='container box w-100 p-3 mt-5'>

                <div className='row first p-2 '>

                    <h3 className='col'>Name</h3>

                    <h1 className='col' >Weight</h1>
                    <h1 className='col' >Price</h1>
                    <h1 className='col' >Action</h1>
                </div>
                <div className='second'>
                {
                    products.map(product => <ManageDetails key={product._id} product={product}>
                    </ManageDetails>)
                }
                </div>
               

            </div>

        </div>
    );
};

export default Manage;