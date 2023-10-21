import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Reviews = () => {

    const reviews = [
        {
            id: 1,
            name: 'Jack Henry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
            img: people1

        },
        {
            id: 2,
            name: 'Micy Trio',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
            img: people2

        },
        {
            id: 3,
            name: 'Viz Len',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address: 'California',
            img: people3

        }
    ]
    return (
        <div id='review' className="my-24 mx-8">
                <div className='text-center'>
                    <h4 className='text-neutral-500 font-bold text-2xl'>Review's</h4>
                    <h2 className='text-4xl'>Our Valuable Coustomer's</h2>
                </div>
            <div className='grid mt-12 gap-6 mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;