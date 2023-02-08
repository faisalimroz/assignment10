import React from 'react';
import './EditProduct.css'


const EditProduct = () => {
   
    return (
        <div>
            <h2>edit</h2>
           
            
            <form className='container add-form p-4 w-100 mt-4'>
                <div class="row">
                    <div class="col">
                        <h3>Name</h3>
                        <input type="text" class="form-control" placeholder="Product Name" />
                    </div>
                    <div class="col">
                        <h3>Weight</h3>
                        <input type="text" class="form-control" placeholder="Weight" />
                    </div>
                </div>
                <div class="row mt-3 ">
                    <div class="col">
                        <h3>Price</h3>
                        <input type="text" class="form-control" placeholder="Add Price" />
                    </div>
                    <div class="col">
                        <h3>Add Photo</h3>
                        
                            <input type="file" name="picture" />

                       
                    </div>
                </div>
            </form>
            <button className='mt-2 submit-btn mx-auto' >Submit</button>
        </div>
    );
};

export default EditProduct;