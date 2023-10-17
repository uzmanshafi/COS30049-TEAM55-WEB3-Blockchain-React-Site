import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setIsLoggedIn, setUserEmail, setUserId }) => {
    const navigate = useNavigate();
    const [error, setError] = useState(''); // To show error messages
    const email = useRef()
    const password = useRef()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/login/', {
                email: email.current.value,
                password: password.current.value,
            });

            if (response.data.status === 'success') {
                setUserId(response.data.user_id);  // Sets user ID here

                // Saves user ID in local storage
                localStorage.setItem('userId', response.data.user_id);
                // Once logged in, deploys the contract
                try {
                    const deployResponse = await axios.get('http://127.0.0.1:8000/deployContract');
                    if (deployResponse.data["Smart Contract deployed"]) {
                        console.log("Smart contract deployed at:", deployResponse.data["Smart Contract deployed"]);
                    }
                } catch (deployError) {
                    console.error("Error deploying contract:", deployError);
                    setError('Contract deployment failed. Please try again later.');
                    return;
                }
    
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('emailData', email.current.value);
                setUserEmail(email.current.value);
                setIsLoggedIn(true);
                navigate('/dashboard');
            }
        } catch (error) {
            setError('Invalid credentials');
        }
    };

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
                        <input className="p-2 border rounded" ref={password} type='password' name='password' placeholder='********' />
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
