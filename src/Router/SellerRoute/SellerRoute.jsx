import React, { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../../components/hooks/UseSeller';
import Loading from '../../components/Shared/Loading/Loading';

const SellerRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    const [ isSeller, isSellerLoading] = useSeller(user?.email)

    if (loading || isSellerLoading) {
        return <Loading></Loading>
    }
    if (user && isSeller) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    
    
};

export default SellerRoute;