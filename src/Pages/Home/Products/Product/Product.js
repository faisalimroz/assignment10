import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = ({product}) => {
    const {img,name,price,_id}=product
    
  const navigate=useNavigate()
    const navigateToCheckout=()=>{
        navigate(`/checkout/${name}/${price}/${_id}`)
    }
    return (
        <div>
          <div className='product-container'>
          
            <img src={img} alt="hh"/>
            <h3>{name}</h3>
            <div className='d-flex btns justify-content-between'>
              <h1>{price}</h1>
              <button onClick={()=>navigateToCheckout(name,price)}> Buy Now </button>
            </div>
          </div>
        </div>
    );
};

export default Product;