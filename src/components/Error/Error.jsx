import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h2 className="text-5xl font-bold text-zinc-400">404</h2>
                    <h2 className="text-5xl font-bold text-zinc-400">Page Not Found</h2>
                    <Link><button className="btn btn-sm btn-gost mt-12">Go Back Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;