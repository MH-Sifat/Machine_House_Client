import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const ManageProducts = () => {

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/products')
            const data = await res.json();
            return data;
        }
    })

    const deleteProduct = (product) => {
        fetch(`http://localhost:8000/products/${product._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Product ${product.name} is deleted successfully`)
                    refetch()
                }
            })

    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl mb-5'> Manage Products</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#E6E6E6]'>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Resale Price</th>
                            <th>Orginal Price</th>
                            <th>Category</th>
                            <th>Year of Use</th>
                            <th>Location</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='bg-base-100'>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>
                                    {/* <div className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={doctor?.image} />
                                        </div>
                                    </div> */}

                                    
                                        <div className="w-20">
                                            <img src={`data:image/png;base64,${product?.image}`} />
                                        </div>
                                    

                                </td>
                                <td>{product?.productName}</td>
                                <td>{product?.resalePrice}</td>
                                <td>{product?.originalPrice}</td>
                                <td>{product?.category}</td>
                                <td>{product?.years}</td>
                                <td>{product?.location}</td>
                                <td><button onClick={() => { deleteProduct(product) }} className="btn btn-sm btn-active btn-error text-white">Delete</button> </td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;