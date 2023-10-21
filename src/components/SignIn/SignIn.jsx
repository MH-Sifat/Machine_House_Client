import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

// For Admin Log in : admin@gmail.com  PASS-12345A$
// For Seller Log in : seller@gmail.com PASS-12345A$

const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [logInError, setLogInError] = useState("");

    const { signIn, googleLogIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogIn = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                toast.success('LogIn Successfull')
                // from.reset()
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error);
                setLogInError(error.message)
                // from.reset()
            })
    }

    return (
        <>
        <div className='flex justify-center items-center h-[700px]'>
            <div className='w-96 p-6 shadow-lg rounded'>
                <h4 className='text-center font-bold text-3xl'>LogIn</h4>
                <form onSubmit={handleSubmit(handleLogIn)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" className="input input-bordered"
                            {...register("email", { required: "required" })} />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered" {...register("password", {
                            required: "required",
                            minLength: { value: 6, message: "Password must be 6 charecters long" }
                        })} />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <input type="submit" className='btn btn-outline btn-active w-full mt-4' value='Sign In' />
                    {logInError && <p className='text-red-500'>{logInError}</p>}
                    {logInError && <p className='text-red-500'>{logInError}</p>}

                </form>
                <p className='mt-1'><small>New to Doctors Portal? <Link to='/signup' className='text-zinc-500 font-bold'>Create an Account</Link></small></p>
            </div>
        </div>
         <div className='card card-body shadow-lg rounded w-72'>
            <p className='font-bold text-red-500'>Admin: admin@gmail.com</p>
            <p className='font-bold text-blue-400'>Seller: seller@gmail.com</p>
            <p className='font-bold'>Password for Both: 12345A$</p>

        </div>
        </>
    );
};

export default SignIn;