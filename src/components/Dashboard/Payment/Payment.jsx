import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from './CheckOut';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK)

const Payment = () => {
    const booked = useLoaderData();
    const { email, category, location, name, phone, price, productName } = booked;

    return (
        <div>
            <h2 className='font-bold text-2xl'>Payment for <span className='text-red-500'>{productName}</span></h2>
            <p className='font-medium mt-2 mb-8'>{name} Please Pay <span className='text-sky-500'>{price}$</span> for {productName} {category}</p>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut
                        booked={booked}
                    >
                    </CheckOut>
                </Elements>
            </div>
        </div>

    );
};

export default Payment;