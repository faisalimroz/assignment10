import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';

import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import auth from '../../../firebase.init';
import App from '../../../App';

const RequireAuth = ({children}) => {
    const auth=getAuth()
    const [user,loading]=useAuthState(auth)
    const location =useLocation()
    if(loading){
        return 
    }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace/>
    }
    return children;
};

export default RequireAuth;