import React from 'react';

const Product = ({ product, setBooking }) => {


    const { _id, seller, productName, image, location, resalePrice, originalPrice, years, time } = product;

    return (
        <div className="card card-compact bg-base-100 shadow-xl hover:outline outline-zinc-500 ">
            <figure><img src={`data:image/png;base64,${image}`} className='h-96 w-full' alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">Model: {productName}</h2>

                <h3 className="flex text-xl text-zinc-600 font-bold">Resale Price: {resalePrice}$</h3>
                <h3 className="flex font-medium text-md text-zinc-500">Orginal Price: {originalPrice}$</h3>

                <p className='flex text-zinc-500'>Seller: {seller}</p>
                <p className='flex text-zinc-500'>Year of Use: {years}</p>
                <p className='flex text-zinc-500'>post: {time}</p>
                <p className='flex text-zinc-500'>location: {location}</p>
                <div className="card-actions justify-start mt-2">
                    <label

                        htmlFor="booking-modal"
                        className="btn btn-sm btn-outline rounded-full"
                        onClick={() => setBooking(product)}>Order now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Product;