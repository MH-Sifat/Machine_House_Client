import React, { useContext } from 'react';
import { AuthContext } from '../../../context/Authprovider';
import toast from 'react-hot-toast';

const BookingModal = ({ booking, setBooking ,refetch}) => {
    const { productName,category, resalePrice } = booking;
    const { user } = useContext(AuthContext);
    // console.log(booking);

    const handleBooking = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;


        const booked = {
            name: user.displayName,
            productName,
            price: resalePrice,
            email,
            phone,
            category,
            location
        }
        // console.log(booked);


        fetch('http://localhost:8000/booked', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booked)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBooking(null)
                    toast.success('Booking confirmed')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }

            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className='flex justify-between'>
                        <h3 className="font-bold text-lg">Book For Meet</h3>
                        <label htmlFor="booking-modal" className="btn btn-outline btn-circle btn-sm btn-error">X</label>
                    </div>

                    <form onSubmit={handleBooking} className="mt-5">
                        <div className=''>
                            <label className="mb-4 text-zinc-600 block"><span className='font-bold'>Name :</span> {user.displayName}</label>
                            <label className="mb-4 text-zinc-600 block "><span className='font-bold'>Model :</span> {productName}</label>
                            <label className="mb-4 text-zinc-600 block"><span className='font-bold'>Price:</span> {resalePrice} $</label>
                            <label className="mb-4 text-zinc-600 block"><span className='font-bold'>category:</span> {category}</label>
                        </div>
                        <label className="text-zinc-600 font-bold">Email :</label>
                        <input readOnly defaultValue={user?.email} name='email' type="text" placeholder="Your Email" className="input input-bordered w-full my-2" />
                        <label className="text-zinc-600 font-bold">Phone Number :</label>
                        <input name='phone' type="number" required placeholder="Your Phone Number" className="input input-bordered w-full my-2" />
                        <label className="text-zinc-600 font-bold">Meeting Location :</label>
                        <input name='location' type="text" placeholder="Meeting Location" required className="input input-bordered w-full mt-2" />
                        <input type="submit" value="Submit" className='btn btn-outline btn-active w-full mt-10' />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;