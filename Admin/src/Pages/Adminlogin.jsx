import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../assets/pngwing.com-login.png'; 

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            axios.post('http://localhost:3000/admin', {
                email: email,
                password: password
            }).then(function (res) {
                localStorage.setItem("Token",res.data.token)  
                navigate('*')
                alert("You logged in successfully!");
                window.location.reload();
              })
        } catch (err) {
            console.error('Error logging in:', err);
            setError('Invalid email or password');
        }

    };
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
                    {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </div>            
                    
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {/* Heroicon name: lock-closed */}
                                <svg
                                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M4 8V6a4 4 0 118 0v2h2a1 1 0 011 1v7a3 3 0 01-3 3H4a3 3 0 01-3-3V9a1 1 0 011-1h2zm10-2v2H6V6a2 2 0 012-2h4a2 2 0 012 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            Sign in
                        </button>
                    
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
