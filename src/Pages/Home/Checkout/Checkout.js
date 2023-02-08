import { signOut } from 'firebase/auth';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Checkout.css';

const Checkout = () => {
    const { pdname, pdprice,pdid } = useParams()
    const [user]=useAuthState(auth)
    const navigate=useNavigate()
    const navigateToHome=()=>{
        navigate('/')
    }
    const navigateToAdmin=()=>{
        navigate('/admin')
    }
    const handleSignOut=()=>{
        signOut(auth)
        navigate('/')
    }
    const placeOrder=()=>{
        //  const productdName={pdname};
        //  const productPrice={pdprice}
        //  const quantity=1;
         const order={
            orderId:pdid,
            productName:pdname,
            productPrice:pdprice,
            pdQuantity:1,
            email:user.email,

         }
         fetch('http://localhost:5000/order',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(result=>console.log(result))

    }
   
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='nav-color' >
                <Container className='w-100'>
                    <Navbar.Brand onClick={navigateToHome} href="#home" className='w-50'>Fresh Valley</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-bar w-50 " >
                            <Nav.Link onClick={navigateToHome} className='m-3 p-1' href="/">Home</Nav.Link>
                            <Nav.Link className='m-3 p-1' href="#pricing">Order</Nav.Link>
                            <Nav.Link onClick={navigateToAdmin} className='m-3 p-1' href="#features">Admin</Nav.Link>
                            <Nav.Link className='m-3 p-1' href="#pricing">Deals</Nav.Link>
                            <button onClick={handleSignOut} className='m-3 p-1 login '>Logout</button>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='container '>
                <h1>Checkout</h1>
                <div className='checkout-box mx-auto'>
                    <div className='row'>
                        <h2 className='col-6 col-md-4'>Description</h2>
                        <h2 className='col-6 col-md-4'>Quantity</h2>
                        <h2 className='col-6 col-md-4'>Price</h2>
                    </div>
                    <hr
                        style={{
                            background: "black",
                            height: "3px",
                            border: "none",
                        }}
                    />
                    <div className='row'>
                        <h2 className='col-6 col-md-4'>{pdname}</h2>
                        <h2 className='col-6 col-md-4'>1</h2>
                        <h2 className='col-6 col-md-4'>{pdprice}</h2>
                    </div>
                    <hr
                        style={{
                            background: "black",
                            height: "3px",
                            border: "none",
                        }}
                    />
                    <div className='row '>
                        <h2 className='col-6 col-md-4'>Total</h2>
                        <h2 className='col-6 col-md-4'>1 </h2>

                        <h2 className='col-6 col-md-4'>{pdprice}</h2>
                      
                    </div>
                    <button onClick={placeOrder} className='mt-5 bg-primary'> Place Order</button>
                </div>
               
            </div>
           

        </div>
    );
};

export default Checkout;