import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider';
import useSeller from '../../hooks/UseSeller';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);


    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .then(err => console.log(err))
    }

    const menuItems = <React.Fragment>
        <li className='text-lg font-medium'><Link to='/'>Home</Link></li>
        <li className='text-lg font-medium'><Link to='/blogs'>Blogs</Link></li>
        <li className='text-lg font-medium'><Link to='/contact'>Contact</Link></li>
        <li className='text-lg font-medium'><Link to='/products'>Products</Link></li>
        {
            user?.uid ? <>
                <li className='text-lg font-medium'><Link to='/dashboard'>Dashboard</Link></li>
                <li className='text-lg font-medium'><button onClick={handleSignOut}>Sign Out</button></li>

            </> : <li className='text-lg font-medium'><Link to='/signin'>Sign In</Link></li>

        }
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 flex justify-between sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52 min-h-full">
                        {menuItems}

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case font-bold text-2xl">Machine House.</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-5">
                    {menuItems}

                </ul>
            </div>
            {
                    isSeller && <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                }
        </div>
    );
};

export default Navbar;