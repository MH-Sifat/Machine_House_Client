import React, { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';
import Loading from '../../components/Shared/Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;