import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Order.css'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import OrderDetail from './OrderDetail/OrderDetail';
const Order = () => {
    const [user] = useAuthState(auth)
    const [order, setOrder] = useState([])
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
    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [user?.email])
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
           
              <div className='mx-auto p-5'>
                   <div className='row'>
                        <h2 className='col-6 col-md-4'>Product Name</h2>
                        <h2 className='col-6 col-md-4'>Quantity</h2>
                        <h2 className='col-6 col-md-4'>Price</h2>

                   </div>
                
                   {
                    order.map(order=><OrderDetail key={order._id} order={order}></OrderDetail>)
                   }
             </div>
        </div>
    );
};

export default Order;