import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Products.css'
const Products = () => {
    const [products,setProduct]=useState([])
    
    
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div>
            
            
            <div className='products-container'>
                {
                    products.map(product=><Product key={product._id} product={product}>
                    </Product>)
                }
                
            </div>
        </div>
    );
};

export default Products;