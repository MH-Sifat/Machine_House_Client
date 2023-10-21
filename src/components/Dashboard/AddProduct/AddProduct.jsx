import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();

    const [productName, setProductName] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [reSalePrice, setReSalePrice] = useState('');
    const [category, setCategory] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [yearOfUse, setYearOfUse] = useState('');
    const [postTime, setPostTime] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!image) {
            return
        }
        const formData = new FormData();
        formData.append('seller', sellerName);
        formData.append('productName', productName);
        formData.append('category', category);
        formData.append('image', image);
        formData.append('location', location);
        formData.append('resalePrice', reSalePrice);
        formData.append('originalPrice', originalPrice);
        formData.append('years', yearOfUse);
        formData.append('time', postTime);

        fetch('http://localhost:8000/products', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Product Added Successfully');
                    navigate('/dashboard/manageProducts')
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
        <h2 className='text-2xl mb-5'>Add a New Product</h2>

        <div>
            <div className='bg-base-100 w-1/2 p-6 shadow-lg rounded'>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full  mt-3">
                        <label className="label">
                            <span className="label-text font-semibold">Product Name</span>
                        </label>
                        <input onChange={e => setProductName(e.target.value)} placeholder='Enter Product Name' type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full mt-3">
                        <label className="label">
                            <span className="label-text font-semibold">Seller Name</span>
                        </label>
                        <input onChange={e => setSellerName(e.target.value)} placeholder='Enter your Name' type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full  mt-3">
                        <label className="label">
                            <span className="label-text font-semibold">Category</span>
                        </label>
                        <input onChange={e => setCategory(e.target.value)} placeholder='Enter Category' type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full  mt-3">
                        <label className="label">
                            <span className="label-text font-semibold">Resale Price</span>
                        </label>
                        <input onChange={e => setReSalePrice(e.target.value)} placeholder='Enter Resale Price' type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full mt-3">
                        <label className="label">
                            <span className="label-text font-semibold">Original Price</span>
                        </label>
                        <input onChange={e => setOriginalPrice(e.target.value)} placeholder='Enter Original Price' type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full  mt-3">
                        <label className="label">
                            <span className="label-text font-semibold">Year of Use</span>
                        </label>
                        <input onChange={e => setYearOfUse(e.target.value)} type="text" className="input input-bordered"
                            placeholder='Enter Year of Use' />
                    </div>
                    <div className="form-control w-full  mt-3">
                        <label className="label">
                            <span className="label-text font-semibold">Post Time</span>
                        </label>
                        <input onChange={e => setPostTime(e.target.value)} type="text" className="input input-bordered"
                            placeholder='Enter Post Time' />
                    </div>
                    <div className="form-control w-full mt-3">
                        <label className="label">
                            <span className="label-text font-semibold">Location</span>
                        </label>
                        <input onChange={e => setLocation(e.target.value)} type="text" className="input input-bordered"
                            placeholder='Enter your Location' />
                    </div>
                   
                    <div className="form-control w-full mt-3">
                        <label className="label">
                            <span className="label-text font-semibold">Image</span>
                        </label>
                        <input onChange={e => setImage(e.target.files[0])} type="file" className="file-input file-input-bordered w-full" />
                    </div>
                    <input type="submit" className='mt-6  btn btn-outline btn-active  w-full mt-12' value='Add' />
                </form>

            </div>

        </div>
    </div>
    );
};

export default AddProduct;