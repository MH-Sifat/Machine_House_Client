import React, { useContext } from 'react';
import { AuthContext } from '../../../context/Authprovider';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:8000/booked?email=${user?.email}`

    const { data: booked = [] } = useQuery({
        queryKey: ['booked', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl mb-5'>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#E6E6E6]'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Location</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody className='bg-base-100'>
                        {
                            booked.map((book, i) => <tr key={book._id}>
                                <th>{i + 1}</th>
                                <td>{book?.productName}</td>
                                <td>{book?.price}</td>
                                <td>{book?.category}</td>
                                <td>{book?.location}</td>
                                <td>{
                                    book.price && !book.paid && < Link to={`/dashboard/payment/${book._id}`}>
                                        <button className='btn btn-sm btn-outline'>pay</button></Link>
                                }
                                    {
                                        book.price && book.paid && <span className='font-semibold text-success'>PAID</span>
                                    }
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;