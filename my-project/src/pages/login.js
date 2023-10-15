import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [error, setError] = useState(''); // To show error messages
    const email=useRef()
    const password=useRef()
    const handleSubmit=()=> {
       if(email.current.value=="admin@gmail.com"&&password.current.value=="admin"){
        localStorage.setItem("emailData","admin@gmail.com")
        localStorage.setItem("passwordData","admin")
       }
    }

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className='p-8 bg-primary-color rounded-lg shadow-md w-full max-w-md text-center'>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor='email' className="text-left text-accent-color font-bold">Email</label>
                        <input className="p-2 border rounded" ref={email} type='email' name='email' placeholder='youremail@gmail.com' />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label htmlFor='password' className="text-left text-accent-color font-bold">Password</label>
                        <input className="p-2 border rounded" ref={password}  type='password' name='password' placeholder='********' />
                    </div>

                    <div>
                        {error && <p className="text-red-500">{error}</p>}
                        <button type="submit" className='w-full bg-secondary-color uppercase text-white p-2 rounded-md shadow-md font-bold italic '>Log In</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;
