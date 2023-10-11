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
            <div className="flex items-center justify-center">
                <div className='m-20 p-8 bg-primary-color rounded-lg w-80'>
                    
                    <h1 className='text-primary font-bold italic text-2xl pb-3'>Login</h1>

                    <form onSubmit={handleSubmit} className="">
                        <label htmlFor='email' className="text-primary font-bold mr-6">Email</label>
                        <input className="mb-2" value={email} onChange={(e) => setEmail(e.target.value)} type='email' name='email' placeholder='youremail@gmail.com'/>
                        <br></br>
                        <label htmlFor='password' className="text-primary font-bold mr-6">Password</label>
                        <input className="" value={pass} onChange={(e) => setPass(e.target.value)} type='password' name='password' placeholder='********'/>

                        <button type="submit" className='bg-secondary-color p-2 w-20 rounded-md shadow-lg font-bold italic my-4'>Log In</button>
                    </form>
                    <button>
                        <NavLink className='italic' to="/register">Don't have an account? Register here.</NavLink>
                    </button>
                </div>
            </div>
    );
};

export default Login;