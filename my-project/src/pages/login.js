import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/users/login/', {
                email: email,
                password: pass
            });

            if (response.data && response.data.session_id) {
                console.log(response.data);
                if (response.data && response.data.session_id) {
                    localStorage.setItem('session_id', response.data.session_id);
                    navigate("/dashboard");
                }
                console.log("Navigating to dashboard");
            }
        } catch (err) {

            if (err.response && err.response.data && err.response.data.detail) {
                if (typeof err.response.data.detail === 'string') {
                    setError(err.response.data.detail);
                } else if (err.response.data.detail.msg) {
                    setError(err.response.data.detail.msg);
                } else {
                    setError("An error occurred during login.");
                }
            } else {
                setError("An error occurred during login.");
            }
        }
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

                    <div>
                        {error && <p className="text-red-500">{error}</p>}
                        <button type="submit" className='w-full bg-secondary-color uppercase text-white p-2 rounded-md shadow-md font-bold italic '>Log In</button>
                    </div>

                </form>
                <div className="mt-4">
                    <NavLink className='text-accent-color text-sm font-bold' to="/register">Don't have an account? Register here.</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;
