import React, { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Shared/Loading/Loading';
import useAdmin from '../../components/hooks/useAdmin';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    const [ isAdmin, isAdminLoading ] = useAdmin(user?.email)

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default AdminRoute;