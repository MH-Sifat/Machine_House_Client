import React, { useContext } from 'react';
import { AuthContext } from '../context/Authprovider';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from './../components/hooks/useAdmin';
import useSeller from '../components/hooks/UseSeller';

const DashBoard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);


    return (
        <div>
            <div>
                <Navbar></Navbar>

                <div className="drawer lg:drawer-open">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content bg-slate-200 px-8 py-12 h-full">
                        {/* Page content here */}
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu  w-80  min-h-full bg-base-100 text-base-content mt-12">
                            {/* Sidebar content here */}
                            <li><Link to='/dashboard'>My Orders</Link></li>
                            {
                                isSeller && <>
                                    <li><Link to='/dashboard/allorders'>All Orders</Link></li>
                                    <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                                    <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                                </>
                            }
                            {
                                isAdmin && <>
                                    <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                                </>
                            }
                        </ul>

                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default DashBoard;