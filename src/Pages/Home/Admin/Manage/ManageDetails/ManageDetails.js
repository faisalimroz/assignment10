import React  from 'react';
import './ManageDetails.css'
const ManageDetails = ({product}) => {
 
    
    const {name,price,weight,_id}=product
    const handleProductDelete=id=>{
       
        const proceed=window.confirm('Are you sure to delete?');
        if(proceed){
            
            const url=`http://localhost:5000/product/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>
                {
                    if(data.deletedCount > 0){
                        console.log('deleted')
                        
                    }
                })
        }
    }
    return (
        <div>
            <div className='row mt-5'>

                <h4 className='col '>{name}</h4>
               
                    <h3 className='col' >{weight}</h3>
                    <h3 className='col' >{price}</h3>
                    <div className='col d-flex '>
                    <img  className=' delete-icon m-2' src="https://i.ibb.co/BVz0TQv/Group-307.png" alt="hhh" />
                      <img onClick={()=>handleProductDelete(_id)} className=' delete-icon m-2' src="https://i.ibb.co/Mnb9FFp/Group-33150.png" alt="hhh" />
                    
                    </div>
                    
                    
                
            </div>
        </div>
    );
};

export default ManageDetails;