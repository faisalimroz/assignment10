import { getAuth, signOut } from 'firebase/auth';
import { useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import './Home.css'
import Products from './Products/Products';
const Home = () => {
    const [search,setSearch]=useState('')
   const searchRef=useRef()
    const searchBtn=()=>{
        setSearch(searchRef.current.value)
        
       


    }
    
    
    const [user]=useAuthState(auth)
    const navigate=useNavigate()
    const navigateToLogin=()=>{
       navigate('/register')   
    console.log('jdkhf')
    }
    const navigateToAdmin=()=>{
        navigate('/admin')
    }
    const handleSignOut=()=>{
        signOut(auth)
    }
    return (
        <div className='p-2 container'>
            <Navbar collapseOnSelect expand="lg" className='nav-color' >
                <Container className='w-100'>
                    <Navbar.Brand href="/" className='w-50'>Fresh Valley</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-bar w-50 " >
                            <Nav.Link className='m-3 p-1 nav-link' href="/home">Home</Nav.Link>
                            <Nav.Link className='m-3 p-1 nav-link' href="/order">Order</Nav.Link>
                            <Nav.Link onClick={navigateToAdmin} className='m-3 p-1 nav-link' href="/admin">Admin</Nav.Link>
                            <Nav.Link className='m-3 p-1 nav-link' href="#pricing">Deals</Nav.Link>
                           {
                            user?
                            <button onClick={handleSignOut} className='m-3 p-1 login '>Logout</button>
                            :
                            <button onClick={navigateToLogin} className='m-3 p-1 login '>Login</button>
                           }

                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div class="d-flex  w-25 mx-auto mt-4 " role="search">
             <input ref={searchRef} name="searchTxt" type="text" maxlength="512" id="searchTxt" class="searchField"/>
             <button onClick={searchBtn} class="btn btn-outline-success" type="submit">Search</button>
            </div>
          

            <Products></Products>
        </div>
    );
};

export default Home;