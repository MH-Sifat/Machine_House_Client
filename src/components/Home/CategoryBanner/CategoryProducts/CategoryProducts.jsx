import React, { useState } from 'react';
import BookingModal from '../../../Products/BookingModal/BookingModal';
import { useLoaderData } from 'react-router-dom';
import Product from '../../../Products/Product';


const CategoryProducts = () => {

    const [booking, setBooking] = useState(null);

    const products = useLoaderData();

    return (
        <>
            <div className='text-center my-16 mb-36'>
                <h3 className='text-zinc-600 font-medium text-3xl'>New Collection's</h3>
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
                >
                </BookingModal>
            }

        </>
    );
};

export default CategoryProducts;