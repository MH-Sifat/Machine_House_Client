import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const AllOrders = () => {

    const { data: orders = [], isLoading, refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/orders')
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl mb-5'>All Orders</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#E6E6E6]'>
                        <tr>
                            <th>#</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Category</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody className='bg-base-100'>
                        {
                            orders.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>{order?.name}</td>
                                <td>{order?.productName}</td>
                                <td>{order?.price}</td>
                                <td>{order?.email}</td>
                                <td>{order?.phone}</td>
                                <td>{order?.category}</td>
                                <td>{order?.location}</td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;