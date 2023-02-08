import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AddProduct from './AddProduct/AddProduct';
import './Admin.css';
import EditProduct from './EditProduct/EditProduct';
import Manage from './Manage/Manage'

const Admin = () => {
  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('/')
  }
  const [manage, setManage] = useState(false)
  const [product, setProduct] = useState(false)
  const [edit, setEdit] = useState(false)

  const manageproduct = () => {
    var e = document.getElementById('manageproduct');
    var value = e.value;
    console.log(value)
    setManage(!manage)
    setEdit(false)
    setProduct(false)
  }
  const addproduct = () => {
    var e2 = document.getElementById('addproduct');
    var value = e2.value;
    console.log(value)
    setProduct(!product)
    setManage(false)
    setEdit(false)
  }
  const editproduct = () => {
    var e3 = document.getElementById('editproduct');
    var value = e3.value;
    console.log(value)
    setEdit(!edit)
    setProduct(false)
    setManage(false)
  }
  return (
    <div className='admin row'>
      <div className='manage col-4 '>




        <div onClick={manageproduct} className='manage-product mt-5 d-flex justify-content-center '>
          <img src='https://i.ibb.co/tpRwqyB/grid-1.png' alt="ss" />
          <option id="manageproduct" value='1'>Manage Product</option>

        </div>
        <div onClick={addproduct} className='manage-product d-flex justify-content-center '>
          <img src='https://i.ibb.co/Rbzdv6C/plus-1.png' alt="ss" />
          <option id="addproduct" value='2'>Add Product</option>

        </div>
        <div onClick={editproduct} className='manage-product d-flex justify-content-center '>
          <img src='https://i.ibb.co/BVz0TQv/Group-307.png' alt="ss" />
          <option id="editproduct" value='3'>Edit Product</option>

        </div>



      </div>
      <div className='product-description col-8 '>

        {
          manage ?
            <>
              <div className='product-description col-8 '>
                <Navbar collapseOnSelect expand="lg" className='nav-color' >
                  <Container className='w-100'>
                    <Navbar.Brand onClick={navigateToHome} href="#home" className='w-50'>Fresh Valley</Navbar.Brand>

                  </Container>
                </Navbar>
                <Manage></Manage>

              </div>
            </> :
            <>


            </>
        }
        {
          product ?
            <>
              <div className='product-description col-8 '>
                <Navbar collapseOnSelect expand="lg" className='nav-color' >
                  <Container className='w-100'>
                    <Navbar.Brand onClick={navigateToHome} href="#home" className='w-50'>Fresh Valley</Navbar.Brand>

                  </Container>
                </Navbar>
                <AddProduct></AddProduct>

              </div>
            </> :
            <>

            </>
        }
        {
          edit ?
            <>
              <div className='product-description col-8 '>
                <Navbar collapseOnSelect expand="lg" className='nav-color' >
                  <Container className='w-100'>
                    <Navbar.Brand onClick={navigateToHome} href="#home" className='w-50'>Fresh Valley</Navbar.Brand>

                  </Container>
                </Navbar>
                <EditProduct></EditProduct>

              </div>

            </> :
            <>
            </>
        }
      </div>

    </div>
  );
};

export default Admin;