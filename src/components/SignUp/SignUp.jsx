import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider';
import toast from 'react-hot-toast';

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUser, googleLogIn } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleSignUp = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('User Created Successfully')
                reset();
                navigate(from, { replace: true })
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        savedUser(data.name, data.email)
                    })
                    .catch(err => console.log(err))


            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message)
            })
    }

    const handleGoogleLog = (event) => {
        event.preventDefault()
        googleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                savedUser(user.displayName, user.email)
                toast.success('User SignUp Successfully');
                navigate(from, { replace: true });

            }).catch(error => {
                console.log('error:', error);
            })
    }


    const savedUser = (name, email) => {
        const user = { name, email }
        fetch('http://localhost:8000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/')
            })
    }

    return (
        <div className='flex justify-center items-center h-[700px]'>
            <div className='w-96 p-6 shadow-lg rounded'>
                <h4 className='text-center font-bold text-3xl'>Sign Up</h4>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: "required" })} type="text" className="input input-bordered" />
                        {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                    </div>
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
                            minLength: { value: 6, message: "Password must be 6 charecters long" },
                            pattern: {
                                value: /(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*?[0-9])/,
                                message: "password must have one Uppercase,Number and Special charecters(@$!%*?&)"

                            }
                        })} />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <input type="submit" className='btn btn-outline btn-active  w-full mt-4' value='Sign Up' />

                    {signUpError && <p className='text-red-500'>{signUpError}</p>}

                </form>
                <p className='mt-1'><small>Already have an account? <Link to='/Signin' className='text-zinc-500 font-bold'>Please SignIn</Link></small></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLog} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default SignUp;