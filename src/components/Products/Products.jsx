import React, { useState } from 'react';
import Product from './Product';
import { useQuery } from 'react-query';
import { data } from 'autoprefixer';
import Loading from '../Shared/Loading/Loading';
import BookingModal from './BookingModal/BookingModal';

const Products = () => {

    const [booking, setBooking] = useState(null);
    // console.log(booking);
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products', data],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/products');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            <div className='text-center my-16 mb-36'>
                <h3 className='text-zinc-600 font-medium text-3xl'>All Products</h3>
                <div className='grid mt-8 gap-16 mx-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            setBooking={setBooking}
                        ></Product>)
                    }

                </div>
            </div>
            {
                booking && <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                    refetch={refetch}
                >
                </BookingModal>
            }

        </>
    );
};

export default Products;