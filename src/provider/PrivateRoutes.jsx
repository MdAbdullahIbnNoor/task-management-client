import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation()

    if(loading) {
        return <span className="loading loading-dots loading-lg p-12 lg:m-[300px] lg:mx-[700px]"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default PrivateRoutes
