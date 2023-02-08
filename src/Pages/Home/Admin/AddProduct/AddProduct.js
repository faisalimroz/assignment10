import React from 'react';
import './AddProduct.css'


import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const AddProduct = () => {
    const {register,handleSubmit}=useForm();
    const onSubmit= data=>{
        console.log(data)
        const url = `http://localhost:5000/addproduct`
        fetch(url,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>console.log(result))
    }
    return (
        <div>
           
            
            <form className='container add-form p-4 w-100 mt-4' onSubmit={handleSubmit(onSubmit)}>
                <div class="row">
                    <div class="col">
                        <h3>Name</h3>
                        <input type="text" class="form-control" placeholder="Product Name" {...register("name",{required:true})} />
                    </div>
                    <div class="col">
                        <h3>Weight</h3>
                        <input type="text" class="form-control" placeholder="Weight" {...register("weight",{required:true})}/>
                    </div>
                </div>
                <div class="row mt-3 ">
                    <div class="col">
                        <h3>Price</h3>
                        <input type="text" class="form-control" placeholder="Add Price" {...register("price",{required:true})}/>
                    </div>
                    <div class="col">
                        <h3>Add Photo</h3>
                        
                            <input type="text" class="form-control" name="picture" {...register("img",{required:true})} />

                       
                    </div>
                </div>
                <button className='mt-2 submit-btn mx-auto' >Submit</button>
            </form>
           

        </div>
    );
};

export default AddProduct;