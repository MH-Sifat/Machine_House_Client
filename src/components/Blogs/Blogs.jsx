import React, { useEffect } from 'react';

const Blogs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <h2 className='text-center text-3xl font-bold mt-12'>The Dreams Machines You Want</h2>
            <div className="hero my-24 bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="../../../src/assets/images/car.jpg" className="max-w-xl rounded-lg shadow-2xl" />
                    <div className='px-5'>
                        <h1 className="text-5xl font-bold">Car Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
            <div className="hero my-32 bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='px-5 pl-24'>
                        <h1 className="text-5xl font-bold">Bike News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ipsum adipisci corrupti eos, porro quos soluta rerum natus voluptate. Ipsa amet molestiae eligendi odit magnam itaque doloremque magni ad modi.</p>
                    </div>
                    <img src="../../../src/assets/images/bike.jpg" className="max-w-xl rounded-lg shadow-2xl" />
                </div>
            </div>
            <div className="hero my-32 bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="../../../src/assets/images/scooty.jpg" className="w-5/6 rounded-lg shadow-2xl" />
                    <div className='px-5'>
                        <h1 className="text-5xl font-bold">Scooter Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat lo ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;