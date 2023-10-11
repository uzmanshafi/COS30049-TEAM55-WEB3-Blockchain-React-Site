import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }

    return (
            <div className='flex items-center justify-center'>
                <div className="m-20 p-8 bg-primary-color rounded-lg w-80">

                <h1 className='text-primary font-bold italic text-2xl pb-3'>Register</h1>

                    <form onSubmit={handleSubmit} >
                        <label htmlFor='name' className="text-primary font-bold mr-6">Name</label>
                        <br></br>
                        <input value={name} name="name" id="name" placeholder="Name" className='mb-2 p-2 border border-gray-500'/>
                        <br></br>
                        <label htmlFor='email' className="text-primary font-bold mr-6">Email</label>
                        <input className='mb-2' value={email} type='email' id='email' name='email' placeholder='youremail@gmail.com'/>

                        <label htmlFor='password' className="text-primary font-bold mr-6">Password</label>
                        <input value={pass} type='password' id='password' name='password' placeholder='********'/>

                        <button type="submit" className='bg-secondary-color p-2 w-20 rounded-md shadow-lg font-bold italic my-4'>Register</button>
                    </form>
                    <button>
                        <NavLink className='italic' to="/login">Already have an account? Log in here.</NavLink>
                    </button>
                </div>
            </div>
    );
};

export default Login;