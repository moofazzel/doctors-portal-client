import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { UserContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/UseAdmin';

const AdminRoute = ({ children }) => {
    const {user,loading} = useContext(UserContext)
    const [isAdmin,isAdminLoading] = useAdmin(user?.email)

    const location = useLocation()

    if (loading || isAdminLoading) {
        return <LoadingSpinner/>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to={'/login'} state={{from:location}} replace ></Navigate>
    
};

export default AdminRoute;