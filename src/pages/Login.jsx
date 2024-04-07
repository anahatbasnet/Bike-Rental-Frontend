import React, { useState } from 'react';
import Button from "../components/Buttons";
import { Link } from 'react-router-dom';

export default function Login() {
    const [loginStatus, setLoginStatus] = useState(null);
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            const responseData = await response.json();
    
            if (response.ok) {
                localStorage.setItem('token', responseData.token);
                localStorage.setItem('refreshToken', responseData.refreshToken);
                setLoginStatus(responseData.message);
            } else {
                console.error('Error logging in:', responseData.error);
                if (response.status === 500 && responseData.error === 'Query did not return a unique result: 4 results were returned') {
                    setLoginStatus(responseData.error);
                } else {
                    setLoginStatus("Login failed. Please try again.");
                }
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setLoginStatus("Login failed. Please try again.");
        }
    };
    
          
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mt-[-10rem]">
                <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md py-2 border border-gray-500 px-2"
                            placeholder="Enter your registered email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm rounded-md py-2 border border-gray-500 px-2"
                            placeholder="Enter your password"
                        />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Login
                    </Button>
                    <p>Don't have an account? <Link to='/register'>Register</Link> </p>
                    {loginStatus && <p>{loginStatus}</p>}
                </form>
            </div>
        </div>
    );
}
