import React from 'react';

const Review = ({ review }) => {
    const { name, description, address, img } = review;

    return (
        <div className="card  p-6 shadow-xl">

            <div className='m-2'>
                <p className='text-center'>{description}</p>
                <div className="flex items-center mt-8 justify-center">
                    <div className='w-16 mr-5 rounded-full ring ring-neutral-500  ring-offset-2 '>
                        <figure><img src={img} alt="Man" /></figure>
                    </div>
                    <div>
                        <h5 className='font-bold text-xl text-neutral-500'>{name}</h5>
                        <p>{address}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;