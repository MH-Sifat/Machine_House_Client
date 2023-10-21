import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider';
import Loading from '../../Shared/Loading/Loading';

const CategoryBanner = () => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-4xl font-bold tracking-wide text-center py-5 bg-gradient-to-l from-neutral-700 to-neutral-300 text-white'>Category's</h1>
            <div className='sm:block md:flex items-center w-full justify-around my-5'>

                <div className="card bg-base-100 shadow-xl image-full lg:w-5/12 h-96 hover:outline bg-neutral-300">
                    <figure><img src="/src/assets/images/bike.jpg" alt="" /> </figure>
                    <div className="card-body">
                        <h2 className="card-title">Honda.</h2>
                        <p>Bike Collections.<br />Garb this Antique collections!</p>
                        <div className="card-actions justify-end">
                            <Link to='/products/bike'><button className="btn btn-outline text-white">Order Now</button></Link>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl image-full lg:w-5/12 h-96 hover:outline bg-neutral-300">
                    <figure><img src="/src/assets/images/scooty.jpg" alt="" /> </figure>
                    <div className="card-body rounded-none	" >
                        <h2 className="card-title">Honda.</h2>
                        <p>Old is Gold.<br />Garb this Antique collections!</p>
                        <div className="card-actions justify-end">
                            <Link to='/products/scooter'><button className="btn btn-outline text-white">Order Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="card bg-base-100 shadow-xl image-full w-full">
                    <img src="/src/assets/images/car-1.jpg" className='w-full' alt="" />
                    <div className="card-body rounded-none	" >
                        <h2 className="card-title">Honda.</h2>
                        <p>Cars Collections.<br />Garb this Antique collections!</p>
                        <div className="card-actions justify-end">
                            <Link to='/products/car'><button className="btn btn-lg btn-outline text-white">Order Now</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CategoryBanner;