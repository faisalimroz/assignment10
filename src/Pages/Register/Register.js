import React, { useState } from 'react';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Or from '../../Or/Or';
const Register = () => {
    const [agree,setAgree]=useState(false)

    
    const navigate=useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const handleRegister=async (event)=>{
        event.preventDefault();
        const name=event.target.name.value;
         const email=event.target.email.value;
         console.log(name);
         const pass=event.target.password.value;
         const confirmpass=event.target.passwordconfirm.value;
    //   const agree=event.target.terms.checked
      if(pass===confirmpass){
        
        await  createUserWithEmailAndPassword(email,pass)
       navigate('/')
      
      }
      else{
        
      }
       
        
    }
   
    return (
        <div>
              <form  onSubmit={handleRegister} className='forms '>
                <h2>Register</h2>
                <input required className='mx-auto mt-3'  type="text" name="name" id="" placeholder="your name"/>
                <input required className='mx-auto'   type="email" name="email" id="" placeholder="your email"/>
                <input  required  className='mx-auto'  type="password" name="password" id="" placeholder="your password"/>
                <input required className='mx-auto'  type="password" name="passwordconfirm" id="" placeholder="confirm your password"/>
                <input  className='mx-auto'  onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label   className={agree? 'text-primary ':'text-danger ' } htmlFor='terms'>Accept all terms and condition</label>
                {/* <label   htmlFor='terms'>Accept genius car and terms codition</label> */}
                <input className='mx-auto reg'  type="submit" value="register"/>
                <p>Already have an account?<Link to="/login"className='pe-auto text-decoration-none' style={{color:"red"}}>login</Link> </p>
            </form>
            <Or></Or>
        </div>
    );
};

export default Register;