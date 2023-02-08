import React from 'react';

const OrderDetail = ({order}) => {
    const {_id,
        pdQuantity,productPrice,productName
    }=order
    return (
        <div className='row'>
            <h2 className='col-6 col-md-4'>{productName}</h2>
            <h2 className='col-6 col-md-4'>{ pdQuantity}</h2>
            <h2 className='col-6 col-md-4'>{productPrice}</h2>
        </div>
    );
};

export default OrderDetail;