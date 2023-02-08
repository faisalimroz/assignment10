import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Update.css'
const Update = () => {
    const {id}=useParams();
    const [updateProduct,setupdateProduct]=useState({})
    useEffect(()=>{
        const url=``
        fetch(url)

    },[])
    return (
        <div>
            <h2>updating{id}</h2>
        </div>
    );
};

export default Update;