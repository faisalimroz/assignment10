import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import '../../firebase.init'
import './Login.css'
import auth from '../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Or from '../../Or/Or';
// import { signInWithEmailAndPassword } from 'firebase/auth';
const Login = () => {
    
    const [agree,setAgree]=useState(false)
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const resetPass= async ()=>{
               const email=document.getElementById("mail").value;
       if(email){
         await sendPasswordResetEmail(email);
         console.log(email)
       
       }
       
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate()
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
    if(user){
        console.log(user)
        navigate(from, { replace: true });
    }
    
    const handleLogin=async (event)=>{
        event.preventDefault();
    
         const email=event.target.email.value;
        
         const pass=event.target.password.value;
         console.log(email,pass);
         await signInWithEmailAndPassword(email,pass)
        navigate('/')
}
   
      
        
       
    return (
        <div>
            <h2>
                Login
            </h2>
            <form  onSubmit={handleLogin} className='forms p-2'>
              <h2>
                Login
              </h2>
                <input className='mx-auto' required   type="email" name="email" id="mail" placeholder="your email"/>
                <input className='mx-auto' required type="password" name="password" id="" placeholder="your password"/>
                <input  className='mx-auto'  onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label   className={agree? 'text-primary ':'text-danger ' } htmlFor='terms'>Remember me</label>
                 <p><Link  style={{color:"red"}}onClick={resetPass} >Forget Password?</Link> </p> 
                <input className='mx-auto reg'  type="submit" value="Login"/>
                <p>Don't have an account?<Link to="/register"className='mx-auto pe-auto text-decoration-none' style={{color:"red"}}>Register</Link> </p>
            </form>
            <Or></Or>
        </div>
    );
};

export default Login;