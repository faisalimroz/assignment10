import React from 'react';
import './Or.css';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';
const Or = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate()
    if (user) {
        navigate('/home')
    }
    if (error) {
        <p>{error.message}</p>
    }
    if(loading){
        return <p>loading...</p>
    }
    return (
        <div>
            <div className='d-flex align-items-center container  w-50 mt-2'>
                <div style={{ height: "1px" }} className='w-50  bg-primary'></div>
                <div>Or</div>
                <div style={{ height: "1px" }} className='w-50  bg-primary'></div>
            </div>
            <div className=''>

                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-40 p-3 d-block mx-auto d-block mb-2 '>
                    <img style={{ height: "20px" }} className='w-auto' src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png" alt="" />
                    <span className='px-2'>   Google sign in</span>

                </button>
               
            </div>
        </div>
    );
};

export default Or;