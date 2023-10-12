import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className='p-8 bg-primary-color rounded-lg shadow-md w-full max-w-md text-center'>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor='email' className="text-left text-accent-color font-bold">Email</label>
                        <input className="p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} type='email' name='email' placeholder='youremail@gmail.com' />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label htmlFor='password' className="text-left text-accent-color font-bold">Password</label>
                        <input className="p-2 border rounded" value={pass} onChange={(e) => setPass(e.target.value)} type='password' name='password' placeholder='********' />
                    </div>

                    <button type="submit" className='w-full bg-secondary-color uppercase text-white p-2 rounded-md shadow-md font-bold italic hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200'>Log In</button>
                </form>
                <div className="mt-4">
                    <NavLink className='text-accent-color text-sm font-bold' to="/register">Don't have an account? Register here.</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;
