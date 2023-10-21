import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Blogs from "../components/Blogs/Blogs";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Error from "../components/Error/Error";
import Products from "../components/Products/Products";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import CategoryBanner from "../components/Home/CategoryBanner/CategoryBanner";
import DashBoard from "../Layout/DashBoard";
import MyOrders from "../components/Dashboard/MyOrders/MyOrders";
import AllUsers from "../components/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute/AdminRoute";
import SellerRoute from "./SellerRoute/SellerRoute";
import AddProduct from "../components/Dashboard/AddProduct/AddProduct";
import ManageProducts from "../components/Dashboard/ManageProducts/ManageProducts";
import AllOrders from "../components/Dashboard/AllOrders/AllOrders";
import CategoryProducts from '../components/Home/CategoryBanner/CategoryProducts/CategoryProducts';
import Payment from "../components/Dashboard/Payment/Payment";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <Error></Error>
            },
            {
                path: '/products',
                element: <PrivateRoute><Products></Products></PrivateRoute>,

            },
            {
                path: '/products/:category',
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:8000/products/${params.category}`)

            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/manageProducts',
                element: <SellerRoute><ManageProducts></ManageProducts></SellerRoute>
            },
            {
                path: '/dashboard/allorders',
                element: <SellerRoute><AllOrders></AllOrders></SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                loader:({params})=>fetch(`http://localhost:8000/booked/${params.id}`),
                element: <Payment></Payment>
            }
        ]
    }
])

export default router;