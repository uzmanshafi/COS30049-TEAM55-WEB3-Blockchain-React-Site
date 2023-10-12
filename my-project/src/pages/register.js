import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState(''); // To show error messages
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Starts loading
        if (pass !== confirmPass) {
            setError("Passwords do not match!");
            setLoading(false); // Stops loading
            return;
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/users/register/', {
                username: name,
                email: email,
                password: pass
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }                
            });

            if (response.data && response.data.session_id) {
                localStorage.setItem('session_id', response.data.session_id);
                navigate("/dashboard");
            } else {
                setError("Registration failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            setError("An error occurred during registration. Please try again.");
        }
        setLoading(false);
    }

    return (

        <div className='flex items-center justify-center min-h-screen '>
            <div className="p-8 bg-primary-color rounded-lg shadow-md w-full max-w-md">

                <h1 className='text-accent-color font-bold italic text-2xl pb-3 tracking-wider text-center uppercase'>Register Here!</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="flex flex-col space-y-2">
                        <label htmlFor='name' className="text-left text-accent-color font-bold">Username</label>
                        <input required value={name} name="name" id="name" placeholder="Enter a unique username" className='p-2 border rounded' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor='email' className="text-left text-accent-color font-bold">Email</label>
                        <input required className="p-2 border rounded" value={email} type='email' id='email' name='email' placeholder='youremail@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor='password' className="text-left text-accent-color font-bold">Password</label>
                        <input required className="p-2 border rounded" value={pass} type='password' id='password' name='password' placeholder='********' onChange={(e) => setPass(e.target.value)} />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor='confirmPassword' className="text-left text-accent-color font-bold">Confirm Password</label>
                        <input required className="p-2 border rounded" value={confirmPass} type='password' id='confirmPassword' name='confirmPassword' placeholder='Repeat password' onChange={(e) => setConfirmPass(e.target.value)} />
                    </div>

                    <button type="submit" className='w-full bg-secondary-color text-white p-2 rounded-md shadow-md font-bold italic focus:outline-none focus:ring focus:ring-blue-200'>
                        {loading ? 'Registering...' : 'Register'}
                    </button>

                </form>
                <div className="mt-4">
                    <NavLink className='text-accent-color font-semibold text-center' to="/login">Already have an account? Log in here.</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Register;
